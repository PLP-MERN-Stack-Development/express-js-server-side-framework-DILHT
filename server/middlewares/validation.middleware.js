const { ValidationError } = require('../errors/customError');

const validateProduct = (req, res, next) => {
    const { name, price, category } = req.body;

    //check required fields
    if (!name || !price || !category) {
        throw new ValidationError('Name, price, and category are required fields.');
    }

    //check data types
    if (typeof name !== 'string' || typeof category !== 'string') {
        throw new ValidationError('Name and category must be strings.');
    }
    if (typeof price !== 'number') {
        throw new ValidationError('Price must be a number.');
    }

    next();
}

module.exports = {
    validateProduct
};