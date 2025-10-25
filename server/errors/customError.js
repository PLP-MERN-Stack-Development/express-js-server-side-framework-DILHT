

class NotFoundError extends Error {
    constructor(message = 'Resource not found') {
        super(message);
        this.name = 'NotFoundError';

    }
}

class ValidationError extends Error {
    constructor(message = "Validation Failed"){
        super(message);
        this.name = "ValidationError";
    }
}

module.exports = {
    NotFoundError,
    ValidationError
}