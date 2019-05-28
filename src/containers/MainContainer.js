import React from 'react';
import LoginForm from '../components/LoginForm';
import TripContainer from './TripContainer'


class Main extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="ui container">
            {
                localStorage.getItem("token") ?
                <div className="ui two column grid">
                    <div className="ten wide column">
                        <TripContainer />
                    </div>
                    <div className="six wide column">
                        <TripContainer />
                    </div>
                </div> :
                    <LoginForm history={this.props.history}/>
            }
            </div>
        )
    }
}

export default Main;






            // <div className="ui container">
            //     <div className="ui two column grid">
            //         <div className="ten wide column">
            //             <TripContainer />
            //         </div>
            //         <div className="six wide column">
            //             <TripContainer />
            //         </div>
            //     </div>
            // </div>
        //     )
        // }
    
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