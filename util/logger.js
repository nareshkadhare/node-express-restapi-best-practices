const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;

const logger = createLogger({
    
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new transports.File({
            filename: 'error.log',
            level: 'error'
        }),
        new transports.File({
            level: 'info',
            filename: 'application.log',
        }),
    ]
})



module.exports = logger;