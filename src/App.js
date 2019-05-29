import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import {throwStatement} from '@babel/types';
// import {Header} from 'semantic-ui-react';
import NavBar from './NavBar';
import MainContainer from './containers/MainContainer';
import Map from './components/Map';
import LoginForm from './components/LoginForm'
import SearchResults from './containers/SearchResults.js';
import Header from './components/Header'
import SignUpForm from './components/SignUpForm'


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
        loggedOut: false,
      }
    }
  }

  searchSubmit= (e)=>{
    e.preventDefault()
    console.log('search keyword value', e.target.keyword.value)
    this.setState({ searchTerms: {
        keyword: e.target.keyword.value,
        city: e.target.city.value,
        date: e.target.date.value,
        radius: e.target.radius.value,
      }
    })
  }

  updateLoginStatus = () => {
    this.setState({
      logginIn: !this.state.loggedIn
    })
  }

  render() {
    return (
      <div id="app-container">
        <div id="main-grid" className="ui two wide column grid">
          <div id="nav-row" className="row">
              <Header loggedIn={this.state.loggedIn} updateLoginStatus={this.updateLoginStatus}/>
          </div>
          <div id="main-row" className="row">
              <NavBar searchSubmit={this.searchSubmit}/>
          <Switch>
            <Route exact path="/" render={(props)=> <MainContainer {...props} searchTerms={this.state.searchTerms}/>} />
            <Route exact path="/about" component={null} />
            <Route exact path="/login" render={(props)=> <MainContainer {...props} searchTerms={this.state.searchTerms}/>} />
            <Route exact path="/signup" component={SignUpForm}/>
            <Route exact path="/budget" component={null} />
            <Route exact path='/results' render={()=> <SearchResults searchTerms={this.state.searchTerms}/>} />
          </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
