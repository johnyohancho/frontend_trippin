import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
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
    )
}


// class NavBar extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div>
//                 <div className='item'>
//                     <div className='header'>My Account</div>
//                     <div className='menu'>
//                         <a className='item' href=''>Log In</a>
//                         <a className='item' href=''>Log Out</a>
//                         <a className='item' href=''>My Trips</a>
//                     </div>
//                 </div>
//                 <div className='item'>
//                     <div className='header'>Events</div>
//                     <div className='menu'>
//                         <a className='item' href=''>Search Events</a>
//                         <a className='item' href=''>What's My Next Event!?!</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default NavBar