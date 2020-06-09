import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrototypeComponent from './prototype/PrototypeComponent';
import DeckContainer from './containers/DeckContainer';

function App() {
  return (
    <div className="container">
      <h1>Learn French</h1>
      <PrototypeComponent/>
      <DeckContainer/>
    </div>
  );
}

export default App;
