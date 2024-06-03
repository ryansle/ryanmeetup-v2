// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { EventsContainer } from '@/components/events';
import { SubscribeForm } from '@/components/home';
import NextLink from 'next/link';

// Types
import type { RyanEvent } from '@/lib/types';

// Utilities
import { fetchEvents } from '@/actions/fetchContent';

const EventsPage = async () => {
  const events = await fetchEvents();

  return (
    <Layout>
      <Heading className='mb-6'>Ryan Meetup Events</Heading>

      <Text size='lg' className='mb-4'>
        If your name is Ryan, check out our Ryan Meetups below. No Bryans allowed.
      </Text>

      <div className='mb-8 border-l pl-4 border-gray-700 border-l-4 space-y-4'>
        <Text size='xs'>
          Interested in hosting your own Ryan Meetup? Email us at <a className='underline text-blue-500' href='mailto:ryan@ryanmeetup.com'>ryan@ryanmeetup.com</a> and we&apos;ll add your community event to the page! Community events are Ryan Meetups that our team of Ryans is not directly associated with. But Ryans are Ryans, so we, as Ryans, are fully on board with all forms of Ryan gatherings.
        </Text>
        <Text size='xs'>
          For more information on how to host your own Ryan Meetup community event, please check out our{' '}<NextLink href='/guidelines' className='text-blue-500 underline'>guidelines document</NextLink>.
        </Text>
      </div>

      <div className='mb-10'>
        <p className='font-medium -mb-2 text-base text-black dark:text-white'>
          Sign up for Ryan Meetup event emails
        </p>
        <SubscribeForm label='' />
      </div>

      <EventsContainer events={events as unknown as RyanEvent[]} />
    </Layout>
  );
};

export default EventsPage;