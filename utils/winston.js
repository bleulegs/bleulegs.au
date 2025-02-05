const winston = require('winston');

const getFormattedTimestamp = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month} ${hours}:${minutes}`;
};

const logger = () => {
    const logFormat = winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level}]: ${message}`;
    });

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp({ format: getFormattedTimestamp }),
            logFormat
        ),
        transports: [
            new winston.transports.Console({ 
                format: winston.format.combine(
                    winston.format.colorize(),
                    logFormat
                )
            }),
            new winston.transports.File({ filename: 'server.log' })
        ],
    });
    return logger;
};

module.exports = { logger };