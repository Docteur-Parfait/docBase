import React from 'react';

interface DocumentationItem {
  title: string;
  description: string;
  link: string;
}

interface DocumentationListProps {
  docs?: DocumentationItem[];
}

const DocumentationList: React.FC<DocumentationListProps> = ({ docs = [] }) => {
  const defaultDocs: DocumentationItem[] = [
    {
      title: "Introduction à React",
      description: "Apprenez les bases de React avec ce guide officiel complet et interactif.",
      link: "https://fr.react.dev/learn"
    },
  ];

  const documentationItems = docs.length > 0 ? docs : defaultDocs;

  return (
    <div className="container">
      <h2>Liste des documentations</h2>
      <div className="documentation-grid">
        {documentationItems.map((doc, index) => (
          <div key={index} className="documentation-item">
            <h3>{doc.title}</h3>
            <p className="doc-description">{doc.description}</p>
            <a href={doc.link} className="doc-link">
              Voir la documentation →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentationList;