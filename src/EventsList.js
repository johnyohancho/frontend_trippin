import React from 'react';
import EventCard from './EventCard.js'

class EventsList extends React.Component {

    createCards= ()=> {
        // this.props.events.map(event => {
            // return <EventCard name={event.name} date={event.date} price={event.price}></EventCard>
        // })
        for (let i=0; i<10; i++) {
            return <EventCard />
        }
    }
    
    
    render() {
        return (
            // <div className='flex-container'>
            <div>
                {console.log('EVENTS LIST RENDERED')}
                {this.createCards()}
            </div>
        )
    }
}
export default EventsList;