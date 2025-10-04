# Base de données des documentations

Un projet permettant de centraliser et organiser diverses documentations techniques.

## Description

Ce projet vise à créer une base de données accessible et bien organisée de documentations techniques, tutoriels et ressources utiles pour les développeurs.

## Comment contribuer

### Prérequis

- Connaissances de base en HTML/CSS
- Familiarité avec Git et GitHub
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

4. **Ajoutez votre documentation** en suivant la structure du projet

5. **Testez** vos modifications en ouvrant `index.html` dans un navigateur

6. **Commit** vos changements :

   ```bash
   git add .
   git commit -m "Ajout documentation: [description]"
   ```

7. **Push** vers votre fork :

   ```bash
   git push origin ajout-documentation-[nom-du-sujet]
   ```

8. **Créez une Pull Request** depuis GitHub

### Structure du projet

```
docBase/
├── index.html          # Page principale
├── README.md          # Ce fichier
├── docs/             # Dossier pour les documentations
├── assets/           # Images, CSS, JS personnalisés
└── templates/        # Templates pour nouvelles docs
```

### Guidelines pour ajouter une documentation

1. **Format** : Privilégiez le format Markdown (.md) ou HTML
2. **Nommage** : Utilisez des noms de fichiers descriptifs (ex: `git-commands.md`)
3. **Structure** : Incluez un titre, une description, et des exemples pratiques
4. **Liens** : Ajoutez le lien vers votre documentation dans `index.html`
5. **Images** : Placez les images dans le dossier `assets/images/`

### Exemple d'ajout dans index.html

```html
<div>
  Documentation Git :
  <a href="docs/git-commands.html" class="text-blue-500 hover:underline text-xl"
    >Commandes Git essentielles</a
  >
</div>
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
