import db from '../database/db';
import { Movie } from '../models/Movie';
import { loadCSV } from '../utils/csvLoader';
import { randomUUID } from 'crypto';

export async function seedMoviesFromCSV() {
  const existing = db.data?.movies ?? [];
  if (existing.length > 0) return;

  const rows = loadCSV('../data/movielist.csv');

  const movies = rows.map(
    (row: any): Movie => ({
      id: randomUUID(),
      producers: row.producers
        .split(/\s*(?:,|and)\s*/)
        .map((p: string) => p.trim()),
      winner: !!row.winner,
      studios: row.studios.split(',').map((p: string) => p.trim()),
      title: row.title,
      year: parseInt(row.year),
    }),
  );

  db.data!.movies = movies;
  await db.write();
}
