import { z } from 'zod';

export const listMoviesQuerySchema = z.object({
  page: z.string().optional().default('1'),
  size: z.string().optional().default('10'),
  year: z.string().optional(),
  winner: z.string().optional(),
  projection: z.string().optional(),
});

export type ListMoviesQuery = z.infer<typeof listMoviesQuerySchema>;
