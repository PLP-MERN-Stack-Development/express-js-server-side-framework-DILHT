const express = require("express");
const { getAll, getProductById,createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");

const router = express.Router()
// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

// Example route implementation for GET /api/products
router.get('/products',getAll);

router.get('/products/:id',getProductById );
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router