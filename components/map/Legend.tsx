// Components
import { Heading, Text } from '@/components/global';
import NextImage from 'next/image';

type LegendProps = {
  showMeetups: boolean;
  showRyans: boolean;
  showCommunityEvents: boolean;
  setShowMeetups: (bool: boolean) => void;
  setShowRyans: (bool: boolean) => void;
  setShowCommunityEvents: (bool: boolean) => void;
};

const Legend = (props: LegendProps) => {
  const {
    showMeetups,
    showRyans,
    showCommunityEvents,
    setShowMeetups,
    setShowRyans,
    setShowCommunityEvents,
  } = props;

  return (
    <div className='absolute bottom-2 right-2 bg-white p-3 rounded-md shadow-md text-black w-48 font-semibold lg:bottom-8 lg:right-8'>
      <Heading size='xs' className='font-semibold mb-2' ignoreColorMode>
        Legend
      </Heading>
      <div className='flex justify-between'>
        <div className='flex'>
          <input
            type='checkbox'
            checked={showMeetups}
            onClick={() => setShowMeetups(!showMeetups)}
          />

          <Text
            className='ml-2'
            color='black'
            size='xxs'
          >
            Ryan Meetup
          </Text>
        </div>
        <NextImage
          className='shrink-0'
          src='/icons/meetup-icon.webp'
          width={20}
          height={20}
          alt='Ryans have met up in this city before'
        />
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <input
            type='checkbox'
            checked={showRyans}
            onClick={() => setShowRyans(!showRyans)}
          />

          <Text
            className='ml-2'
            color='black'
            size='xxs'
          >
            Ryan lives here
          </Text>
        </div>
        <NextImage
          className='shrink-0'
          src='/icons/ryanicon.png'
          width={20}
          height={20}
          alt='Ryans have met up in this city before'
        />
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <input
            type='checkbox'
            checked={showCommunityEvents}
            onClick={() => setShowCommunityEvents(!showCommunityEvents)}
          />

          <Text
            className='ml-2'
            color='black'
            size='xxs'
          >
            Community Event
          </Text>
        </div>
        <NextImage
          className='shrink-0'
          src='/icons/emoji.png'
          width={20}
          height={20}
          alt='Ryans have met up in this city before'
        />
      </div>
    </div>
  );
};

export { Legend };