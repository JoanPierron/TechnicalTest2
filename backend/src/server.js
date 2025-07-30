import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import phoneRoutes from './routes/phone.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.use('/api/phones', phoneRoutes);

const frontendDir = path.resolve(__dirname, '../frontend/dist');
app.use(express.static(frontendDir));

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(frontendDir, 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
