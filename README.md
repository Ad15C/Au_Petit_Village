# Au Petit Village

Projet Angular réalisé dans le cadre de la formation **Développeur Web et Web Mobile – CEF**.

Ce projet consiste à **dynamiser un site web avec Angular** en intégrant des fonctionnalités de tri, de recherche et de navigation entre les pages.

---

# Objectifs pédagogiques

Grâce à ce projet, les compétences suivantes sont mises en pratique :

- Écrire un algorithme
- Intégrer des scripts événementiels dans une page web
- Programmer avec un framework de script client (Angular)
- Respecter les principes de qualité et de sécurisation des clients web

---

# Technologies utilisées

- Angular 18
- TypeScript
- HTML5
- CSS3
- Node.js
- Angular CLI
- RxJS
- Express (pour le SSR)
- Git / GitHub

---

# Identité graphique

## Couleurs principales

| Couleur | Code |
|-------|------|
Rouge | `#DA001E` |
Jaune | `#FDD90B` |
Beige | `#F9D0A3` |
Noir | `#151217` |

## Typographie

- **Bubblebody Neue** → Titres
- **Comfortaa** → Texte

---

# Fonctionnalités

## Page d’accueil

- Présentation de l’entreprise
- Catalogue de produits
- Tri des produits :
  - prix croissant
  - prix décroissant
- Recherche par nom

---

## Page Produit

- Présentation détaillée du produit
- Prix du produit
- Photo du produit

---

## Page À propos

- Histoire de l’entreprise

---

## Header

Présent sur toutes les pages.

Contient :

- le logo du site (lien vers la page d’accueil)
- un menu de navigation :
  - Accueil
  - À propos
  - Contact

---

## Footer

Présent sur toutes les pages.

Contient :

- les liens vers les réseaux sociaux de l’entreprise
- les informations de contact

---

# Installation du projet

## 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/ton-repository/au-petit-village.git

## 2 Installer les dépendances
npm install 

## 3 Lancer le projet
ng serve

## 4 Ouvrir dans le navigateur
```bash
http://localhost:4200

# Structure du projet

src
 ├── app
 │   ├── about
 │   ├── footer
 │   ├── header
 │   ├── home
 │   └── product
 │
 ├── assets
 │   ├── fonts
 │   ├── Logos
 │   └── Products
 │
 ├── styles.css
 ├── index.html
 └── main.ts

# Livrables attendus
Le projet doit contenir :
 - une page d’accueil dynamique
 - un catalogue produit
 - une page produit détaillée
 - une page à propos
 - un header et footer communs
 - un tri des produits
 - une recherche par nom

# Contact
Pour toutes informations ou remarques, veuillez nous contacter à l'adresse mail suivante: *ad15canon@gmail.com*