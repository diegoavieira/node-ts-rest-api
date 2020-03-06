import { Router } from 'express';

import userRoute from './user.route';

const Routes = Router();

Routes.use('/user', userRoute);

export { Routes };
