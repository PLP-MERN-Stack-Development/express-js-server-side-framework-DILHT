const errorHandler = (error, req, res, next) => {
    console.error('Error caught in handler:', error);
    
    let statusCode = 500;
    let message = 'Internal server error';

    // Handle different error types
    if (error.name === 'NotFoundError') {
        statusCode = 404;
        message = error.message;
    } else if (error.name === 'ValidationError') {
        statusCode = 400;
        message = error.message;
    }

    res.status(statusCode).json({
        error: true,
        message: message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    });
}

module.exports = errorHandler;