// ===========================================
// src/routes/bookings.js
const express = require('express');
const { Op } = require('sequelize');
const { Booking, Hotel, User } = require('../models');
const { authenticateToken } = require('../middleware/auth');
const { validateRequest, bookingSchema } = require('../middleware/validation');
const { sendBookingConfirmation, sendBookingCancellation } = require('../utils/email');

const router = express.Router();

// Create new booking
router.post('/', authenticateToken, validateRequest(bookingSchema), async (req, res) => {
  try {
    const { hotelId, checkInDate, checkOutDate, guests, guestDetails } = req.body;
    const userId = req.user.id;

    // Check if hotel exists
    const hotel = await Hotel.findByPk(hotelId);
    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: 'Hotel not found'
      });
    }

    // Calculate total amount
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const totalAmount = nights * hotel.pricePerNight;

    // Create booking
    const booking = await Booking.create({
      userId,
      hotelId,
      checkInDate,
      checkOutDate,
      guests,
      totalAmount,
      guestDetails,
      status: 'pending',
      paymentStatus: 'pending'
    });

    // Fetch complete booking data with hotel info
    const completeBooking = await Booking.findByPk(booking.id, {
      include: [
        {
          model: Hotel,
          as: 'hotel',
          attributes: ['id', 'name', 'address', 'city', 'country', 'imageUrl']
        }
      ]
    });

    // Send confirmation email
    try {
      await sendBookingConfirmation(req.user.email, {
        guestName: req.user.fullName,
        hotelName: hotel.name,
        hotelAddress: hotel.address,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        guests,
        totalAmount,
        bookingId: booking.id
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the booking if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: { booking: completeBooking }
    });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create booking',
      error: error.message
    });
  }
});

// Get user bookings
router.get('/user', authenticateToken, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const userId = req.user.id;
    const offset = (page - 1) * limit;

    const whereClause = { userId };
    if (status) {
      whereClause.status = status;
    }

    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Hotel,
          as: 'hotel',
          attributes: ['id', 'name', 'address', 'city', 'country', 'imageUrl', 'rating']
        }
      ],
      limit: parseInt(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        bookings,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(count / limit),
          totalItems: count,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Get user bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings',
      error: error.message
    });
  }
});

// Get single booking
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    const booking = await Booking.findOne({
      where: { 
        id, 
        userId: req.user.id 
      },
      include: [
        {
          model: Hotel,
          as: 'hotel',
          attributes: ['id', 'name', 'description', 'address', 'city', 'country', 'imageUrl', 'images', 'amenities', 'rating']
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: { booking }
    });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch booking',
      error: error.message
    });
  }
});

// Cancel booking
router.put('/:id/cancel', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    const booking = await Booking.findOne({
      where: { 
        id, 
        userId: req.user.id,
        status: { [Op.in]: ['pending', 'confirmed'] }
      },
      include: [
        {
          model: Hotel,
          as: 'hotel',
          attributes: ['name']
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found or cannot be cancelled'
      });
    }

    // Update booking status
    await booking.update({
      status: 'cancelled',
      paymentStatus: booking.paymentStatus === 'paid' ? 'refunded' : 'cancelled'
    });

    // Send cancellation email
    try {
      await sendBookingCancellation(req.user.email, {
        guestName: req.user.fullName,
        hotelName: booking.hotel.name,
        checkInDate: booking.checkInDate,
        checkOutDate: booking.checkOutDate,
        bookingId: booking.id
      });
    } catch (emailError) {
      console.error('Cancellation email sending failed:', emailError);
    }

    res.json({
      success: true,
      message: 'Booking cancelled successfully',
      data: { booking }
    });
  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to cancel booking',
      error: error.message
    });
  }
});

// Update booking status (for admin use)
router.put('/:id/status', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status, paymentStatus } = req.body;
    
    const booking = await Booking.findOne({
      where: { 
        id, 
        userId: req.user.id 
      }
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    const updateData = {};
    if (status) updateData.status = status;
    if (paymentStatus) updateData.paymentStatus = paymentStatus;

    await booking.update(updateData);

    res.json({
      success: true,
      message: 'Booking updated successfully',
      data: { booking }
    });
  } catch (error) {
    console.error('Update booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update booking',
      error: error.message
    });
  }
});

module.exports = router;
