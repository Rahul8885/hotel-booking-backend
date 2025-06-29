const Joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details.map(detail => detail.message)
      });
    }
    next();
  };
};


// Validation schemas
const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  fullName: Joi.string().min(2).required(),
  phone: Joi.string().optional()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const bookingSchema = Joi.object({
  hotelId: Joi.number().integer().required(),
  checkInDate: Joi.date().required(),
  checkOutDate: Joi.date().greater(Joi.ref('checkInDate')).required(),
  guests: Joi.number().integer().min(1).required(),
  guestDetails: Joi.object().optional(),
  totalAmount: Joi.number().precision(2).required()
});

module.exports = {
  validateRequest,
  registerSchema,
  loginSchema,
  bookingSchema
};

// ==============================