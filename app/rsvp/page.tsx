// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';
import { DoubleHeader } from '@/components/events/DoubleHeader';

// Types
import type { Metadata } from 'next';
import type { RyanEvent } from '@/lib/types';

// Utilities
import { fetchEvents } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - RSVP',
  description: 'RSVP to Ryans at the Rockies and the Ryan Summit in Denver, CO, on June 20 + 21st.',
  openGraph: {
    url: 'https://ryanmeetup.com/rsvp',
    title: 'Ryan Meetup - RSVP',
    description: 'RSVP to Ryans at the Rockies and the Ryan Summit in Denver, CO, on June 20 + 21st.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/logos/doubleheader.png',
        width: 1920,
        height: 1080,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const RSVPPage = async () => {
  const events = await fetchEvents();

  return (
    <Layout>
      <Heading className='mb-2 text-center'>One Weekend. Back-to-back Ryan Meetups.</Heading>
      <Heading size='md' className='mb-6 text-center'>...in a brand new city!</Heading>

      <DoubleHeader events={events as RyanEvent[]} />
    </Layout>
  );
};

export default RSVPPage;
