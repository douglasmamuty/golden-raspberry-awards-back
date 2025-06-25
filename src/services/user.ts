import db from '../database/db';
import { CreateUserDTO } from '../dtos/user';
import { User } from '../models/User';
import { randomUUID } from 'crypto';

export async function createUserService(data: CreateUserDTO): Promise<User> {
  const user: User = {
    id: randomUUID(),
    ...data,
  };

  db.data!.users.push(user);
  await db.write();

  return user;
}

export async function listUsersService(): Promise<User[]> {
  return db.data!.users;
}
