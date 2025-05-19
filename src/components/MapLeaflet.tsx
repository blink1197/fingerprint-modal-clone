// components/MapLeaflet.tsx
import React, { useEffect, useRef } from 'react';
import L, { Map as LeafletMap } from 'leaflet';

interface MapLeafletProps {
    latitude: number;
    longitude: number;
}

const MapLeaflet: React.FC<MapLeafletProps> = ({ latitude, longitude }) => {
    // Ref will hold Leaflet Map instance or null
    const mapRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
            // Initialize the map on the div with id 'map'
            mapRef.current = L.map('map').setView([latitude, longitude], 13);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(mapRef.current);

        }

        // Cleanup map on unmount
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [latitude, longitude]);

    return (
        <div
            id="map"
            style={{ height: '400px', width: '100%' }}
        />
    );
};

export default MapLeaflet;
