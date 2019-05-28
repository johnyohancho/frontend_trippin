import React from 'react';

const NavBar = (props) => {
    return (
      <div className="ui vertical menu">
        <div className="item">
            <div className="ui input"><input type="text" placeholder="Search..." /></div>
        </div>
        <div className="item">
            Trip
            <div className="menu">
                <a className="item">Search</a>
                <a className="item">Add</a>
                <a className="item">Remove</a>
            </div>
        </div>
        <a className="item"><i aria-hidden="true" className="grid layout icon"></i></a>
          <a className="item">Budget</a>

        {/* <div className="ui accordion field"> */}
          <div className="title">
            <i className="dropdown icon"></i>
              Search Events
          </div>
          {/* <div className='transition hidden'> */}
            <form onSubmit={props.searchSubmit}>
              <div className="ui input">
                <input type="text" placeholder="Keyword" name='keyword'></input>
              </div>
              <div className="ui input">
                <input type="text" placeholder="City" name='city'></input>
              </div>
              <div className="ui input">
                <input type="text" placeholder="Within distance" name='radius'></input>
              </div>
              <div className="ui input">
                <input type="text" placeholder="Date" name='date'></input>
              </div>
              {/* <select placeholder="Genre" name='genre'> */}
                {/* <option value='gen1'>gen1</option> */}
                {/* <option value='gen2'>gen2</option> */}
                {/* <option value='gen3'>gen3</option> */}
              {/* </select> */}
              <button className='ui button' type='submit'>Search!</button>
            </form>
          {/* </div> */}
        {/* </div> */}
      </div>
  )
}

export default NavBar;
