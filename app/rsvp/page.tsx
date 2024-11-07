// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

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
        url: '/ryanroundup.png',
        width: 3284,
        height: 2189,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const RVSPPageRedirect = () => {
  redirect('https://partiful.com/e/B7N2vvQBFpOo8wCWwSxk');
};

export default RVSPPageRedirect;
