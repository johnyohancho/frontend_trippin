import React from 'react';
import Map from '../components/Map';
import TripContainer from './TripContainer'


class Main extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="main-container">
                <TripContainer />
            </div>
        )
    }

    // constructor(props) {
    //     super(props)
    //     this.state= {
    //         mapCoords: {LNG: -85, LAT: 35, ZOOM: 5},
    //         citySearch: ''
    //     }
    // }

    // moveMap= (lng, lat, zoom)=>{
    //     this.setState({ mapCoords: {
    //         LNG: lng,
    //         LAT: lat,
    //         ZOOM: zoom
    //     }})
    // }

    // render() {
    //     return(
    //         <div className='App'>
    //             {console.log('MAIN RENDERED')}
    //             <div className='item1'>
    //                 <EventsList />
    //             </div>
    //             {/* <div className='item2'> */}
    //                 {/* <Map mapCoords={this.state.mapCoords} moveMap={this.moveMap}/> */}
    //             {/* </div> */}
    //         </div>
    //     )
    // }
}

export default Main