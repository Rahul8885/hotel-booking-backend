// ===========================================
// src/models/Booking.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id'
    }
  },
  hotelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'hotel_id',
    references: {
      model: 'hotels',
      key: 'id'
    }
  },
  checkInDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'check_in_date'
  },
  checkOutDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'check_out_date'
  },
  guests: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'total_amount'
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
    defaultValue: 'pending'
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'paid', 'failed', 'refunded'),
    defaultValue: 'pending',
    field: 'payment_status'
  },
  paymentId: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'payment_id'
  },
  guestDetails: {
    type: DataTypes.JSONB,
    allowNull: true,
    field: 'guest_details'
  }
}, {
  tableName: 'bookings',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Booking;
