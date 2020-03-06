import { Router } from 'express';
import { UserController } from '@api';

const userRoute = Router();

userRoute.route('/').get(UserController.getAll);

export default userRoute;
