import React from 'react';
import {Container} from 'semantic-ui-react';
import App from './App.js'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className='item'>
                    <div className='header'>My Account</div>
                    <div className='menu'>
                        <a className='item' href=''>Log In</a>
                        <a className='item' href=''>Log Out</a>
                        <a className='item' href=''>My Trips</a>
                    </div>
                </div>
                <div className='item'>
                    <div className='header'>Events</div>
                    <div className='menu'>
                        <a className='item' href=''>Search Events</a>
                        <a className='item' href=''>What's My Next Event!?!</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar