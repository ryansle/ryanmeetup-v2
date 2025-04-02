// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { EventsContainer } from '@/components/events';

// Types
import type { RyanEvent } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchEvents } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Events',
  description: 'Keep up to date with Ryan Meetups near you!',
  keywords: ['when is the next ryan meetup?', 'ryan meetup', 'ryan meetup nyc', 'ryan meetup new york', 'ryan meetup new york city', 'ryan meetup near me', 'ryan meetup los angeles', 'ryan rendezvous', 'ryan roundup', 'ryan kickoff', 'ryan rodeo', 'ryan roundtable', 'ryan roadtrip', 'ryan rally', 'ryan rave', 'ryan run', 'ryan new york city', 'ryan meet up', 'ryan meetup new york city', 'ryan reunion', 'ryan syndicate', 'ryan retreat', 'ryan relay', 'st ryans day', 'ryami vice', '150 deadpools and wolverine', 'ryans game show', 'rytoberfest', 'ryancon', 'last ryan standing', 'ryan royale', 'ryan relay', 'society of ryans', 'ryan red carpet'],
  openGraph: {
    url: 'https://ryanmeetup.com/events',
    title: 'Ryan Meetup - Events',
    description: 'Keep up to date with Ryan Meetups near you!',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/meta/events.png',
        width: 3360,
        height: 1854,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const EventsPage = async () => {
  const events = await fetchEvents();

  return (
    <Layout className='space-y-6'>
      <Heading className='mb-6'>Ryan Meetup Events</Heading>

      <Text size='lg' className='mb-4'>
        If your name is Ryan, check out our Ryan Meetups below. No Bryans allowed.
      </Text>

      <EventsContainer events={events as unknown as RyanEvent[]} />
    </Layout>
  );
};

export default EventsPage;

export const revalidate = 30;