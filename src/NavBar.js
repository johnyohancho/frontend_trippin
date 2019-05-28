import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    return (
    <div class="ui vertical menu">
        <div class="item">
            <div class="ui input"><input type="text" placeholder="Search..." /></div>
        </div>
        <div class="item">
            Trip
            <div class="menu">
                <a class="item">Search</a>
                <a class="item">Add</a>
                <a class="item">Remove</a>
            </div>
        </div>
        <a class="item"><i aria-hidden="true" class="grid layout icon"></i></a
  ><a class="item">Budget</a>
  <div
    role="listbox"
    aria-expanded="false"
    class="ui item dropdown"
    tabindex="0"
  >
    <div class="text" role="alert" aria-live="polite">More</div>
    <i aria-hidden="true" class="dropdown icon"></i>
    <div class="menu transition">
      <div role="option" class="item">
        <i aria-hidden="true" class="edit icon"></i
        ><span class="text">Edit Profile</span>
      </div>
      <div role="option" class="item">
        <i aria-hidden="true" class="globe icon"></i
        ><span class="text">Choose Language</span>
      </div>
      <div role="option" class="item">
        <i aria-hidden="true" class="settings icon"></i
        ><span class="text">Account Settings</span>
      </div>
    </div>
  </div>
</div>
)
    {/* return (
        <div className="ui menu">
            <Link to='/'className='item'>
                <h1 className="ui header">
                <img src='trippin_logo.png' id="logo" alt="oops"></img>
                </h1>
            </Link>
            <Link to='/about'className='item'>
                <div className="content">About</div>
            </Link>
            {
                localStorage.getItem("token") ?
                <Link to="/" className="item" style={{ color: 'black' }}
                onClick={(e) => localStorage.clear() } >
                <div className="content">Logout</div>
                </Link> :
                <Link to="/login" className="item" style={{ color: 'black' }} >
                <div className="content">Login</div>
                </Link>
            }
            <Link to='/budget'className='item'>
                <div className="content">Budget</div>
            </Link>
        </div>
    ) */}
}

export default NavBar;