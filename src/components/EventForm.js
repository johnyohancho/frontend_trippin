import React from 'react';

class EventForm extends React.Component {

    constructor() {
        super()
        state = {
            name: '',
            description: '',
            cost: 0,
            date: '',
            start_time: '',
            end_time: '',
            city: '',
            venue: ''
        }
    }

    saveEvent = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/events", {
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
            // add addEvent to DayCard
            // this.props.addDog(json)
          }
        })
      }

    displayErrors = () => {
        if (this.state.errors.length > 0) {
          debugger;
          return (
            <div className='event-form-errors'>
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
            <form className="event-form" onSubmit={this.saveEvent}>
            { this.displayErrors() }
            <div class="field">
              <label>Name</label>
              <input type="text" name="name" placeholder="Name"
                onChange={(e) => this.setState({ name: e.target.value })} />
            </div>
            <div class="field">
              <label>Description</label>
              <input type="text" name="description" placeholder="Description"
                onChange={(e) => this.setState({ description: e.target.value })} />
            </div>
            
            <button class="ui button" type="submit">Submit</button>
          </form>
        )
    }
}

export default EventForm;