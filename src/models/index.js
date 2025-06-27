// ===========================================
// src/models/index.js
const User = require('./User');
const Hotel = require('./Hotel');
const Booking = require('./Booking');

// Define associations
User.hasMany(Booking, { foreignKey: 'userId', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Hotel.hasMany(Booking, { foreignKey: 'hotelId', as: 'bookings' });
Booking.belongsTo(Hotel, { foreignKey: 'hotelId', as: 'hotel' });

module.exports = {
  User,
  Hotel,
  Booking
};
