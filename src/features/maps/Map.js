import React from 'react';
// import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import countries from './countries';
import 'leaflet/dist/leaflet.css';

function Map() {
  const center = [0, 0];

  return (
    <MapContainer
      center={center}
      zoom={0.5}
      style={{ width: '90vw', height: '50vh' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-4326/256/{z}/{x}/{y}.png?key=fH0YMwkOIVZ7jxcD8NFn"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      {
        countries.map((country) => {
          const coordinates = [country.latitude, country.longitude] || [0, 0];
          return (
            <Polygon
              key={country.ISO}
              pathOptions={{
                fillColor: 'White',
              }}
              positions={coordinates[0]}
            />
          );
        })
}
    </MapContainer>
  );
}

/* Map.propTypes = {
  selectedISO: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
}; */

export default Map;
