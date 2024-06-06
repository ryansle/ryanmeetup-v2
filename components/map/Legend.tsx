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

  const options = [
    {
      checked: showMeetups,
      handler: () => setShowMeetups(!showMeetups),
      text: 'Ryan Meetup',
      alt: 'Past or future Ryan Meetup location.',
      icon: '/icons/meetup-icon.webp',
    },
    {
      checked: showRyans,
      handler: () => setShowRyans(!showRyans),
      text: 'Ryan lives here',
      alt: 'There\'s at least one of the Ryans that lives here.',
      icon: '/icons/ryanicon.png',
    },
    {
      checked: showCommunityEvents,
      handler: () => setShowCommunityEvents(!showCommunityEvents),
      text: 'Community Event',
      alt: 'There has been a Ryan Meetup community event here.',
      icon: '/icons/emoji.png',
    },
  ];

  return (
    <div className='absolute bottom-2 right-2 bg-white p-3 rounded-md shadow-md text-black w-48 font-semibold lg:bottom-8 lg:right-8'>
      <Heading size='xs' className='font-semibold mb-2' ignoreColorMode>
        Legend
      </Heading>
      {options.map((option) => (
        <div className='flex justify-between' key={option.text}>
          <div className='flex'>
            <input
              type='checkbox'
              className='w-4 h-4'
              checked={option.checked}
              onClick={option.handler}
            />

            <Text
              className='ml-2'
              color='black'
              size='xxs'
            >
              {option.text}
            </Text>
          </div>
          <NextImage
            className='shrink-0'
            src={option.icon}
            width={20}
            height={20}
            alt='Ryans have met up in this city before'
          />
        </div>
      ))}
    </div>
  );
};

export { Legend };