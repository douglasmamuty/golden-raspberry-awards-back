import { Request, Response } from 'express';
import { listMoviesQuerySchema } from '../dtos/movie';
import { listMovieService, ProjectionType } from '../services/movie/movie';

export const listMovies = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const parsed = listMoviesQuerySchema.safeParse(req.query);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.format() });
    return;
  }

  const { page, size, year, winner, projection } = parsed.data;

  const result = await listMovieService({
    page: page === undefined ? page : parseInt(page),
    size: size === undefined ? size : parseInt(size),
    year,
    winner,
    projection: projection as ProjectionType,
  });

  res.status(200).json(result);
};
