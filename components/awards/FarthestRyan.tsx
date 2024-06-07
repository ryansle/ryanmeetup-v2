// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Heading, Text } from '@/components/global';
import { FaInstagram as Instagram } from 'react-icons/fa';

// Types
import type { TravelingRyan } from '@/lib/types';

// Utilities
import { convertImageUrl, convertShortDate } from '@/utils/convert';

type FarthestRyanProps = {
  ryan: TravelingRyan;
};

const FarthestRyan = (props: FarthestRyanProps) => {
  const {
    fullName,
    headshot,
    traveledTo,
    traveledFrom,
    milesTraveled,
    event,
    date,
    instagram,
  } = props.ryan;

  const semibold = 'font-semibold text-blue-500';

  const imageUrl = convertImageUrl(headshot);

  return (
    <div className='text-center flex justify-center flex-col items-center'>
      <div className='relative w-80 h-80 mb-4'>
        <NextImage
          className='rounded-full shadow-xl'
          src={imageUrl ?? '/trophy.png'}
          fill={true}
          alt={fullName}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='flex items-center'>
        <Heading size='md' className='mb-2'>{fullName}</Heading>
        {instagram && (
          <NextLink className='ml-2' href={instagram} aria-label={`${fullName}'s Instagram`}>
            <Instagram className='fill-black dark:fill-white transition duration-300 ease-in-out hover:scale-105 hover:fill-blue-500' />
          </NextLink>
        )}
      </div>
      <Text size='sm'>
        Traveled {milesTraveled} miles from
      </Text>
      <Text size='sm'>
        <span className={semibold}>
          {traveledFrom}
        </span>
        {' '}to{' '}
        <span className={semibold}>
          {traveledTo}
        </span>
      </Text>
      <Text size='sm'>
        for <span className='font-cooper text-black dark:text-white'>{event}</span> on {convertShortDate(date)}
      </Text>
    </div>
  );
};

export { FarthestRyan };