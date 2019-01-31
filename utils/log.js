const winston = require('winston')
const path = require('path')

var logPath = path.join(__dirname, '..', '.logs', 'app.log')

var options = {
    file: {
        level: 'info',
        filename: `${logPath}`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
}

const logger = winston.createLogger({
    format: winston.format.json(),
    level: 'info',
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
    ],
    exitOnError: false, // do not exit on handled exceptions
})

module.exports = logger
