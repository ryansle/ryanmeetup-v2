'use client';

import { useState } from 'react';

// Components
import Map, { Marker, Popup } from 'react-map-gl';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';
import { Legend } from '@/components/map';
import { FaMapPin as Pin } from 'react-icons/fa';
import NextLink from 'next/link';

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
  const [showNamedBusinesses, setShowNamedBusinesses] = useState<boolean>(true);
  const [showOwnedBusinesses, setShowOwnedBusinesses] = useState<boolean>(true);
  const [showChapters, setShowChapters] = useState<boolean>(true);

  const meetupLocations = locations.filter((location) => location.locationType === 'Event Location');
  const hubLocations = locations.filter((location) => location.locationType === 'Ryan Hub');
  const namedBusinesses = locations.filter((location) => location.locationType === 'Ryan-Named Business');
  const ownedBusinesses = locations.filter((location) => location.locationType === 'Ryan-Owned Business');
  const chapters = locations.filter((location) => location.locationType === 'Chapter');

  const renderIcon = (type: string) => {
    switch (type) {
      case 'Event Location':
        return '/icons/partiful.webp';
      case 'Ryan Hub':
        return '/icons/ryanicon.png';
      case 'Ryan-Owned Business':
        return '/icons/brief.png';
      case 'Ryan-Named Business':
        return '/icons/nametagicon.png';
      case 'Chapter':
        return '/icons/invert.png'
    };
  };

  const isBusiness = selectedLocation?.locationType === 'Ryan-Named Business' || selectedLocation?.locationType === 'Ryan-Owned Business';

  const convertToSlug = (city: string) => {
    let sanitized = city.substring(0, city.indexOf(',')).toLowerCase();

    return sanitized.replaceAll(' ', '-');
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
              width={16}
              height={16}
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

        {showNamedBusinesses && namedBusinesses?.map((location) => (
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

        {showOwnedBusinesses && ownedBusinesses?.map((location) => (
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

              <Heading className='text-lg' size='h3' ignoreColorMode>
                {isBusiness ? selectedLocation.locationName : selectedLocation.eventName ?? selectedLocation.city}
              </Heading>
              <Text className='text-gray-700 text-sm' ignoreColorMode color='primary'>
                {isBusiness && (
                  <>
                    <span>
                      {selectedLocation.locationType}
                    </span>
                    <span className='flex mt-1'>
                      <Pin className='fill-red-500 mr-1' /> {selectedLocation.city}
                    </span>
                  </>
                )}

                {selectedLocation.eventDate && (
                  <span className='-mt-1 text-gray-700'>
                    {new Date(selectedLocation.eventDate).toLocaleDateString()} •
                  </span>
                )}{' '}
                {selectedLocation.eventName ? selectedLocation.city : ''}
              </Text>
            </div>
          </Popup>
        )}

        {showChapters && chapters?.map((location) => (
          <Marker
            key={location.locationName}
            latitude={location.coordinates.lat}
            longitude={location.coordinates.lon}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedLocation(location);
            }}
          >
            <NextLink href={`/chapters/${convertToSlug(location.city)}`}>
              <NextImage
                src={renderIcon(location.locationType) as string}
                alt={location.locationType}
                className='rounded-full'
                width={20}
                height={20}
              />
            </NextLink>
          </Marker>
        ))}

        <Legend
          showMeetups={showMeetups}
          showRyans={showRyans}
          showNamedBusinesses={showNamedBusinesses}
          showOwnedBusinesses={showOwnedBusinesses}
          showChapters={showChapters}
          setShowMeetups={setShowMeetups}
          setShowRyans={setShowRyans}
          setShowNamedBusinesses={setShowNamedBusinesses}
          setShowOwnedBusinesses={setShowOwnedBusinesses}
          setShowChapters={setShowChapters}
        />
      </Map>
    </div>
  );
};

export { Mapbox };