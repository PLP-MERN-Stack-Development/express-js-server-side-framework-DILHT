const products = require("../models/product.model")
const { v4: uuidv4 } = require('uuid');



const getAll = (req, res) => {
    // get all products
    res.json({ message: "Get all products", data: products });
}

const getProductById = (req, res) => {
    const productId = req.params.id;
    const product = products.find(product => product.id === productId)
    if(product){
        res.status(200).json({ message: "Get product by ID", data: product })
    }
    res.status(404).json({ message: "Product not found" });
};

const createProduct = (req, res) => {
    const newProduct = {
    id: uuidv4(),  
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    inStock: req.body.inStock ?? true, // default true
    };
    
    products.push(newProduct);
    res.status(201).json({ message: "Product created", data: newProduct });
}

const updateProduct = (req,res) => {
    const productId = req.params.id;
    const updatedData = req.body;
    //index of the product
    const index = products.findIndex(p => p.id === productId);    
    
    if (index !== -1) {
    // Update the existing product in place
    products[index] = { ...products[index], ...updatedData };

    return res.status(200).json({
        message: "Product updated",
        data: products[index]
    });
    }
    res.status(404).json({ message: "Product not found" });
}

const deleteProduct = (req,res) => {
    const productId = req.params.id;
    const index = products.findIndex(product => product.id === productId);
    if(index !== -1){
        products.splice(index, 1);
        return res.status(200).json({ message: "Product deleted" });
    }
    res.status(404).json({ message: "Product not found" });
}


module.exports = { getAll, getProductById, createProduct,updateProduct, deleteProduct };