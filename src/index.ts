import 'reflect-metadata';
import { createConnection } from 'typeorm';

import { app } from './configs';
import { logger } from './utils';

const port = app.get('port');

createConnection()
  .then(async connection => {
    logger.info(connection);

    app.listen(8000, () => {
      logger.info(`Server running at port ${port}`);
    });
  })
  .catch(error => logger.error(error.message));
