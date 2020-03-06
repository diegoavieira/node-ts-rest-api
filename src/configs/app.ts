import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { Routes } from '@api';

const app = express();

app.disable('x-powered-by');

// app.set('port', envs.port);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', Routes);

export { app };
