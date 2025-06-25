import { Movie } from '../../../models/Movie';

interface IntervalResult {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

interface IntervalProjectionResult {
  min: IntervalResult[];
  max: IntervalResult[];
}

export function getMaxMinWinIntervalForProducers(
  movies: Movie[],
): IntervalProjectionResult {
  const winsByProducer: Record<string, number[]> = {};

  for (const movie of movies) {
    if (!movie.winner) continue;

    for (const producer of movie.producers) {
      if (!winsByProducer[producer]) {
        winsByProducer[producer] = [];
      }
      winsByProducer[producer].push(movie.year);
    }
  }

  const intervals: IntervalResult[] = [];

  for (const [producer, years] of Object.entries(winsByProducer)) {
    if (years.length < 2) continue;

    const sortedYears = years.sort((a, b) => a - b);

    for (let i = 1; i < sortedYears.length; i++) {
      intervals.push({
        producer,
        interval: sortedYears[i] - sortedYears[i - 1],
        previousWin: sortedYears[i - 1],
        followingWin: sortedYears[i],
      });
    }
  }

  const minInterval = Math.min(...intervals.map((i) => i.interval));
  const maxInterval = Math.max(...intervals.map((i) => i.interval));

  return {
    min: intervals.filter((i) => i.interval === minInterval),
    max: intervals.filter((i) => i.interval === maxInterval),
  };
}
