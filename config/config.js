

const config = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    env: process.env.NODE_ENV || 'development',
}

module.exports = config;