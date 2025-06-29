// ===========================================
// src/routes/hotels.js
const express = require('express');
const { Op } = require('sequelize');
const { Hotel } = require('../models');
const { mockHotels } = require('../utils/mockData');

const router = express.Router();

// Initialize mock data (run once)
let isDataInitialized = false;

const initializeMockData = async () => {
  // if (!isDataInitialized) {
      await Hotel.bulkCreate(mockHotels);
    try {
      const hotelCount = await Hotel.count();
      console.log(`Current hotel count: ${hotelCount}`);
      if (hotelCount === 0) {
    
        console.log('Mock hotel data initialized');
      }
      isDataInitialized = true;
    } catch (error) {
      console.error('Error initializing mock data:', error);
    }
  // }
};

// Get all hotels with pagination and filtering
router.get('/', async (req, res) => {
  try {
    await initializeMockData();

    const {
      page = 1,
      limit = 10,
      city,
      minPrice,
      maxPrice,
      rating,
      search
    } = req.query;

    const offset = (page - 1) * limit;
    const whereClause = { isActive: true };

    // Apply filters
    if (city) {
      whereClause.city = { [Op.iLike]: `%${city}%` };
    }

    if (minPrice || maxPrice) {
      whereClause.pricePerNight = {};
      if (minPrice) whereClause.pricePerNight[Op.gte] = parseFloat(minPrice);
      if (maxPrice) whereClause.pricePerNight[Op.lte] = parseFloat(maxPrice);
    }

    if (rating) {
      whereClause.rating = { [Op.gte]: parseFloat(rating) };
    }

    if (search) {
      whereClause[Op.or] = [
        { name: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } },
        { city: { [Op.iLike]: `%${search}%` } }
      ];
    }

    const { count, rows: hotels } = await Hotel.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset,
      order: [['rating', 'DESC'], ['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        hotels,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(count / limit),
          totalItems: count,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Get hotels error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch hotels',
      error: error.message
    });
  }
});

// Get single hotel by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const hotel = await Hotel.findOne({
      where: { id, isActive: true }
    });

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: 'Hotel not found'
      });
    }

    res.json({
      success: true,
      data: { hotel }
    });
  } catch (error) {
    console.error('Get hotel error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch hotel',
      error: error.message
    });
  }
});

// Search hotels with advanced filters
router.get('/search/advanced', async (req, res) => {
  try {
    await initializeMockData();
  
    const {
      city,
      checkIn,
      checkOut,
      guests = 1,
      minPrice,
      maxPrice,
      amenities,
      rating,
      page = 1,
      limit = 10
    } = req.query;

    const offset = (page - 1) * limit;
    const whereClause = { isActive: true };

    // City filter
    if (city) {
      whereClause.city = { [Op.iLike]: `%${city}%` };
    }

    // Price range filter
    if (minPrice || maxPrice) {
      whereClause.pricePerNight = {};
      if (minPrice) whereClause.pricePerNight[Op.gte] = parseFloat(minPrice);
      if (maxPrice) whereClause.pricePerNight[Op.lte] = parseFloat(maxPrice);
    }

    // Rating filter
    if (rating) {
      whereClause.rating = { [Op.gte]: parseFloat(rating) };
    }

    // Amenities filter
    if (amenities) {
      const amenityList = amenities.split(',');
      whereClause.amenities = {
        [Op.contains]: amenityList
      };
    }

    const { count, rows: hotels } = await Hotel.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset,
      order: [['rating', 'DESC'], ['pricePerNight', 'ASC']]
    });

    res.json({
      success: true,
      data: {
        hotels,
        searchParams: {
          city,
          checkIn,
          checkOut,
          guests: parseInt(guests)
        },
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(count / limit),
          totalItems: count,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Hotel search error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search hotels',
      error: error.message
    });
  }
});

// Get featured hotels
router.get('/featured/list', async (req, res) => {
  try {
    await initializeMockData();

    const featuredHotels = await Hotel.findAll({
      where: {
        isActive: true,
        rating: { [Op.gte]: 4.0 }
      },
      limit: 6,
      order: [['rating', 'DESC']]
    });

    res.json({
      success: true,
      data: { hotels: featuredHotels }
    });
  } catch (error) {
    console.error('Get featured hotels error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured hotels',
      error: error.message
    });
  }
});

// Get popular cities
router.get('/cities/popular', async (req, res) => {
  try {
    await initializeMockData();

    const cities = await Hotel.findAll({
      attributes: [
        'city',
        'country',
        [Hotel.sequelize.fn('COUNT', Hotel.sequelize.col('id')), 'hotelCount'],
        [Hotel.sequelize.fn('AVG', Hotel.sequelize.col('rating')), 'avgRating'],
        [Hotel.sequelize.fn('MIN', Hotel.sequelize.col('pricePerNight')), 'minPrice']
      ],
      where: { isActive: true },
      group: ['city', 'country'],
      order: [[Hotel.sequelize.fn('COUNT', Hotel.sequelize.col('id')), 'DESC']],
      limit: 10
    });

    res.json({
      success: true,
      data: { cities }
    });
  } catch (error) {
    console.error('Get popular cities error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch popular cities',
      error: error.message
    });
  }
});

module.exports = router;
