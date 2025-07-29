
# Avengers API

Une mini application React pour explorer, ajouter, modifier et supprimer des personnages de l’univers Marvel via une API REST.

---

## Description

Ce projet permet d’afficher une liste de personnages Avengers en se connectant à une API locale.  
Il offre les fonctionnalités suivantes :

- Affichage des personnages avec recherche en temps réel  
- Ajout d’un nouveau personnage via un formulaire  
- Mise à jour du nom d’un personnage  
- Suppression d’un personnage  
- Interface responsive et stylisée avec Tailwind CSS

---

## Technologies utilisées

- Frontend : React (Hooks, useState, useEffect)  
- Styling : Tailwind CSS  
- Backend : API REST (Express.js ou autre)  
- Icônes : react-icons (FontAwesome)  
- Outils : Fetch API pour communication client-serveur

---

## Installation

1. Clone le dépôt :  
```bash
git clone https://github.com/JerryTanjaka/avengers_api.git
```

2. Installe les dépendances frontend :  
```bash
cd avengers_api
npm install
```

3. Lance le frontend :  
```bash
npm run dev
```

4. Assure-toi que l’API backend tourne sur `http://localhost:5000/characters` (tu dois lancer séparément le serveur backend).

---

## Utilisation

- Recherche un personnage dans la barre en haut  
- Clique sur **Ajouter un Avenger** pour afficher le formulaire  
- Remplis les champs puis clique sur **Ajouter**  
- Clique sur la croix sur une carte pour supprimer  
- Clique sur **Modifier** pour changer le nom d’un personnage  

---

## Structure du projet

- `src/App.jsx` : composant principal  
- `src/components/Navbar.jsx` : barre de navigation avec recherche  
- `src/components/CharacterCard.jsx` : carte personnage  
- `src/components/CharacterForm.jsx` : formulaire ajout personnage  
- `src/components/SearchBar.jsx` : barre de recherche  
- `public/` : assets (images, icônes)

---

## Personnalisation

Tu peux modifier les styles Tailwind directement dans les composants, notamment les ombres, dégradés et couleurs.

---

## Contribution

Les contributions sont bienvenues !  
Merci de forker le projet et proposer une pull request.

---

## Licence

Ce projet est sous licence MIT.
