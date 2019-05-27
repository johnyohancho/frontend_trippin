import React from 'react';

function EventCard (props) {
    return (
        <div className="ui cards">
        {console.log('EVENTCARD RENDERED')}
            <div className="card">
                <div className="content">
                    <div className="header">
                        This is an event
                    </div>
                    <div className="description">
                        It is in a place and has stuff
                    </div>
                </div>
            <div className="ui bottom attached button">
                <i className="add icon"></i>
                    Add This Event to Itinerary
            </div>
            </div>
        </div>
    )
}

export default EventCard