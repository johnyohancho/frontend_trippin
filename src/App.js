import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import EventsList from './EventsList.js';
import Map from './Map.js';
import { throwStatement } from '@babel/types';

class App extends React.Component {
  constructor() {
    super()
  }
  
  render() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Trippin'</h1>
        </header>
      </div>
      <div>
        <Map />
      </div>
    </div>
    )
  }
}

export default App;
