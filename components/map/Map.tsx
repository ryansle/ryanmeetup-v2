'use client';

import { useState } from 'react';

// Components
import Map, { Marker, Popup } from 'react-map-gl';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';
import { Legend } from '@/components/map';

// Types
import type { Location } from '@/lib/types';

// Utilities
import 'mapbox-gl/dist/mapbox-gl.css';
import { convertImageUrl } from '@/utils/convert';

type MapboxProps = {
  locations: Location[];
};

const Mapbox = (props: MapboxProps) => {
  const { locations } = props;

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [showRyans, setShowRyans] = useState<boolean>(true);
  const [showMeetups, setShowMeetups] = useState<boolean>(true);
  const [showCommunityEvents, setShowCommunityEvents] = useState<boolean>(true);

  const meetupLocations = locations.filter((location) => location.locationType === 'Event Location');
  const hubLocations = locations.filter((location) => location.locationType === 'Ryan Hub');
  const communityLocations = locations.filter((location) => location.locationType === 'Community Event');

  const renderIcon = (type: string) => {
    switch (type) {
      case 'Event Location':
        return '/icons/meetup-icon.webp';
      case 'Ryan Hub':
        return '/icons/ryanicon.png';
      case 'Community Event':
        return '/icons/emoji.png';
    };
  };

  return (
    <div className='w-full h-[600px] md:h-[700px]'>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
          bearing: 0,
          pitch: 0
        }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        {showRyans && hubLocations?.map((location) => (
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
              src={renderIcon(location.locationType) as string}
              alt={location.locationType}
              width={18}
              height={18}
              className='rounded-full border border-black'
            />
          </Marker>
        ))}

        {showMeetups && meetupLocations?.map((location) => (
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
              src={renderIcon(location.locationType) as string}
              alt={location.locationType}
              width={20}
              height={20}
            />
          </Marker>
        ))}

        {showCommunityEvents && communityLocations?.map((location) => (
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
              src={renderIcon(location.locationType) as string}
              alt={location.locationType}
              width={20}
              height={20}
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
            <div className='text-black'>
              {selectedLocation.image && (
                <NextImage
                  className='mb-2'
                  src={convertImageUrl(selectedLocation.image) ?? '/trophy.webp'}
                  alt={selectedLocation.eventName}
                  width={200}
                  height={200}
                />
              )}

              <Heading size='xs' ignoreColorMode>
                {selectedLocation.eventName ?? selectedLocation.city}
              </Heading>
              <Text size='xs' color='primary' className='-mt-1'>
                {selectedLocation.eventDate && (
                  <span>
                    {new Date(selectedLocation.eventDate).toLocaleDateString()} •
                  </span>
                )}{' '}
                {selectedLocation.eventName ? selectedLocation.city : ''}
              </Text>
            </div>
          </Popup>
        )}

        <Legend
          showMeetups={showMeetups}
          showRyans={showRyans}
          showCommunityEvents={showCommunityEvents}
          setShowMeetups={setShowMeetups}
          setShowRyans={setShowRyans}
          setShowCommunityEvents={setShowCommunityEvents}
        />
      </Map>
    </div>
  );
};

export { Mapbox };