import type{ Request, Response } from 'express';
import { createUserService, listUsersService } from '../services/user';

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await createUserService(req.body);
  res.status(201).json({
    data: user,
    status: 'created',
  });
};

export const listUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const users = await listUsersService();
  res.status(200).json(users);
};