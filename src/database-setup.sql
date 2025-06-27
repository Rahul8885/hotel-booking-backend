
CREATE DATABASE hotel_booking;



-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    profile_image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create hotels table
CREATE TABLE hotels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    price_per_night DECIMAL(10,2) NOT NULL,
    rating DECIMAL(2,1) DEFAULT 0,
    image_url TEXT,
    images JSONB DEFAULT '[]',
    amenities JSONB DEFAULT '[]',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create bookings table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    hotel_id INTEGER REFERENCES hotels(id) ON DELETE CASCADE,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    guests INTEGER NOT NULL DEFAULT 1,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
    payment_id VARCHAR(255),
    guest_details JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_hotels_city ON hotels(city);
CREATE INDEX idx_hotels_rating ON hotels(rating);
CREATE INDEX idx_hotels_price ON hotels(price_per_night);
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_hotel_id ON bookings(hotel_id);
CREATE INDEX idx_bookings_dates ON bookings(check_in_date, check_out_date);
CREATE INDEX idx_bookings_status ON bookings(status);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_hotels_updated_at BEFORE UPDATE ON hotels
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
# setup-backend.sh
#!/bin/bash

echo "🚀 Setting up Hotel Booking Backend..."

# Create project directory
mkdir -p hotel-booking-backend
cd hotel-booking-backend

# Initialize npm project
npm init -y

# Install dependencies
echo "📦 Installing dependencies..."
npm install express cors helmet morgan dotenv pg sequelize jsonwebtoken bcryptjs nodemailer joi uuid

# Install dev dependencies
npm install --save-dev nodemon

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p src/{config,models,routes,middleware,utils,controllers}

# Create basic files
touch server.js
touch src/config/database.js
touch src/models/{User.js,Hotel.js,Booking.js,index.js}
touch src/routes/{auth.js,hotels.js,bookings.js,payment.js,users.js}
touch src/middleware/{auth.js,validation.js}
touch src/utils/{email.js,mockData.js}

# Create environment file
echo "🔧 Creating environment configuration..."
cat > .env << EOF
NODE_ENV=development
PORT=3000

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=hotel_booking
DB_USER=postgres
DB_PASSWORD=yourpassword

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here-make-it-very-long-and-random

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
EOF

# Update package.json scripts
echo "⚙️ Updating package.json scripts..."
npm pkg set scripts.start="node server.js"
npm pkg set scripts.dev="nodemon server.js"
npm pkg set scripts.test="echo \"Error: no test specified\" && exit 1"

# Create .gitignore
cat > .gitignore << EOF
node_modules/
.env
.env.local
.env.production
.DS_Store
*.log
dist/
build/
coverage/
.nyc_output/
EOF

# Create