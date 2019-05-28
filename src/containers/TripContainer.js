import React from 'react';
import TripForm from '../components/TripForm'

class TripContainer extends React.Component {

    render() {
        return (
            <div className="ui container">
                <TripForm />
                {/* <EventsList /> */}
            </div>
        )
    }
}

export default TripContainer;