import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email()
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
