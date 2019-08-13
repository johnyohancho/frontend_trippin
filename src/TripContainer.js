import React from 'react';
import TripForm from './TripForm'
import TripCard from './TripCard'


const TripContainer = (props) => {
    
    return (
        <div id="trip-container" className="ui container">
            <div className="ui raised segment">
                <h2>Your Trips</h2>
                {props.allTrips.map(trip => 
                    <TripCard card={trip} deleteTrip={props.deleteTrip} viewTrip={props.viewTrip}/>
                    )}
                <TripForm addTrip={props.addTrip}/>
            </div>
        </div>
    )
}

export default TripContainer;