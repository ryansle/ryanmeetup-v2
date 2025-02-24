
// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - RSVP',
  description: 'RSVP to St. Ryan\'s Day II in Boston, MA, on March 22nd.',
  openGraph: {
    url: 'https://ryanmeetup.com/rsvp',
    title: 'Ryan Meetup - RSVP',
    description: 'RSVP to St. Ryan\'s Day II in Boston, MA, on March 22nd.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/stryan2.png',
        width: 2400,
        height: 1350,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const RSVPPage = async () => {
  redirect('https://www.meetup.com/ryanmeetup/events/306368238/');
};

export default RSVPPage;
