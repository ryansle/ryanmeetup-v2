// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Buy a Ryan\'s Game Show Shirt',
  description: 'Purchase the official t-shirt of Ryan\'s Game Show LIVE.',
  openGraph: {
    url: 'https://ryanmeetup.com/rsvp',
    title: 'Buy a Ryan\'s Game Show Shirt',
    description: 'Purchase the official t-shirt of Ryan\'s Game Show LIVE.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/gameshow.png',
        width: 1438,
        height: 808,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const BuyShirtPage = () => {
  redirect('https://ryanmeetup.etsy.com/listing/1838930998/ryans-game-show-live-shirt?etsrc=sdt');
};

export default BuyShirtPage;
