import React from 'react';
import TripForm from '../components/TripForm'
import TripCard from '../components/TripCard'

const TripContainer = (props) => {


        return (
            <div id="trip-container" className="ui container">
                <div className="ui raised segment">
                    <h2>Your Trips</h2>
                    <button className="ui button" onClick={null}>Add a Trip</button>
                    {props.allTrips.map(trip => 
                        <TripCard card={trip}/>
                        )}
                    <TripForm />
                </div>
            </div>
        )
}

export default TripContainer;