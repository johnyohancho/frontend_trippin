import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import {throwStatement} from '@babel/types';
// import {Header} from 'semantic-ui-react';
import NavBar from './NavBar.js';
import Main from './Main.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sidebarView: 'ui vertical inverted thin sidebar menu left overlay hidden'
    }
  }

  toggleNavBar= ()=> {
    if (this.state.sidebarView === 'ui vertical inverted thin sidebar menu left overlay hidden') {
      this.setState({sidebarView: 'ui vertical inverted thin sidebar menu left overlay visible'})
    } else {
      this.setState({sidebarView: 'ui vertical inverted thin sidebar menu left overlay hidden'})
    }
  }

  render() {
    return (
      <div>
        {console.log('APP RENDERED')}
        <div className='ui fixed inverted main menu'>
          <a className='launch icon item' onClick={this.toggleNavBar}>
            <i className='content icon'></i>
          </a>
          <div>
            Trippin'
          </div>
        </div>
        <div className={this.state.sidebarView}>
          {console.log('SIDEBAR LOADED')}
        {/* <div className='uivertical inverted thin sidebar menu let overlay hidden'> */}
          <NavBar />
        </div>
        <div className='dimmed pusher' onClick={this.toggleNavBar}>
        {/* <div> */}
          <Main />
        </div>
      </div>
    )
  }
}

export default App;
