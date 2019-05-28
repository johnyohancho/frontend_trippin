import React from 'react';
import { Card } from 'semantic-ui-react'

const TripCard = (props) => {
    return (
        <Card>
            <div className="ui card">
                <div className="card-title">
                    {props.card.name}
                </div>
            </div>
        </Card>
    )
}

export default TripCard;