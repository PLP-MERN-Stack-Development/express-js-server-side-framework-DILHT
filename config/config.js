const dotenv = require('dotenv');
dotenv.config();

const config = {
    apiKey: process.env.API_KEY || '12345',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    env: process.env.NODE_ENV || 'development',
}

module.exports = config;