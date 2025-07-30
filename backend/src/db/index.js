import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = await open({
  filename: path.join(__dirname, 'database.db'),
  driver: sqlite3.Database
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS phones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    imei TEXT NOT NULL,
    color TEXT NOT NULL,
    capacity INTEGER NOT NULL
  )
`);

export default db;
