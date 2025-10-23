// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const app = require('./express');
const config = require('../config/config');



// Middleware setup
app.use(bodyParser.json());



// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});

