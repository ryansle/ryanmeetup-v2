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
    images: ['/ryankickoff.png'],
    locale: 'en_US',
    type: 'website',
  },
};

const GuidelinesPageRedirect = () => {
  redirect('https://www.meetup.com/ryanmeetup/events/');
};

export default GuidelinesPageRedirect;
