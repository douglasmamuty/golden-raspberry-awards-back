/* eslint-disable no-unused-vars */
import db from '../../database/db';
import { Movie } from '../../models/Movie';
import {
  getMaxMinWinIntervalForProducers,
  getYearsWithMultipleWinners,
  getStudiosWithWinCount,
} from './projections';
import { ListMoviesResult, PaginatedMovies } from './response/movieResponse';

interface FilterParams {
  page: number;
  size: number;
  year?: string;
  winner?: string;
  projection?: string;
}

enum ProjectionType {
  MAX_MIN_INTERVAL = 'max-min-win-interval-for-producers',
  MULTIPLE_WIN_YEARS = 'years-with-multiple-winners',
  STUDIOS_WITH_WIN_COUNT = 'studios-with-win-count',
}

export async function listMovieService({
  page,
  size,
  year,
  winner,
  projection,
}: FilterParams): Promise<ListMoviesResult> {
  let movies: Movie[] = db.data?.movies ?? [];

  switch (projection) {
    case ProjectionType.MAX_MIN_INTERVAL:
      return getMaxMinWinIntervalForProducers(movies.filter((m) => m.winner));
    case ProjectionType.STUDIOS_WITH_WIN_COUNT:
      return getStudiosWithWinCount(movies);
    case ProjectionType.MULTIPLE_WIN_YEARS:
      return getYearsWithMultipleWinners(movies);
  }

  if (year) {
    movies = movies.filter((movie) => movie.year === Number(year));
  }

  if (winner !== undefined) {
    movies = movies.filter((movie) => String(movie.winner) === String(winner));
  }

  if (page) {
    const start = (page - 1) * size;
    const end = start + size;
    const totalElements = movies.length;
    const totalPages = Math.ceil(totalElements / size);
    const result: PaginatedMovies = {
      content: movies.slice(start, end),
      totalElements,
      totalPages,
      page: page,
      size: size,
      last: page === totalPages,
      first: page === 1,
      numberOfElements: totalElements,
      pageable: {
        sort: { sorted: false, unsorted: true },
        paged: true,
        pageSize: size,
        pageNumber: page,
        unpaged: totalElements < size ? true : false,
        offset: page * size,
      },
    };

    return result;
  }

  return movies;
}
