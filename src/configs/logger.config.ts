import fs from 'fs';
import { LoggerOptions, format, createLogger, transports } from 'winston';

const options: LoggerOptions = {
  transports: [
    new transports.Console({
      format: format.combine(format.colorize({ all: true }), format.simple()),
      handleExceptions: true
    }),
    new transports.File({
      level: 'error',
      filename: 'logs/error.log',
      format: format.combine(format.timestamp(), format.json()),
      handleExceptions: true,
      maxsize: 5242880
    })
  ],
  exitOnError: false
};

const logger = createLogger(options);

if (process.env.NODE_ENV !== 'production') {
  logger.info('Logging initialized at debug level');
}

export default logger;
