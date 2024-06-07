// Components
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';
import { FaCity as City } from 'react-icons/fa';
import { MdLocationPin as Pin } from 'react-icons/md';
import { FaMeetup as Meetup } from 'react-icons/fa';

// Types
import type { RyanEvent } from '@/lib/types';

// Utilities
import { convertDateToDateTimeString, convertImageUrl } from '@/utils/convert';

type EventProps = {
  event: RyanEvent;
};

const Event = (props: EventProps) => {
  const {
    title,
    coverImage,
    description,
    href,
    city,
    date,
    time,
    venue,
    isPartnerEvent
  } = props.event;

  const imageUrl = convertImageUrl(coverImage);

  return (
    <NextLink href={href}>
      <div className='border border-gray-400 relative bg-white dark:bg-black dark:border-gray-700 rounded-3xl flex flex-col h-full overflow-hidden break-inside-avoid-column transition ease-in duration-300 dark:hover:border-white hover:scale-102'>
        {isPartnerEvent && (
          <div className='absolute top-6 -left-[60px] -rotate-45 z-10'>
            <div className='px-2 text-md text-center rounded-lg font-semibold uppercase w-[200px] h-6 flex items-center justify-center bg-red-500 text-sm'>
              COMMUNITY
            </div>
          </div>
        )}
        <div className='w-full max-h-[450px] aspect-w-2 aspect-h-1 overflow-hidden'>
          <NextImage
            className='rounded-t-3xl border-b border-gray-400 dark:border-gray-700'
            src={imageUrl ?? '/trophy.png'}
            fill={true}
            alt={title}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Event Description */}
        <div className='px-5 pt-3 pb-3 space-y-2'>
          <div className='flex items-center justify-between mb-3'>
            <div>
              <Text size='xs'>{convertDateToDateTimeString(date)} @ {time}</Text>
              <Heading size='sm'>{title}</Heading>
            </div>
            {href.includes('meetup') && !isPartnerEvent && (
              <div>
                <Meetup className='w-10 h-10 fill-black dark:fill-white' />
              </div>
            )}
          </div>
          <Text className='min-h-[85px]' size='xs'>{description}</Text>

          <div className='grid grid-cols-2 text-gray-400'>
            <div className='col-span-1 flex items-center space-x-2'>
              <City />
              <Text size='xs'>{city}</Text>
            </div>

            <div className='col-span-1 flex items-center space-x-2'>
              <Pin />
              <Text size='xs'>{venue}</Text>
            </div>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { Event };
