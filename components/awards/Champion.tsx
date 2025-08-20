// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Heading, Text } from '@/components/global';
import { FaInstagram as Instagram } from 'react-icons/fa';

// Types
import type { ChampionRyan } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type ChampionProps = {
  ryan: ChampionRyan;
};

const Champion = (props: ChampionProps) => {
  const {
    fullName,
    fullName2,
    headshot,
    eventDate,
    instagram,
    instagram2,
    title,
    location,
    location2,
  } = props.ryan;

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
        <div>
          <h3 className={`${fullName2 ? 'text-md' : fullName.length > 15 ? 'text-2xl' : 'text-3xl'} mb-2 font-cooper tracking-wider text-black dark:text-white`}>
            {fullName}
          </h3>
        </div>
        <div className={`flex ml-2 space-x-2 ${fullName2 ? 'mb-2' : 'mb-1'}`}>
          {instagram && (
            <NextLink href={instagram} aria-label={`${fullName}'s Instagram`}>
              <Instagram className='fill-black dark:fill-white timing hover:scale-105 hover:fill-blue-500' />
            </NextLink>
          )}
          {instagram2 && (
            <NextLink href={instagram2} aria-label={`${fullName2}'s Instagram`}>
              <Instagram className='fill-black dark:fill-white timing hover:scale-105 hover:fill-blue-500' />
            </NextLink>
          )}
        </div>
      </div>
      <Heading className='text-xl mb-1 title' size='h4'>
        {title}
      </Heading>
      <Text className='text-base'>
        {location} {location2 && `, & ${location2} `}• {eventDate}
      </Text>
    </div>
  );
};

export { Champion };