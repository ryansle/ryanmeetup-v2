// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Guidelines',
  description: 'Guidelines for hosting your own Ryan Meetup community event.',
  openGraph: {
    url: 'https://ryanmeetup.com/guidelines',
    title: 'Ryan Meetup - Guidelines',
    description: 'Guidelines for hosting your own Ryan Meetup community event.',
    siteName: 'Ryan Meetup',
    images: '/ryankickoff.png',
    locale: 'en_US',
    type: 'website',
  },
};

const GuidelinesPageRedirect = () => {
  redirect('https://docs.google.com/document/d/1xo3LgF4k5RQSkcdgc95-bah1zT9pPI8rr0Tx6zLoaYE/edit');
};

export default GuidelinesPageRedirect;
