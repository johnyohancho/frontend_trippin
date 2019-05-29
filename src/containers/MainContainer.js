import React from 'react';
import LoginForm from '../components/LoginForm';
import TripContainer from './TripContainer'
import SearchResults from './SearchResults.js';


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            allTrips: [],
            tripId: null,
            tripEvents: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/trips')
        .then(res => res.json())
        .then(data => this.setState({
            allTrips: data
        }))
        .catch(err => console.log("Error:", err))
    }

    viewTrip= (Id=null)=>{
        this.setState({tripId: Id})
    }

    addTrip = (newTrip) => {
        let newTripList = this.state.allTrips.concat(newTrip)
        this.setState({
            allTrips: newTripList
        })
    }

    deleteTrip = (id) => {
        let tripDel = this.state.allTrips.filter(trip => trip.id === id)
        fetch(`http://localhost:3000/trips/${id}`, {
            method: 'delete'
            }).then(response =>
                response.json().then(json => {
                    console.log(json);
                })
            );
    }
    
    addEvent= (newEvent)=> {
        console.log('added event', newEvent)
        let eventObj= {
            name:           newEvent.name,
            description:    newEvent.classifications[0].genre.name,
            date:           newEvent.dates.start.localDate,
            trip_id:        this.state.tripId,
            start_time:     newEvent.dates.start.localTime,
            city:           {latitude: newEvent.location.latitude, longitude: newEvent.location.longitude}
        }
        if (this.state.tripId) {
            this.setState({tripEvents: [...this.state.tripEvents, eventObj]})
        }
        this.postEvent({event: eventObj})
    }

    postEvent= (newEvent)=> {
        fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Token": localStorage.getItem("token")
            },
            body: JSON.stringify(newEvent)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log('Error while posting new event to server:', err))
    }

    
    render() {
        return (
            
            <div className="ui container">
            {
                localStorage.getItem("token") ?
                <div className="ui two column grid">
                    <div className="ten wide column">
                        <TripContainer allTrips={this.state.allTrips} addTrip={this.addTrip} deleteTrip={this.deleteTrip} viewTrip={this.viewTrip}/>
                    </div>
                    <div className="six wide column">
                        <SearchResults searchTerms={this.props.searchTerms} addEvent={this.addEvent}/>
                    </div>
                </div> :
                    <LoginForm history={this.props.history} updateLoginStatus={this.props.updateLoginStatus}/>
            }
            </div>
        )
    }
}

export default Main;
