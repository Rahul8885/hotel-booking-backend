// ===========================================
// src/routes/payment.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { Booking, Hotel } = require('../models');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Create payment intent (dummy implementation)
router.post('/create-intent', authenticateToken, async (req, res) => {
  try {
    const { bookingId, amount } = req.body;

    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { 
        id: bookingId, 
        userId: req.user.id 
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
        message: 'Booking not found'
      });
    }

    if (booking.paymentStatus === 'paid') {
      return res.status(400).json({
        success: false,
        message: 'Booking is already paid'
      });
    }

    // Create dummy payment intent
    const paymentIntent = {
      id: `pi_${uuidv4()}`,
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      status: 'requires_payment_method',
      client_secret: `pi_${uuidv4()}_secret_${uuidv4()}`,
      created: Math.floor(Date.now() / 1000),
      booking_id: bookingId
    };

    res.json({
      success: true,
      message: 'Payment intent created successfully',
      data: { paymentIntent }
    });
  } catch (error) {
    console.error('Create payment intent error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create payment intent',
      error: error.message
    });
  }
});

// Confirm payment (dummy implementation)
router.post('/confirm', authenticateToken, async (req, res) => {
  try {
    const { paymentIntentId, bookingId, paymentMethod } = req.body;

    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { 
        id: bookingId, 
        userId: req.user.id 
      }
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Simulate payment processing (90% success rate)
    const paymentSuccess = Math.random() > 0.1;
    
    if (paymentSuccess) {
      // Update booking with payment info
      await booking.update({
        status: 'confirmed',
        paymentStatus: 'paid',
        paymentId: paymentIntentId
      });

      res.json({
        success: true,
        message: 'Payment confirmed successfully',
        data: {
          payment: {
            id: paymentIntentId,
            status: 'succeeded',
            amount: booking.totalAmount,
            currency: 'usd',
            paymentMethod: paymentMethod || 'card',
            bookingId: booking.id
          },
          booking
        }
      });
    } else {
      // Payment failed
      await booking.update({
        paymentStatus: 'failed'
      });

      res.status(400).json({
        success: false,
        message: 'Payment failed',
        data: {
          payment: {
            id: paymentIntentId,
            status: 'failed',
            error: 'Your card was declined. Please try a different payment method.'
          }
        }
      });
    }
  } catch (error) {
    console.error('Confirm payment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process payment',
      error: error.message
    });
  }
});

// Get payment status
router.get('/status/:paymentId', authenticateToken, async (req, res) => {
  try {
    const { paymentId } = req.params;

    // Find booking by payment ID
    const booking = await Booking.findOne({
      where: { 
        paymentId,
        userId: req.user.id 
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
        message: 'Payment not found'
      });
    }

    res.json({
      success: true,
      data: {
        payment: {
          id: paymentId,
          status: booking.paymentStatus,
          amount: booking.totalAmount,
          bookingId: booking.id,
          hotelName: booking.hotel.name
        }
      }
    });
  } catch (error) {
    console.error('Get payment status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch payment status',
      error: error.message
    });
  }
});

// Process refund (dummy implementation)
router.post('/refund', authenticateToken, async (req, res) => {
  try {
    const { bookingId, amount, reason } = req.body;

    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { 
        id: bookingId, 
        userId: req.user.id,
        paymentStatus: 'paid'
      }
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Paid booking not found'
      });
    }

    // Simulate refund processing
    const refundAmount = amount || booking.totalAmount;
    const refundId = `re_${uuidv4()}`;

    // Update booking status
    await booking.update({
      paymentStatus: 'refunded',
      status: 'cancelled'
    });

    res.json({
      success: true,
      message: 'Refund processed successfully',
      data: {
        refund: {
          id: refundId,
          amount: refundAmount,
          currency: 'usd',
          status: 'succeeded',
          reason: reason || 'requested_by_customer',
          bookingId: booking.id
        }
      }
    });
  } catch (error) {
    console.error('Process refund error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process refund',
      error: error.message
    });
  }
});

module.exports = router;

