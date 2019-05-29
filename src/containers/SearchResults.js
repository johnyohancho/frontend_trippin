import React from 'react';
import EventCard from '../components/EventCard';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            eventList:[]
        }
    }

    componentDidMount() {
        let keyword=''
        let city=''
        let radius=''
        let date=''
        if (this.props.searchTerms.keyword) {
            keyword = `&keyword=${this.props.searchTerms.keyword}`
        }
        if (this.props.searchTerms.city) {
            city = `&city=${this.props.searchTerms.city}`
        }
        if (this.props.searchTerms.radius) {
            radius = `&radius=${this.props.searchTerms.radius}&unit=miles`
        }
        if (this.props.searchTerms.date) {
            date = `&startDateTime=${this.props.searchTerms.date}`
        }
        fetch(`https://app.ticketmaster.com/discovery/v2/suggest.json?size=5${keyword}${city}${radius}${date}&apikey=9b7LFj2VHCQZkEt6UGKU0objuiK3Bzkl`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({eventList: data._embedded.events});
        })
    }
    
    render () {
        console.log("Yay")
        console.log(this.state.eventList)
        return (
            <div>
                <button class="ui left labeled icon button">
                    <i class="left arrow icon"></i>
                    Previous 5
                </button>
                <button class="ui right labeled icon button">
                    <i class="right arrow icon"></i>
                    Next 5
                </button>
                <div className='ui cards'>
                    {this.state.eventList.map(details=>{
                        return <EventCard event={details}/>
                    })}
                </div>
            </div>
        )
    }
}

export default SearchResults