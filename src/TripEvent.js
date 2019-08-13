import React from 'react';

const TripEvent = ()=>{
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
        </div>
    )
}