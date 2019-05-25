import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import EventsList from './EventsList.js';
import Map from './Map.js';
import { throwStatement } from '@babel/types';

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      mapCoords: {Lng: 10, Lat: 10, Zoom: 5}
    }
  }
  
  moveMap= (lng, lat, zoom)=>{
      this.setState({ mapCoords: {
        Lng: lng,
        Lat: lat,
        Zoom: zoom
      }})
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
        <Map mapCoords={this.state.mapCoords} moveMap={this.moveMap}/>
      </div>
    </div>
    )
  }
}

export default App;
