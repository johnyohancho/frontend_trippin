import React from 'react';
import {Router, Link} from 'react-router-dom';
import {Grid,Container,Header,GridColumn} from 'semantic-ui-react';
import Map from './Map.js';
import EventsList from './EventsList.js';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            mapCoords: {Lng: 10, Lat: 10, Zoom: 5}
        }
    }

    moveMap= (lng, lat, zoom)=>{
        this.setState({ mapCoords: {
            Lng: lng,
            Lat: lat,
            Zoom: zoom
        }})
    }

    render() {
        return(
            <Grid>
                <GridColumn className='ui grid equal width column'> 
                    <EventsList></EventsList>
                </GridColumn>
                {/* <GridColumn className='ui grid equal width column'> */}
                    <Map className='ui grid equal width column' mapCoords={this.state.mapCoords} moveMap={this.moveMap}/>
                {/* </GridColumn> */}
            </Grid>
        )
    }
}

export default Main