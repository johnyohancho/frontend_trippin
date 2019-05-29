import React from 'react';
import LoginForm from '../components/LoginForm';
import TripContainer from './TripContainer'
import SearchResults from './SearchResults.js';


class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            allTrips: []
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

    
    render() {
        return (
            
            <div className="ui container">
            {
                localStorage.getItem("token") ?
                <div className="ui two column grid">
                    <div className="ten wide column">
                        <TripContainer allTrips={this.state.allTrips} addTrip={this.addTrip} deleteTrip={this.deleteTrip}/>
                    </div>
                    <div className="six wide column">
                        <SearchResults searchTerms={this.props.searchTerms}/>
                    </div>
                </div> :
                    <LoginForm history={this.props.history} updateLoginStatus={this.props.updateLoginStatus}/>
            }
            </div>
        )
    }
}

export default Main;
