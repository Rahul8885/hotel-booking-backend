// src/utils/email.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendBookingConfirmation = async (userEmail, bookingDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Hotel Booking Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c3e50;">Booking Confirmation</h2>
        <p>Dear ${bookingDetails.guestName},</p>
        <p>Your hotel booking has been confirmed! Here are your booking details:</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">Booking Details</h3>
          <p><strong>Hotel:</strong> ${bookingDetails.hotelName}</p>
          <p><strong>Address:</strong> ${bookingDetails.hotelAddress}</p>
          <p><strong>Check-in:</strong> ${bookingDetails.checkInDate}</p>
          <p><strong>Check-out:</strong> ${bookingDetails.checkOutDate}</p>
          <p><strong>Guests:</strong> ${bookingDetails.guests}</p>
          <p><strong>Total Amount:</strong> $${bookingDetails.totalAmount}</p>
          <p><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
        </div>
        
        <p>If you have any questions, please don't hesitate to contact us.</p>
        <p>Thank you for choosing our service!</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #7f8c8d; font-size: 12px;">
            This is an automated email. Please do not reply to this message.
          </p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending failed: ', error);
    return { success: false, error: error.message };
  }
};

const sendBookingCancellation = async (userEmail, bookingDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Hotel Booking Cancellation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e74c3c;">Booking Cancellation</h2>
        <p>Dear ${bookingDetails.guestName},</p>
        <p>Your hotel booking has been cancelled. Here are the details:</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">Cancelled Booking</h3>
          <p><strong>Hotel:</strong> ${bookingDetails.hotelName}</p>
          <p><strong>Check-in:</strong> ${bookingDetails.checkInDate}</p>
          <p><strong>Check-out:</strong> ${bookingDetails.checkOutDate}</p>
          <p><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
        </div>
        
        <p>If you have any questions about refunds, please contact our support team.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #7f8c8d; font-size: 12px;">
            This is an automated email. Please do not reply to this message.
          </p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Cancellation email sent: ', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Cancellation email sending failed: ', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendBookingConfirmation,
  sendBookingCancellation
};