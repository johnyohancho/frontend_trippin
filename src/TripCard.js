import React from 'react';
import { Card } from 'semantic-ui-react'

const TripCard = (props) => {
    
    return (
        <Card>
            <div className="ui card">
                <div className="content">
                    <div className="header">
                        {props.card.name}
                        <div className="meta">
<<<<<<< HEAD:src/components/TripCard.js
                        Budget: ${props.card.budget}
=======
                            Budget: ${props.card.budget}
>>>>>>> adf67382d77779ac5f0210bc2ebe455546977e87:src/TripCard.js
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="ui two buttons">
                        <button class="ui green basic button" onClick={()=>{props.viewTrip(props.card.id)}}>View</button>
                        <button class="ui red basic button" onClick={() => props.deleteTrip(props.card.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default TripCard;