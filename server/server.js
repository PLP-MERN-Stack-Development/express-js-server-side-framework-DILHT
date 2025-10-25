// server.js - Starter Express server for Week 2 assignment

// Import required modules
const app = require('./express');
const config = require('../config/config');



// Root route
app.get('/', (req, res) => {
  // console.log(req.header)
  res.send('Hello world! Welcome to my Express.js server.');
});

// app.use("*",(req,res)=>{
//   res.status(404).json({
//     error:"Not Found",
//     message:`The requested URL ${req.originalUrl} was not found on this server.`
//   });
// });

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});

