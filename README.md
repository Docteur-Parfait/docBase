# DocBase 📚

Base de données centralisée pour organiser vos documentations techniques avec React et Vite.

## 🚀 Installation rapide

```bash
git clone https://github.com/votre-username/docBase.git
cd docBase
npm install
npm run dev
```

Ouvrez `http://localhost:3000` dans votre navigateur.

## 📁 Structure du projet

```
docBase/
├── src/
│   ├── components/         # Composants React
│   ├── docs/              # Vos documentations (.md)
│   ├── assets/            # Images et ressources
│   └── templates/         # Templates de documentation
├── index.html             # Point d'entrée
└── package.json           # Configuration
```

## ➕ Ajouter une documentation

### Documentation locale (fichier .md)
1. Créez un fichier dans `src/docs/` : `touch src/docs/mon-guide.md`
2. Ajoutez dans `DocumentationList.tsx` :
```typescript
{
  title: "Votre Titre",
  description: "Description courte et claire",
  link: "/docs/mon-guide.md"
}
```

### Documentation externe (lien web)
```typescript
{
  title: "Nom de la ressource",
  description: "Description de la ressource",
  link: "https://lien-externe.com"
}
```

## 📝 Format recommandé

```markdown
# Titre de votre documentation

Description courte de ce que couvre cette documentation.

## Section 1
Contenu de votre documentation...

## Exemples
```bash
commande-exemple
```
```

## 🔧 Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Construit la version de production
npm run serve    # Prévisualise la build de production
```

## 📋 Types de contributions

- Documentations techniques (frameworks, langages, outils)
- Tutoriels pas-à-pas
- Guides de bonnes pratiques
- Ressources utiles et liens externes

## 📄 Licence

MIT License - Libre d'utilisation et de modification.

---

🚀 **Contribuez pour rendre la documentation plus accessible !**