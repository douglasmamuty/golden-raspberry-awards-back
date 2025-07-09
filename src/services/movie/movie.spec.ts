import db from '../../database/db';
import { seedMoviesFromCSV } from '../../seed/movies';
import { listMovieService, ProjectionType } from './movie';

describe('Integration - listMovieService with seeded DB', () => {
  beforeEach(async () => {
    await db.read();
    db.data = { movies: [] };
    await seedMoviesFromCSV();
  });

  it('should return all movies from the seeded CSV', async () => {
    const result = await listMovieService({ page: undefined, size: undefined });

    expect(Array.isArray(result)).toBe(true);
    if (Array.isArray(result)) {
      expect(result.length).toBeGreaterThan(0); 
    }
  });

  it('should filter movies by year', async () => {
    const result = await listMovieService({
      page: undefined,
      size: undefined,
      year: '1980',
    });

    expect(Array.isArray(result)).toBe(true);
    if (Array.isArray(result)) {
      expect(result.every((m) => m.year === 1980)).toBe(true);
    }
  });

  it('should return projection: studios with win count', async () => {
    const result = await listMovieService({
      page: undefined,
      size: undefined,
      projection: ProjectionType.STUDIOS_WITH_WIN_COUNT,
    });

    if (!Array.isArray(result) && 'studios' in result) {
      expect(result.studios.length).toBeGreaterThan(0);
      expect(result.studios[0]).toHaveProperty('name');
      expect(result.studios[0]).toHaveProperty('winCount');
    }
  });
});
