import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrototypeComponent from './prototype/PrototypeComponent';
import DeckContainer from './containers/DeckContainer';
import LearnFrenchComponent from './components/LearnFrenchComponent';

function App() {
  return (
    <div className="container">
      <LearnFrenchComponent/>
    </div>
  );
}

export default App;
