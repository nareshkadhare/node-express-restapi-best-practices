const logger = require('../util/logger');

const requestLogger = (req, res, next) => {

    const logObj = {
        ip: req.ip,
        url: req.baseUrl,
        body: req.body,
        params: req.params
    }
    logger.log({
        level: "info",
        message: JSON.stringify(logObj)
    });
    next();
}

module.exports = requestLogger;