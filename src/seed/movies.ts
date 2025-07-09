import db from '../database/db';
import { Movie } from '../models/Movie';
import { loadCSV } from '../utils/csvLoader';

export async function seedMoviesFromCSV() {
  const existing = db.data?.movies ?? [];
  let counter = 0;
  if (existing.length > 0) return;

  const rows = await loadCSV('../data/movielist.csv');

  const movies = rows.map((row: any): Movie => {
    counter += 1;
    return {
      id: counter,
      producers: row.producers
        .split(/\s*,\s*|\s+and\s+/gi)
        .map((p: string) => p.trim())
        .filter((p: string) => p.length > 0),
      winner: !!row.winner,
      studios: row.studios
        .split(',')
        .map((p: string) => p.trim())
        .filter((p: string) => p.length > 0),
      title: row.title,
      year: parseInt(row.year),
    };
  });

  db.data!.movies = movies;
  await db.write();
}
