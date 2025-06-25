import { Movie } from '../../../models/Movie';

export interface PaginatedMovies {
  content: Movie[];
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  sort?: {
    sorted: boolean;
    unsorted: boolean;
  };
  pageable?: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
    };
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
}

export interface IntervalResult {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export interface WinIntervalProducerResult {
  min: IntervalResult[];
  max: IntervalResult[];
}

export interface YearWithMultipleWinners {
  years: Array<{
    year: number;
    winnerCount: number;
  }>;
}

export interface StudiosWithWinCount {
  studios: Array<{
    name: string;
    winCount: number;
  }>;
}

export type ListMoviesResult =
  | PaginatedMovies
  | Movie
  | Movie[]
  | WinIntervalProducerResult
  | YearWithMultipleWinners
  | StudiosWithWinCount;
