# Hotel Booking Backend API

A RESTful API for a hotel booking mobile application built with Node.js, Express, and PostgreSQL, deployed on AWS EC2 with RDS.

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL (AWS RDS)
- **Deployment:** AWS EC2
- **Authentication:** JWT
- **Email Service:** Nodemailer
- **Environment:** dotenv

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- AWS Account (EC2 & RDS)
- Git

## 🛠 Installation & Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rahul8885/hotel-booking-backend.git
   cd hotel-booking-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=3000
   
   # Database Configuration
   DB_HOST=your-rds-endpoint.amazonaws.com
   DB_PORT=5432
   DB_NAME=hotel_booking_db
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=7d
   
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   

   ```

4. **Database Setup**
   ```bash
   # Run migrations
   npm run migrate
   
   # Seed database (optional)
   npm run seed
   ```

5. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```


## 🚀 AWS Deployment

### EC2 Setup

1. **Launch EC2 Instance**
   - AMI: Amazon Linux 2
   - Instance Type: t2.micro (free tier)
   - Security Group: Allow HTTP (80), HTTPS (443), SSH (22), and Custom TCP (3000)

2. **Connect to EC2**
   ```bash
   ssh -i your-key.pem ec2-user@your-ec2-public-ip
   ```

3. **Install Node.js**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   nvm install node
   nvm use node
   ```

4. **Install PM2**
   ```bash
   npm install -g pm2
   ```

5. **Clone and Setup**
   ```bash
   git clone https://github.com/yourusername/hotel-booking-backend.git
   cd hotel-booking-backend
   npm install
   ```

6. **Environment Setup**
   ```bash
   nano .env
   # Add your production environment variables
   ```

7. **Start with PM2**
   ```bash
   pm2 start server.js --name "hotel-backend"
   pm2 startup
   pm2 save
   ```

### RDS Setup

1. **Create PostgreSQL RDS Instance**
   - Engine: PostgreSQL
   - Version: 13.x or higher
   - Instance Class: db.t3.micro (free tier)
   - Public Access: Yes (for development)

2. **Configure Security Group**
   - Allow inbound connections on port 5432 from your EC2 security group

3. **Connect and Setup Database**
   ```bash
   psql -h your-rds-endpoint -U your-username -d postgres
   CREATE DATABASE hotel_booking_db;
   ```

## 📧 Email Notifications

The application sends email notifications for:
- Booking confirmation
- Booking cancellation
- Payment confirmation

Configure SMTP settings in your `.env` file to enable email functionality.

