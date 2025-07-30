const API_URL = 'http://localhost:3000/api/phones';

export async function getPhones() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function createPhone(phone) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(phone)
  });
  return await res.json();
}

export async function updatePhone(id, phone) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(phone)
  });
}

export async function deletePhone(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
