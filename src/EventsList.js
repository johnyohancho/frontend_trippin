import React from 'react';
import EventCard from './EventCard.js'

class EventsList extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="events-list">
                <EventCard />
            </div>
        )
    }

}
export default EventsList;