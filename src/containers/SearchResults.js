import React from 'react';
import Main from './MainContainer.js';
import EventCard from '../components/EventCard.js';

class SearchResults extends React.Component {

    searchFetch= () =>{
        console.log('searchFetch triggered')
        let searchTerms= this.props.searchTerms
        let keyword=''
        let city=''
        let radius=''
        let date=''
        console.log('fetch vars', keyword,city,radius,date)
        if (searchTerms.keyword) {
            keyword = `&keyword=${searchTerms.keyword}`
        }
        if (searchTerms.city) {
            city = `&city=${searchTerms.city}`
        }
        if (searchTerms.radius) {
            radius = `&radius=${searchTerms.radius}&unit=miles`
        }
        if (searchTerms.date) {
            date = `&startDateTime=${searchTerms.date}`
        }
        fetch(`https://app.ticketmaster.com/discovery/v2/suggest.json?size=20${keyword}${city}${radius}${date}&apikey=9b7LFj2VHCQZkEt6UGKU0objuiK3Bzkl`)
        .then(resp => resp.json())
        .then(data => this.createResults(data))
        .then(data => console.log(data))
    }

    createResults= (eventsList)=> {
            eventsList.map(event=>{
            return <EventCard event={event} />
        })
    }

    render () {
        return (
            <div>
                {console.log('search results props', this.props)}
                {this.searchFetch}
            </div>
        )
    }
}

export default SearchResults