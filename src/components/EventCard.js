import React from 'react';

const EventCard= (props)=> {
    console.log('event', props)
    return (
        <div class="card">
            <div class="content">
                <div class="header">
                    {props.event.name}
                </div>
                <div class="description">
                    Starts: {props.event.dates.start.localTime}, {props.event.dates.start.localDate}
                </div>
            </div>
            <div class="ui bottom attached button" onClick={props.addEvent}>
                <i class="add icon"></i>
                    Add Event
            </div>
        </div>
    )
}

export default EventCard