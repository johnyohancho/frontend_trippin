import React from 'react';
import TripForm from '../components/TripForm'
import TripCard from '../components/TripCard'

const TripContainer = (props) => {

        return (
            <div id="trip-container" className="ui container">
                <div className="ui raised segment">
                    <h2>Your Trips</h2>
                    {props.allTrips.map(trip => 
                        <TripCard card={trip} deleteTrip={props.deleteTrip}/>
                        )}
                    <h2>Add a Trip</h2>
                    <TripForm addTrip={props.addTrip}/>
                </div>
            </div>
        )
}

export default TripContainer;