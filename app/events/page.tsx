// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Note } from '@/components/global';
import { EventsContainer } from '@/components/events';
import { SubscribeForm } from '@/components/home';
import NextLink from 'next/link';

// Types
import type { RyanEvent } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchEvents } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Events',
  description: 'Keep up to date with Ryan Meetups near you!',
  keywords: ['when is the next ryan meetup?', 'ryan meetup', 'ryan meetup nyc', 'ryan meetup new york', 'ryan meetup new york city', 'ryan meetup near me', 'ryan meetup los angeles', 'ryan rendezvous', 'ryan roundup', 'ryan kickoff', 'ryan rodeo', 'ryan roundtable', 'ryan roadtrip', 'ryan rally', 'ryan rave', 'ryan run', 'ryan new york city', 'ryan meet up', 'ryan meetup new york city', 'ryan reunion', 'ryan syndicate', 'ryan retreat', 'ryan relay', 'st ryans day', 'ryami vice', '150 deadpools and wolverine', 'ryans game show', 'rytoberfest', 'ryancon'],
  openGraph: {
    url: 'https://ryanmeetup.com/events',
    title: 'Ryan Meetup - Events',
    description: 'Keep up to date with Ryan Meetups near you!',
    siteName: 'Ryan Meetup',
    images: '/stryan.png',
    locale: 'en_US',
    type: 'website',
  },
};

const EventsPage = async () => {
  const events = await fetchEvents();

  return (
    <Layout>
      <Heading className='mb-6'>Ryan Meetup Events</Heading>

      <Text size='lg' className='mb-4'>
        If your name is Ryan, check out our Ryan Meetups below. No Bryans allowed.
      </Text>

      <Note>
        <Text size='xs'>
          Interested in hosting your own Ryan Meetup? Email us at <a className='underline text-blue-500' href='mailto:ryan@ryanmeetup.com'>ryan@ryanmeetup.com</a> and we&apos;ll add your community event to the page! Community events are Ryan Meetups that our team of Ryans is not directly associated with. But Ryans are Ryans, so we, as Ryans, are fully on board with all forms of Ryan gatherings.
        </Text>
        <Text size='xs'>
          For more information on how to host your own Ryan Meetup community event, please check out our{' '}<NextLink href='/guidelines' className='text-blue-500 underline'>guidelines document</NextLink>.
        </Text>
      </Note>

      <div className='mb-10'>
        <p className='font-medium -mb-2 text-base text-black dark:text-white'>
          Sign up for Ryan Meetup event emails
        </p>
        <SubscribeForm label='' name='subscribe-events-page' />
      </div>

      <EventsContainer events={events as unknown as RyanEvent[]} />
    </Layout>
  );
};

export default EventsPage;