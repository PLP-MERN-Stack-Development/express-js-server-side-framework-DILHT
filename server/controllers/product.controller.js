const products = require("../models/product.model")
const { v4: uuidv4 } = require('uuid');
const {NotFoundError, ValidationError} = require('../errors/customError');



const getAll = (req, res) => {
    // get all products
    // res.json({ message: "Get all products", data: products });

    //filtering, pagination,
    let filteredProducts = [...products];

    // Filtering by category
    if (req.query.category) {
        filteredProducts = filteredProducts.filter(product => product.category === req.query.category);
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || filteredProducts.length;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return res.status(200).json({
        page: page,
        limit: limit,
        total: filteredProducts.length,
        data: paginatedProducts
    });
}

const getProductById = (req, res) => {
    try{
        const productId = req.params.id;
        const product = products.find(product => product.id === productId)
        if(product){
            return res.status(200).json({ message: "Get product by ID", data: product })
        }
    }catch(error){
        next(error);
    }
    throw new NotFoundError("Product not found");
};

const createProduct = (req, res) => {
    const newProduct = {
    id: uuidv4(),
    ...req.body
    };
    
    products.push(newProduct);
    return res.status(201).json({ message: "Product created", data: newProduct });
}

const updateProduct = (req,res) => {
    const productId = req.params.id;
    const updatedData = req.body;
    //index of the product
    const index = products.findIndex(product => product.id === productId);    
    
    if (index !== -1) {
    // Update the existing product in place
    products[index] = { ...products[index], ...updatedData };

    return res.status(200).json({
        message: "Product updated",
        data: products[index]
    });
    }
    throw new NotFoundError("Product not found");
}

const deleteProduct = (req,res) => {
    const productId = req.params.id;
    const index = products.findIndex(product => product.id === productId);
    if(index !== -1){
        products.splice(index, 1);
        return res.status(200).json({ message: "Product deleted" });
    }
    throw new NotFoundError("Product not found");
}

//searcch functionality
const searchProducts = (req, res) => {
    const searchTerm = req.query.q;

    if (!searchTerm) {
        return res.status(200).json({
                message: "No search term provided. Showing all products.",
                total: products.length,
                data: products
            });
        // throw new ValidationError("Search term 'q' is required");
    }

    const results = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );  

    return res.status(200).json({
        message: `Search results for ${searchTerm}`,
        total: results.length,
        data: results
    });
}

//add stats functionality
const getProductStats = (req, res) => {
    const stats ={
        totalProducts: products.length,
        categories: {},
        inStock: products.filter(product => product.inStock).length,
        outOfStock: products.filter(product => !product.inStock).length,
    }

    //COUNT
    products.forEach(product => {
        if(stats.categories[product.category]){
            stats.categories[product.category] += 1;
        }else{
            stats.categories[product.category] = 1;
        }
    });

    return res.status(200).json({
        message: "Product statistics",
        data: stats
    });

}

module.exports = { getAll, getProductById, createProduct,updateProduct, deleteProduct, searchProducts, getProductStats };