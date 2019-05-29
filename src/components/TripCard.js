import React from 'react';
import { Card } from 'semantic-ui-react'

const TripCard = (props) => {
    
    return (
        <Card>
            <div className="ui card">
                <div className="content">
                    <div className="header">
                        {props.card.name}
                    </div>
                </div>
                <div className="content">
                    <div className="ui two buttons">
                        <button class="ui green basic button">View</button>
                        <button class="ui red basic button" onClick={() => props.deleteTrip(props.card.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default TripCard;