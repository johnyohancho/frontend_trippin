import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MainContainer from './MainContainer';
import LoginForm from './LoginForm'
import Header from './Header'
import SignUpForm from './SignUpForm'


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
    this.setState({ searchTerms: {
        keyword: e.target.keyword.value,
        city: e.target.city.value,
        date: e.target.date.value,
        radius: e.target.radius.value,
      }
    })
  }

  updateLoginStatus = () => {
    console.log("called from login submit")
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
            <Route exact path="/" render={(props)=> <MainContainer {...props} searchTerms={this.state.searchTerms} updateLoginStatus={this.updateLoginStatus}/>} />
            <Route exact path="/about" component={null} />
            <Route exact path="/login" render={(props)=> <MainContainer {...props} searchTerms={this.state.searchTerms} updateLoginStatus={this.updateLoginStatus}/>} />
            <Route exact path="/signup" component={SignUpForm}/>
            <Route exact path="/budget" component={null} />
          </Switch>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
