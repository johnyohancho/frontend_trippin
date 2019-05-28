import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {throwStatement} from '@babel/types';
// import {Header} from 'semantic-ui-react';
import NavBar from './NavBar';
import MainContainer from './containers/MainContainer';
import Map from './components/Map';
import LoginForm from './components/LoginForm'
import Header from './components/Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // sidebarView: 'ui vertical inverted thin sidebar menu left overlay hidden'
    }
  }

  render() {
    return (
      <div id="app-container">
        <div id="main-grid" className="ui two wide column grid">
          <div id="nav-row" className="row">
              <Header />
          </div>
          <div id="main-row" className="row">
              <NavBar />
              <Switch>
                <Route exact path="/about" component={null} />
                <Route exact path="/login" component={MainContainer} />
                <Route exact path="/budget" component={null} />
                <Route exact path="/" component={MainContainer} />
              </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
