import React from 'react';
import TripForm from '../components/TripForm'
import TripCard from '../components/TripCard'

const TripContainer = (props) => {

    // renderToggle= ()=>{
    //     if (props.tripId) {
    //         return fetch('http://localhost:3000/events')
    //         .then(resp => resp.json())
    //         .then(data => renderEvents(data))
    //     }
    //     else {
    //         return <h2>Your Trips</h2>
    //         {/* <button className="ui button" onClick={null}>Add a Trip</button> */}
    //         {props.allTrips.map(trip => 
    //             <TripCard card={trip} deleteTrip={props.deleteTrip} viewTrip={props.viewTrip}/>
    //             )}
    //         <TripForm addTrip={props.addTrip}/>

    //     }
    // }

    // renderEvents= (array)=>{
    //     let filtered= array.filter(event => {
    //         return event.trip_id === props.tripId
    //     }

    //     render() filtered.map(event => {
    //         return <TripEvent event={event}/>
    //     })
    // }

    return (
        <div id="trip-container" className="ui container">
            <div className="ui raised segment">
                <h2>Your Trips</h2>
                {/* <button className="ui button" onClick={null}>Add a Trip</button> */}
                {props.allTrips.map(trip => 
                    <TripCard card={trip} deleteTrip={props.deleteTrip} viewTrip={props.viewTrip}/>
                    )}
                <TripForm addTrip={props.addTrip}/>
            </div>
        </div>
    )
}

export default TripContainer;