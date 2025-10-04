import React from 'react';
import DocumentationList from './components/DocumentationList';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Base de données des documentations</h1>
      <DocumentationList />
    </div>
  );
};

export default App;