import * as PhoneModel from '../models/phone.model.js';

export async function getAllPhones(req, res) {
  const phones = await PhoneModel.getAll();
  res.json(phones);
}

export async function getPhoneById(req, res) {
  const phone = await PhoneModel.getById(req.params.id);
  if (!phone) return res.status(404).json({ error: 'Téléphone non trouvé' });
  res.json(phone);
}

export async function createPhone(req, res) {
  const { name, brand, imei, color, capacity } = req.body;
  if (!name || !brand || !imei || !color || !(capacity > 0 && capacity % 2 === 0)) {
    return res.status(400).json({ error: 'Données invalides' });
  }

  const created = await PhoneModel.create({ name, brand, imei, color, capacity });
  res.status(201).json(created);
}

export async function updatePhone(req, res) {
  const { name, brand, imei, color, capacity } = req.body;
  if (!name || !brand || !imei || !color || !(capacity > 0 && capacity % 2 === 0)) {
    return res.status(400).json({ error: 'Données invalides' });
  }

  const updated = await PhoneModel.update(req.params.id, { name, brand, imei, color, capacity });
  res.json(updated);
}

export async function deletePhone(req, res) {
  await PhoneModel.remove(req.params.id);
  res.status(204).end();
}
