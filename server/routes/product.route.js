const express = require("express");
const { getAll, getProductById,createProduct, updateProduct, deleteProduct, searchProducts,getProductStats } = require("../controllers/product.controller");
const authenticate = require("../middlewares/authenticate.middleware");
const { validateProduct } = require("../middlewares/validation.middleware");

const router = express.Router()
// TODO: Implement the following routes:
// GET /api/products - Get all products
// GET /api/products/:id - Get a specific product
// POST /api/products - Create a new product
// PUT /api/products/:id - Update a product
// DELETE /api/products/:id - Delete a product

//APPLYING AUTH TO ALL PRODUCTS

router.use("/products",authenticate);

// Example route implementation for GET /api/products
router.get('/products',getAll);
router.get("/products/search",searchProducts); //for search
router.get("/products/stats",getProductStats); //for stats
router.get('/products/:id',getProductById );
router.post('/products',validateProduct ,createProduct);
router.put('/products/:id',validateProduct, updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router