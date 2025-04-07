'use client';

// Components
import { Heading, Text, Button } from '@/components/global';
import { FaRegNewspaper as News } from 'react-icons/fa';

const Blurb = () => {
  return (
    <div>
      <div className='hidden xl:block'>
        <Heading
          className='mb-6 text-center'
          size='2xl'
        >
          Join the Ryan Meetup
        </Heading>
      </div>

      <div className='block xl:hidden'>
        <Heading className='mb-6 text-center'>
          Ryan Meetups
        </Heading>
      </div>

      <div className='text-center'>
        <Text size='lg' className='mb-6 xl:mx-32'>
          <span className='hidden md:inline-block'>
            It&apos;s never too late to join the Ryan Meetup.
          </span>
          <span>
            {' '}Sign up for our newsletter below to stay up-to-date with our events.{' '}
          </span>

          <span className='hidden md:inline-block'>
            And remember - No Bryans allowed.
          </span>
        </Text>

        <div className='grid grid-cols-12'>
          <div className='col-span-0 xl:col-span-1' />
          <Button.Link
            className='col-span-12 xl:col-span-10'
            href='/newsletter'
            leftIcon={<News />}
          >
            Get notified of future events
          </Button.Link>
          <div className='col-span-0 xl:col-span-1' />
        </div>
      </div>
    </div>
  );
};

export { Blurb };