// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';
import { DoubleHeader } from '@/components/events';

// Types
import type { Metadata } from 'next';
import type { RyanEvent } from '@/lib/types';

// Utilities
import { fetchEvents } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - RSVP',
  description: 'RSVP to the Ryan Meetup.',
  openGraph: {
    url: 'https://ryanmeetup.com/rsvp',
    title: 'Ryan Meetup - RSVP',
    description: 'RSVP to the Ryan Meetup.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/ryanroundup.png',
        width: 3284,
        height: 2189,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const RSVPPage = async () => {
  const events = await fetchEvents();

  return (
    <Layout className='space-y-6'>
      <Heading className='mb-6 text-center'>One Weekend. Back-to-back Ryan Meetups.</Heading>

      <DoubleHeader events={events as RyanEvent[]} />
    </Layout>
  );
};

export default RSVPPage;

export const revalidate = 30;
