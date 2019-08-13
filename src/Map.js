import React from 'react';

class Map extends React.Component {

    componentDidMount() {
        // const {LAT, LNG, ZOOM} = this.props.mapCoords

        const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
        mapboxgl.accessToken = 'pk.eyJ1IjoibGluY29sbmZsZWV0IiwiYSI6ImNqdzI5ZXl4NjAwcWg0YW93dXFyZjVqa2oifQ.tiX8wMoYv6v0lUrvhNaJsg';
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/lincolnfleet/cjw6lnlge3u0f1cpbdhzdae1d',
            center: [-84.34, 33.74],
            zoom: 10
        })

        map.on('move', () => {
            const { lng, lat } = map.getCenter();
            this.props.moveMap(
                lng.toFixed(4),
                lat.toFixed(4),
                map.getZoom().toFixed(2)
            )
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        const style = {
            position: 'fixed',
            top: 60,
            bottom: 30,
            left: 10,
            right: 10,
            width: '100%'
        };

        return (
            <div className='item2' style={style} ref={target => this.mapContainer = target} />
        )
    }
}
export default Map