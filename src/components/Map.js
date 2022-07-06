import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import ChangeMapView from "./ChangeMapView";

function Map({lat,lng}) {
    const position = [lat, lng]
    return (
        <div className='leaflet-container'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} center={position} >
                    <Popup>
                        Here is your location
                    </Popup>
                </Marker>
                <ChangeMapView coords={position} />
            </MapContainer>
        </div>
    );
}

export default Map;