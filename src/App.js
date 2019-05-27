import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import {throwStatement} from '@babel/types';
import {Container, Header, Grid, GridColumn} from 'semantic-ui-react';
import NavBar from './NavBar.js';
import Main from './Main.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sidebarView: 'ui vertical inverted sidebar menu left overlay hidden'
    }
  }

  toggleNavBar= ()=>{
    if (this.state.sidebarView === 'ui vertical inverted sidebar menu left overlay hidden') {
      this.setState({sidebarView: 'ui vertical inverted sidebar menu left overlay visible'})
    } else {
      this.setState({sidebarView: 'ui vertical inverted sidebar menu left overlay hidden'})
    }
  }

  render() {
    return (
      <div className='App'>
        <Container className='ui fixed inverted main menu'>
          <a className='launch icon item' onClick={this.toggleNavBar}>
            <i className='content icon'></i>
          </a>
          <h1 textAlign='center' color='#0000'>
            Trippin'
          </h1>
        </Container>
        <div className={this.state.sidebarView}>
          <NavBar/>
        </div>
        <div className='pusher' onClick={this.toggleNavBar}>
          <Main />
        </div>
      </div>
    )
  }
}

export default App;
