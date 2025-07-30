import db from './src/db/index.js';

await db.exec(`
  CREATE TABLE IF NOT EXISTS phones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    imei TEXT,
    name TEXT NOT NULL,
    color TEXT,
    capacity INTEGER NOT NULL
  );
`);
