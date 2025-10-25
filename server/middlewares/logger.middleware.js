
// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

const loggerMiddleware = (req,res,next) => {
    console.log(`The request METHOD is ${req.method} \n The request URL is ${req.url} \n The request timestamp is - ${new Date().toISOString()}`);
    next();
}

module.exports = loggerMiddleware;