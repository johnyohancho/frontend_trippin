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
        <a class="item"><i aria-hidden="true" class="grid layout icon"></i></a>
          <a class="item">Budget</a>

        {/* <div class="ui accordion field"> */}
          <div class="title">
            <i class="dropdown icon"></i>
              Search Events
          </div>
          {/* <div class='transition hidden'> */}
            <form onSubmit={props.searchSubmit}>
              <div class="ui input">
                <input type="text" placeholder="Keyword" name='keyword'></input>
              </div>
              <div class="ui input">
                <input type="text" placeholder="City" name='city'></input>
              </div>
              <div class="ui input">
                <input type="text" placeholder="Within distance" name='radius'></input>
              </div>
              <div class="ui input">
                <input type="text" placeholder="Date" name='date'></input>
              </div>
              {/* <select placeholder="Genre" name='genre'> */}
                {/* <option value='gen1'>gen1</option> */}
                {/* <option value='gen2'>gen2</option> */}
                {/* <option value='gen3'>gen3</option> */}
              {/* </select> */}
              <button class='ui button' type='submit'>Search!</button>
            </form>
          {/* </div> */}
        {/* </div> */}
      </div>
  )
}

export default NavBar;
