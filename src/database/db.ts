import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { Movie } from '../models/Movie';

type Data = { movies: Movie[] };

const adapter = new JSONFile<Data>('db.json');
const db = new Low<Data>(adapter, { movies: [] });

export async function initDb() {
  await db.read();
}

export default db;
