// ===========================================
// src/routes/users.js
const express = require('express');
const { User, Booking, Hotel } = require('../models');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Get user dashboard data
router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    // Get booking statistics
    const [totalBookings, activeBookings, completedBookings, cancelledBookings] = await Promise.all([
      Booking.count({ where: { userId } }),
      Booking.count({ where: { userId, status: 'confirmed' } }),
      Booking.count({ where: { userId, status: 'completed' } }),
      Booking.count({ where: { userId, status: 'cancelled' } })
    ]);

    // Get recent bookings
    const recentBookings = await Booking.findAll({
      where: { userId },
      include: [
        {
          model: Hotel,
          as: 'hotel',
          attributes: ['id', 'name', 'city', 'imageUrl', 'rating']
        }
      ],
      limit: 5,
      order: [['createdAt', 'DESC']]
    });

    // Calculate total spent
    const totalSpentResult = await Booking.sum('totalAmount', {
      where: { 
        userId, 
        paymentStatus: 'paid' 
      }
    });

    const dashboardData = {
      statistics: {
        totalBookings,
        activeBookings,
        completedBookings,
        cancelledBookings,
        totalSpent: totalSpentResult || 0
      },
      recentBookings,
      user: req.user
    };

    res.json({
      success: true,
      data: dashboardData
    });
  } catch (error) {
    console.error('Get dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard data',
      error: error.message
    });
  }
});

// Update user preferences
router.put('/preferences', authenticateToken, async (req, res) => {
  try {
    const { preferences } = req.body;
    
    // For now, we'll store preferences as JSON in a hypothetical preferences field
    // In a real app, you'd add a preferences column to the users table
    
    res.json({
      success: true,
      message: 'Preferences updated successfully',
      data: { preferences }
    });
  } catch (error) {
    console.error('Update preferences error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update preferences',
      error: error.message
    });
  }
});

// Delete user account
router.delete('/account', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;

    // Check for active bookings
    const activeBookings = await Booking.count({
      where: { 
        userId, 
        status: ['pending', 'confirmed'] 
      }
    });

    if (activeBookings > 0) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete account with active bookings. Please cancel all bookings first.'
      });
    }

    // Soft delete - update bookings to anonymize user data
    await Booking.update(
      { userId: null },
      { where: { userId } }
    );

    // Delete user account
    await User.destroy({ where: { id: userId } });

    res.json({
      success: true,
      message: 'Account deleted successfully'
    });
  } catch (error) {
    console.error('Delete account error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete account',
      error: error.message
    });
  }
});

module.exports = router;
