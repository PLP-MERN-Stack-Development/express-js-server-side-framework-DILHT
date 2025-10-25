const config = require('../../config/config');

const authenticate = (req,res,next) => {

    const apiKey = req.header('x-api-key') || req.authorization;

    const validApiKey = config.apiKey;
    if(!apiKey){
        return res.status(401).json({
            error:"Authentication required",
            message: "please provide an api key in the 'x-api-key' header"});

    }

    if(apiKey !== validApiKey){
        return res.status(403).json({
            error:"Forbidden",
            message: "Invalid API key provided"
        });
    }
    console.log("Authentication successful");
    // console.log(req.header)
    next()
}

module.exports = authenticate;