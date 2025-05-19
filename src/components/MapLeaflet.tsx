// components/MapLeaflet.tsx
import React, { useEffect, useRef } from 'react';
import L, { Map as LeafletMap } from 'leaflet';

interface MapLeafletProps {
    latitude: number;
    longitude: number;
    mapId?: string; // optional for flexibility
}

const MapLeaflet: React.FC<MapLeafletProps> = ({ latitude, longitude, mapId = 'map' }) => {
    const mapRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map(mapId).setView([latitude, longitude], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(mapRef.current);
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [latitude, longitude, mapId]);

    return (
        <div
            id={mapId}
            style={{ height: '100%', width: '100%' }}
        />
    );
};


export default MapLeaflet;
