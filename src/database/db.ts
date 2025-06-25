import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { User } from '../models/User'; 

type Data = { users: User[] };

const adapter = new JSONFile<Data>('db.json');
const db = new Low<Data>(adapter, { users: [] });

export async function initDb() {
  await db.read();
}

export default db;
