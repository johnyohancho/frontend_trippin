import React from 'react';
import Map from './Map.js';
import EventsList from './EventsList.js';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            mapCoords: {LNG: -85, LAT: 35, ZOOM: 5}
        }
    }

    moveMap= (lng, lat, zoom)=>{
        this.setState({ mapCoords: {
            LNG: lng,
            LAT: lat,
            ZOOM: zoom
        }})
    }

    render() {
        return(
            <div className='App'>
                {console.log('MAIN RENDERED')}
                <div className='item1'>
                    <EventsList />
                </div>
                {/* <div className='item2'> */}
                    {/* <Map mapCoords={this.state.mapCoords} moveMap={this.moveMap}/> */}
                {/* </div> */}
            </div>
        )
    }
}

export default Main