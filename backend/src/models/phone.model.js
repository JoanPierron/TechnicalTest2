import db from '../db/index.js';

export async function getAll() {
  return db.all('SELECT * FROM phones');
}

export async function getById(id) {
  return db.get('SELECT * FROM phones WHERE id = ?', [id]);
}

export async function create({ brand, imei, name, color, capacity }) {
  const result = await db.run(
    'INSERT INTO phones (brand, imei, name, color, capacity) VALUES (?, ?, ?, ?, ?)',
    [brand, imei, name, color, capacity]
  );
  return { id: result.lastID };
}

export async function update(id, { brand, imei, name, color, capacity }) {
  const result = await db.run(
    'UPDATE phones SET brand = ?, imei = ?, name = ?, color = ?, capacity = ? WHERE id = ?',
    [brand, imei, name, color, capacity, id]
  );
  return { changes: result.changes };
}

export async function remove(id) {
  await db.run('DELETE FROM phones WHERE id = ?', [id]);
}
