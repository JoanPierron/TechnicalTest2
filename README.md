# TechnicalTest2
# Gestion de Téléphones - Application Fullstack

Application web pour gérer une liste de téléphones avec un backend Node.js/Express et un frontend Svelte.  
Le backend expose une API REST et sert le frontend statique buildé par Vite.

---

## Fonctionnalités principales

- Liste des téléphones (nom, marque, IMEI, couleur, capacité)  
- Ajout, modification et suppression de téléphones via l’interface  
- Backend en Node.js avec Express  
- Frontend en Svelte avec routage SPA (`svelte-spa-router`)  
- Base SQLite pour stockage des données  

---

## Prérequis

- Node.js (version 20 ou 22 recommandée)  
- npm  
- Docker & Docker Compose (pour la méthode Docker)  

---

## Installation et lancement sans Docker

1. **Cloner le dépôt**

```
git clone <url-du-projet>
cd <nom-du-repo>
```

2. **Installer les dépendances backend**

```
cd backend
npm install
```

3. **Installer les dépendances frontend**

```
cd ../frontend
npm install
```

4. **Lancer le backend**

```
cd ../backend
node src/server.js
```

5. **Builder et lancer le frontend**

```
npm run build
npm run dev
```

6. **Accéder à l'application**

Ouvre dans ton navigateur le lien donné dans la console par la commande "npm run dev"


---

## Installation et lancement avec Docker

Le projet inclut un `Dockerfile` multi-étapes qui build le frontend, installe les dépendances backend, et lance le serveur complet.

### Construction de l’image Docker

Depuis la racine du projet, exécute :

```
docker build -t gestion-telephones .
```

### Lancement du conteneur Docker

```
docker run -p 3000:3000 gestion-telephones
```

L'application sera accessible à l'adresse : [lien](http://localhost:3000)

## Utilisation avec Docker Compose

Un fichier docker.compose.yml est fourni pour simplifier la construction et le lancement

### Démarrer le projet

Lancer Docker Desktop ou tout appli pour Docker

À la racine du projet (TechnicalTest2)

```
docker-compose up -build
```

### Arrêter les conteneurs

```
docker-compose down
```

L'application est disponible à l'adresse : [lien](http://localhost:3000)
