import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { UserModel } from '@api';

export class UserController {
  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = getRepository(UserModel);
    const users = await userRepository.find({});
    res.json(users);
  };
}
