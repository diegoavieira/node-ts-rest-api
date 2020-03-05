import { format, createLogger, transports } from 'winston';

const dateNowFormat = new Date(Date.now()).toUTCString();

const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.printf(info => {
        return `${info.level.toUpperCase()} | ${info.message}`;
      })
    }),
    new transports.File({
      level: 'error',
      filename: `./logs/error.log`,
      maxsize: 5242880,
      format: format.printf(info => {
        return `${dateNowFormat} | ${info.message}`;
      })
    })
  ]
});

export { logger };
