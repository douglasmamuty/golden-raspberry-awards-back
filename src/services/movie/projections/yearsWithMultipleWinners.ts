import { Movie } from '../../../models/Movie';
import { YearWithMultipleWinners } from '../response/movieResponse';

export function getYearsWithMultipleWinners(
  movies: Movie[],
): YearWithMultipleWinners {
  const yearCount: Record<number, number> = {};

  for (const movie of movies) {
    if (movie.winner) {
      yearCount[movie.year] = (yearCount[movie.year] || 0) + 1;
    }
  }

  const result: YearWithMultipleWinners = {
    years: Object.entries(yearCount)
      .filter(([_, count]) => count > 1)
      .map(([year, count]) => ({
        year: Number(year),
        winnerCount: count,
      }))
      .sort((a, b) => a.year - b.year),
  };

  return result;
}
