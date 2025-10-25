const express = require("express")
// const bodyParser = require('body-parser');
const app = express()
const router = require("./routes/product.route")
const loggerMiddleware = require("./middlewares/logger.middleware")
const errorHandler = require("./middlewares/errorHandler.middleware")

//using logger middleware
app.use(loggerMiddleware);

//middle ware 
app.use(express.json());
app.use("/api",router)
app.use(errorHandler)

module.exports = app