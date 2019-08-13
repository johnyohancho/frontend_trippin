import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
          <div className="ui menu">
              <Link to='/'className='item'>
                <h1 className="ui header">
                  <img src='trippin_logo.png' id="logo" alt="oops"></img>
                </h1>
              </Link>
              <Link to='/about'className='item'>
                  <div className="content">About</div>
              </Link>
              <Link to='/'className='item'>
                  <div className="content">Trips</div>
              </Link>
              <Link to='/budget'className='item'>
                  <div className="content">Budget</div>
              </Link>
              {
                  localStorage.getItem("token") ?
                  <Link to="/" className="position right item" style={{ color: 'black' }}
                  onClick={(e) => {localStorage.clear(); props.updateLoginStatus()} } >
                  { props.loggedOut ?
                  <div className="content">Login</div>
                  :
                  <div className="content">Logout</div>
                  }
                  </Link> :
                  <Link to="/login" className="position right item" style={{ color: 'black' }} >
                  <div className="content">Login</div>
                  </Link>
              }
              {
                localStorage.getItem("token") ?
                null 
                :
                <Link to="/signup" className="position right item" style={{ color: 'black' }}>
                <div className="content">SignUp</div>
                </Link> 
              }
          </div>
            )
}

export default Header;
