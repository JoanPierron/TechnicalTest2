# --- Étape 1 : build frontend ---
FROM node:20-bullseye AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# --- Étape 2 : backend + frontend statique ---
FROM node:20-bullseye
WORKDIR /app/backend

# Copier backend complet (y compris package.json, src, routes)
COPY backend .

# Installer les dépendances backend dans /app/backend
RUN npm install

# Copier le build frontend dans backend/frontend/dist pour servir statique
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

EXPOSE 3000

CMD ["node", "src/server.js"]
