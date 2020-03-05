import { format, createLogger, transports, Logger } from 'winston';

export default class LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
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
            return `${this.dateFormat()} | ${info.message ||
              info.level} | ${JSON.stringify(info)}`;
          })
        })
      ]
    });
  }

  private dateFormat() {
    return new Date(Date.now()).toUTCString();
  }

  async info(message: any) {
    this.logger.log('info', message);
  }

  async error(message: any) {
    this.logger.log('error', message);
  }
}
