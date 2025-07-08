import { Low, Memory } from 'lowdb';
import { Movie } from '../models/Movie';

type Data = { movies: Movie[] };

const adapter = new Memory<Data>();
const db = new Low<Data>(adapter, { movies: [] });

export async function initDb() {
  await db.read();
}

export default db;
