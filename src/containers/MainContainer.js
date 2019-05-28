import React from 'react';
import LoginForm from '../components/LoginForm';
import TripContainer from './TripContainer'
import SearchResults from './SearchResults.js';


class Main extends React.Component {
    
    render() {
        return (
            <div className="ui container">
            {
                localStorage.getItem("token") ?
                <div className="ui two column grid">
                    <div className="ten wide column">
                        <TripContainer />
                    </div>
                    <div className="six wide column">
                        <SearchResults searchTerms={this.props.searchTerms}/>
                    </div>
                </div> :
                    <LoginForm history={this.props.history}/>
            }
            </div>
        )
    }
}

export default Main;
