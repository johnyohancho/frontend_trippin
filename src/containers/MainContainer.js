import React from 'react';
import LoginForm from '../components/LoginForm';
import TripContainer from './TripContainer'
import SearchResults from './SearchResults.js';


class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            allTrips: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/trips')
        .then(res => res.json())
        .then(data => this.setState({
            allTrips: data
        }))
        .catch(err => console.log("Error:", err))
    }

    addTrip = () => {

    }

    
    render() {
        return (
            
            <div className="ui container">
            {
                localStorage.getItem("token") ?
                <div className="ui two column grid">
                    <div className="ten wide column">
                        <TripContainer allTrips={this.state.allTrips} addTrip={this.addTrip}/>
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
