import React from 'react';
import EventsList from './EventsList';
import TripForm from '../components/TripForm'

class TripContainer extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="trip-container">
                <TripForm />
                {/* <EventsList /> */}
            </div>
        )
    }
}

export default TripContainer;