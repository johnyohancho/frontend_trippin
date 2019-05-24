import React, {Component} from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            lng: 10,
            lat: 10,
            zoom: 5
        }
    }

    componentDidMount() {
        const {lng, lat, zoom} = this.state

        const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
        mapboxgl.accessToken = 'pk.eyJ1IjoibGluY29sbmZsZWV0IiwiYSI6ImNqdzI5ZXl4NjAwcWg0YW93dXFyZjVqa2oifQ.tiX8wMoYv6v0lUrvhNaJsg';
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lat, lng],
            zoom: zoom
        })

        map.on('move', () => {
            const { lng, lat } = map.getCenter()
            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            })
        })
    }



    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        const style = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            width: '100%'
        };

        return (
            <div style={style} ref={target => this.mapContainer = target} />
        )
    }
}
export default Map