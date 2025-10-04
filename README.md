# Base de données des documentations

Un projet permettant de centraliser et organiser diverses documentations techniques.

## Description

Ce projet vise à créer une base de données accessible et bien organisée de documentations techniques, tutoriels et ressources utiles pour les développeurs, en utilisant React et Vite.

## Installation

Pour installer ce projet, suivez les étapes ci-dessous :

1. Clonez le repository :

   ```bash
   git clone https://github.com/votre-username/docBase.git
   cd docBase
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Démarrez le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur à l'adresse `http://localhost:3000`.

## Comment contribuer

### Prérequis

- Connaissances de base en HTML/CSS et JavaScript
- Familiarité avec React et Vite
- Connaissances de base en Git et GitHub
- Un éditeur de texte ou IDE

### Étapes pour contribuer

1. **Fork** ce repository
2. **Clone** votre fork localement :

   ```bash
   git clone https://github.com/votre-username/docBase.git
   cd docBase
   ```

3. **Créez une branche** pour votre contribution :

   ```bash
   git checkout -b ajout-documentation-[nom-du-sujet]
   ```

4. **Ajoutez votre documentation** dans le dossier `src/docs/` en suivant la structure du projet.

5. **Testez** vos modifications en ouvrant `public/index.html` dans un navigateur.

6. **Commit** vos changements :

   ```bash
   git add .
   git commit -m "Ajout documentation: [description]"
   ```

7. **Push** vers votre fork :

   ```bash
   git push origin ajout-documentation-[nom-du-sujet]
   ```

8. **Créez une Pull Request** depuis GitHub.

### Structure du projet

```
docBase/
├── public
│   └── index.html          # Page principale
├── src
│   ├── assets              # Dossier pour les ressources
│   ├── components          # Composants React
│   ├── docs                # Dossier pour les documentations
│   ├── templates           # Templates pour nouvelles docs
│   ├── App.tsx             # Composant principal
│   ├── main.tsx            # Point d'entrée de l'application
│   └── index.css           # Styles globaux
├── package.json            # Configuration npm
├── tsconfig.json           # Configuration TypeScript
├── vite.config.ts          # Configuration Vite
└── README.md               # Ce fichier
```

## Comment ajouter une documentation

### Méthode 1 : Ajouter une documentation locale

1. **Créez votre fichier de documentation** dans le dossier `src/docs/` :
   ```bash
   # Exemple
   touch src/docs/mon-guide.md
   ```

2. **Écrivez votre documentation** en Markdown :
   ```markdown
   # Titre de votre documentation
   
   Description courte de ce que couvre cette documentation.
   
   ## Section 1
   Contenu de votre documentation...
   ```

3. **Ajoutez la documentation à la liste** en modifiant `src/components/DocumentationList.tsx` :
   ```typescript
   const defaultDocs: DocumentationItem[] = [
     // ... autres documentations
     {
       title: "Votre Titre",
       description: "Description courte et claire de votre documentation",
       link: "/docs/mon-guide.md"
     }
   ];
   ```

### Méthode 2 : Ajouter un lien vers une documentation externe

1. **Modifiez** `src/components/DocumentationList.tsx` :
   ```typescript
   {
     title: "Nom de la ressource",
     description: "Description de ce que contient cette ressource",
     link: "https://lien-vers-la-documentation.com"
   }
   ```

### Guidelines pour ajouter une documentation

1. **Format** : Privilégiez le format Markdown (.md) pour les docs locales
2. **Nommage** : Utilisez des noms de fichiers descriptifs (ex: `git-commands.md`)
3. **Structure** : Incluez un titre, une description, et des exemples pratiques
4. **Description** : Écrivez une description claire et concise (1-2 phrases maximum)
5. **Liens** : Ajoutez votre documentation dans le composant `DocumentationList`
6. **Images** : Placez les images dans le dossier `src/assets/images/`

### Exemple de structure d'une documentation

```markdown
# Guide des commandes Git

Ce guide présente les commandes Git les plus utilisées au quotidien.

## Commandes de base

### git add
Ajoute des fichiers à l'index...

### git commit
Enregistre les modifications...

## Exemples pratiques

```bash
git add .
git commit -m "Ajout d'une nouvelle fonctionnalité"
```
```

### Types de contributions recherchées

- Documentations techniques (frameworks, langages, outils)
- Tutoriels pas-à-pas
- Guides de bonnes pratiques
- Ressources utiles et liens externes
- Améliorations de l'interface utilisateur
- Corrections de bugs ou typos

## Règles de contribution

- Vérifiez que votre documentation n'existe pas déjà
- Utilisez un français correct et professionnel
- Testez vos liens et exemples de code
- Respectez les droits d'auteur
- Citez vos sources quand nécessaire

## Contact

Pour toute question concernant les contributions, n'hésitez pas à ouvrir une issue sur GitHub.

---

Merci de contribuer à rendre la documentation plus accessible à tous ! 🚀