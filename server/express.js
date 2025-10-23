const express = require("express")
const bodyParser = require('body-parser');
const app = express()
const router = require("./routes/product.route")


app.use(bodyParser.json());
app.use("/api",router)

module.exports = app