import React from 'react';
import EventCard from './EventCard';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            searchResults:[],
            resultsPage: 0
        }
    }

    componentDidMount() {
        this.fetchResults()
    }

    fetchResults= ()=>{
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
        fetch(`https://app.ticketmaster.com/discovery/v2/suggest.json?size=5&page=${this.state.resultsPage}${keyword}${city}${radius}${date}&apikey=9b7LFj2VHCQZkEt6UGKU0objuiK3Bzkl`)
        .then(resp => resp.json())
        .then(data => { this.setState({searchResults: data._embedded.events}) })
    }

    changePage= (e)=>{
        if (this.state.resultsPage > 0) {
            this.setState({
                resultsPage: parseInt(this.state.resultsPage)+parseInt(e.target.value)
            })
        }
        else if ((this.state.resultsPage <= 0) && (e.target.value === 1)) {
            this.setState({
                resultsPage: parseInt(this.state.resultsPage)+parseInt(e.target.value)
            })
        }
        this.fetchResults()
    }
    
    render () {
        return (
            <div>
                <button className="ui left labeled icon button" value={-1} onClick={this.changePage}>
                    <i className="left arrow icon"></i>
                    Last
                </button>
                <button className="ui right labeled icon button" value={1} onClick={this.changePage}>
                    <i className="right arrow icon"></i>
                    Next
                </button>
                <div className='ui cards'>
                    {this.state.searchResults.map(details=>{
                        return <EventCard event={details} addEvent={this.props.addEvent}/>
                    })}
                </div>
            </div>
        )
    }
}

export default SearchResults