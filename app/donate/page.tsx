// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Donate to the Ryan Meetup',
  description: 'Donate to the Ryan Meetup to help keep events funded.',
  openGraph: {
    url: 'https://ryanmeetup.com/donate',
    title: 'Donate to the Ryan Meetup',
    description: 'Donate to the Ryan Meetup to help keep events funded.',
    siteName: 'Ryan Meetup',
    images: '/ryankickoff.png',
    locale: 'en_US',
    type: 'website',
  },
};

const DonatePageRedirect = () => {
  redirect('https://buy.stripe.com/4gwdT546Ydyn8AE8wC');
};

export default DonatePageRedirect;
