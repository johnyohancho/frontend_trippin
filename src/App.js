import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {throwStatement} from '@babel/types';
// import {Header} from 'semantic-ui-react';
import NavBar from './NavBar';
import MainContainer from './containers/MainContainer';
import Map from './components/Map';
import LoginForm from './components/LoginForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // sidebarView: 'ui vertical inverted thin sidebar menu left overlay hidden'
    }
  }

  // toggleNavBar= ()=> {
  //   if (this.state.sidebarView === 'ui vertical inverted thin sidebar menu left overlay hidden') {
  //     this.setState({sidebarView: 'ui vertical inverted thin sidebar menu left overlay visible'})
  //   } else {
  //     this.setState({sidebarView: 'ui vertical inverted thin sidebar menu left overlay hidden'})
  //   }
  // }

  // render() {
  //   return (
  //     <div>
  //       {console.log('APP RENDERED')}
  //       <div className='ui fixed inverted main menu'>
  //         <a className='launch icon item' onClick={this.toggleNavBar}>
  //           <i className='content icon'></i>
  //         </a>
  //         <div>
  //           Trippin'
  //         </div>
  //       </div>
  //       <div className={this.state.sidebarView}>
  //         {console.log('SIDEBAR LOADED')}
  //       {/* <div className='uivertical inverted thin sidebar menu let overlay hidden'> */}
  //         <NavBar />
  //       </div>
  //       <div className='dimmed pusher' onClick={this.toggleNavBar}>
  //       {/* <div> */}
  //         <Main />
  //       </div>
  //     </div>
  //   )
  // }
  render() {
    return (
      <div className="ui grid">
        <div className="row">
        </div>
        <NavBar />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/about" component={null} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/budget" component={null} />
          </Switch>
      </div>
    );
  }

}

export default App;
