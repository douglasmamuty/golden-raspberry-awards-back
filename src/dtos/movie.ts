import { z } from 'zod';

export const listMoviesQuerySchema = z.object({
  page: z.string().optional(),
  size: z.string().optional(),
  year: z.string().optional(),
  winner: z.string().optional(),
  projection: z.string().optional(),
});

export type ListMoviesQuery = z.infer<typeof listMoviesQuerySchema>;
