import React from 'react';
import Map from '../components/Map';
import TripContainer from './TripContainer'
import SearchResults from './SearchResults.js';


class Main extends React.Component {
    
    render() {
        return (
            <div className="main-container">
                {console.log('main container props', this.props)}
                <SearchResults searchTerms={this.props.searchTerms}/>
                <TripContainer />
            </div>
        )
    }

}

export default Main