// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Join',
  description: 'Wanna meet other Ryans?',
  openGraph: {
    url: 'https://www.meetup.com/ryanmeetup/',
    title: 'Ryan Meetup - Join',
    description: 'Wanna meet other Ryans?',
    siteName: 'Ryan Meetup',
    images: '/ryankickoff.png',
    locale: 'en_US',
    type: 'website',
  },
};

const JoinPageRedirect = () => {
  redirect('https://www.meetup.com/ryanmeetup/');
};

export default JoinPageRedirect;
