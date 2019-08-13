import React from 'react';

class TripForm extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            budget: 0,
            errors: []
        }
    }

    saveTrip = (e) => {
      console.log("save trip")
        e.preventDefault()
        fetch("https://backend-trippin.herokuapp.com/trips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Token": localStorage.getItem("token")
          },
          body: JSON.stringify(this.state)
        }).then(res => res.json())
        .then(json => {
          if (json.errors) {
            this.setState({ errors: json.errors })
            console.log("oops, didn't work")
          } else {
            // add addTrip to DayCard
            // this.props.addDog(json)
            this.props.addTrip(json)
          }
        })
      }

    displayErrors = () => {
        if (this.state.errors.length > 0) {
          return (
            <div className='trip-form-errors'>
              <p>Invalid!</p>
              <ul>
                { this.state.errors.map(err => <li>{err}</li>) }
              </ul>
            </div>
          )
        } else {
          return null;
        }
      }

    render() {
        return (
            <form className="ui form" onSubmit={this.saveTrip}>
            { this.displayErrors() }
            {/* <div className="equal width fields"> */}
              <div className="field">
                <label>Trip Name</label>
                <input type="text" name="name" placeholder="Name"
                  onChange={(e) => this.setState({ name: e.target.value })} />
              </div>
              <div className="field">
                <label>Budget</label>
                <input type="text" name="budget" placeholder="Budget"
                  onChange={(e) => this.setState({ budget: e.target.value })} />
              </div>
            {/* </div> */}
              <button className="ui button" type="Submit">Submit</button>
          </form>
        )
    }
}

export default TripForm;