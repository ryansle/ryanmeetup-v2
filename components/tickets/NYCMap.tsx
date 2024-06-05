'use client';

import { useState, useEffect } from 'react';

// Components
import Map, { Marker, Popup, Source, Layer } from 'react-map-gl';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';

// Utilities
import 'mapbox-gl/dist/mapbox-gl.css';

type Location = {
  coordinates: {
    lon: number;
    lat: number;
  };
  locationName: string;
  event: string;
  icon: string;
  description: string;
  address: string;
};

const NYCMap = () => {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [route, setRoute] = useState(null);

  const locations = [
    {
      coordinates: {
        lon: -73.98900360278488,
        lat: 40.7568101140526,
      },
      locationName: 'AMC Empire 25',
      event: 'Ryan Red Carpet',
      icon: '/icons/dplogo.png',
      description: 'Event begins around 6:30 PM',
      address: '234 W. 42nd St',
    },
    {
      coordinates: {
        lon: -73.99325226366977,
        lat: 40.74185434318787,
      },
      locationName: 'Slate NY',
      event: 'Ryan Meetup After Party',
      icon: '/icons/ryanicon.png',
      description: 'After party begins around 10:30 PM',
      address: '54 W 21st St',
    }
  ];

  const amc = [-73.98900360278488, 40.7568101140526];
  const slate = [-73.99325226366977, 40.74185434318787];

  useEffect(() => {
    const fetchRoute = async () => {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${amc.join(',')};${slate.join(',')}?geometries=geojson&access_token=${token}`
      );

      const data = await response.json();
      setRoute(data.routes[0].geometry);
    };

    fetchRoute();
  }, []);

  return (
    <div className='w-full h-[600px] text-black'>
      <Map
        mapboxAccessToken={token}
        scrollZoom={false}
        initialViewState={{
          latitude: 40.7501,
          longitude: -73.9912,
          zoom: 13.5,
          bearing: 0,
          pitch: 0
        }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        {locations.map((location) => (
          <Marker
            key={location.locationName}
            latitude={location.coordinates.lat}
            longitude={location.coordinates.lon}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedLocation(location);
            }}
          >
            <NextImage
              src={location.icon}
              alt={location.locationName}
              width={25}
              height={25}
              className={`${location.event !== 'Ryan Red Carpet' && 'rounded-full border border-black'}`}
            />
          </Marker>
        ))}

        {selectedLocation && (
          <Popup
            latitude={selectedLocation.coordinates.lat}
            longitude={selectedLocation.coordinates.lon}
            onClose={() => setSelectedLocation(null)}
            closeButton={false}
          >
            <Heading size='xs' ignoreColorMode={true}>
              {selectedLocation.locationName}
            </Heading>
            <Text color='primary' size='xxs'>
              <span className='font-semibold'>Address:</span> {selectedLocation.address}
            </Text>
            <Text color='primary' size='xxs' className='mt-2'>
              {selectedLocation.description}
            </Text>
          </Popup>
        )}

        {route && (
          <Source id='route' type='geojson' data={route}>
            <Layer
              id='route'
              type='line'
              source='route'
              layout={{
                'line-join': 'round',
                'line-cap': 'round',
              }}
              paint={{
                'line-color': '#ef4444',
                'line-width': 8,
              }}
            />
          </Source>
        )}
      </Map>
    </div>
  );
};

export { NYCMap };
