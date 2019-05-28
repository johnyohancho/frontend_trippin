import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import {throwStatement} from '@babel/types';
// import {Header} from 'semantic-ui-react';
import NavBar from './NavBar';
import MainContainer from './containers/MainContainer';
import LoginForm from './components/LoginForm'
import Header from './components/Header'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerms: {
        keyword: null,
        city: null,
        date: null,
        radius: null,
        genreID: null,
      }
    }
  }

  searchSubmit= (e)=>{
    e.preventDefault()
    this.setState({ searchTerms: {
        keyword: e.target.keyword.value,
        city: e.target.city.value,
        date: e.target.date.value,
        radius: e.target.radius.value,
      }
    })
  }

  render() {
    return (
      <div id="app-container">
        <div id="main-grid" className="ui two wide column grid">
          <div id="nav-row" className="row">
              <Header />
          </div>
          <div id="main-row" className="row">
              <NavBar searchSubmit={this.searchSubmit}/>
          <Switch>
            <Route exact path="/" render={()=> <MainContainer searchTerms={this.state.searchTerms}/>} />
            <Route exact path="/about" component={null} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/budget" component={null} />
          </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
