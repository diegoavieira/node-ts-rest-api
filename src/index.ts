import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import LoggerService from './services/logger.service';

const logger = new LoggerService();
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/', routes);

const port = app.get('port');

createConnection()
  .then(async connection => {
    logger.info(connection);

    app.listen(8000, () => {
      logger.info(`Server running at port ${port}`);
    });
  })
  .catch(error => logger.error(error));
