const logger = require('../util/logger');
const { ValidationError } = require('express-validation');

const requestValidator = (err, req, res, next) => {
    const logObj = {
        ip: req.ip,
        url: req.baseUrl,
        body: req.body,
        params: req.params,
    };

    if (err) {
        logObj.error = err;
        logger.log({
            level: "error",
            message: JSON.stringify(logObj)
        })
        if (err instanceof ValidationError) return res.status(err.statusCode).json(err)
        return res.status(500).json(err)
    }
    next();
};

module.exports = requestValidator;