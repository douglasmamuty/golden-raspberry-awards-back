import { Movie } from '../../../models/Movie';
import { StudiosWithWinCount } from '../response/movieResponse';

export function getStudiosWithWinCount(movies: Movie[]): StudiosWithWinCount {
  const studioWins: Record<string, number> = {};

  for (const movie of movies) {
    if (!movie.winner) continue;

    for (const studio of movie.studios) {
      studioWins[studio] = (studioWins[studio] || 0) + 1;
    }
  }

  const result: StudiosWithWinCount = {
    studios: Object.entries(studioWins)
      .map(([name, winCount]) => ({ name, winCount }))
      .sort((a, b) => b.winCount - a.winCount)
      .slice(0, 3),
  };

  return result;
}
