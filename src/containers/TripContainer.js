import React from 'react';
import TripForm from '../components/TripForm'
import TripCard from '../components/TripCard'

class TripContainer extends React.Component {

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

    render() {
        return (
            <div id="trip-container" className="ui container">
                <div className="ui raised segment">
                    <h2>Your Trips</h2>
                    <button className="ui button">Add a Trip</button>
                    {this.state.allTrips.map(trip => 
                        <TripCard card={trip}/>
                        )}
                    <TripForm />
                </div>
            </div>
        )
    }
}

export default TripContainer;