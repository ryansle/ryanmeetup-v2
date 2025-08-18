// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Checkout - Ryan Meetup Membership Card',
  description: 'You\'ve always been a member, and now you have the card to prove it.',
  openGraph: {
    url: 'https://ryanmeetup.com/cards',
    title: 'Checkout - Ryan Meetup Membership Card',
    description: 'You\'ve always been a member, and now you have the card to prove it.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/meta/cards.png',
        width: 4032,
        height: 3024,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const BuyCardsPageRedirect = () => {
  redirect('https://buy.stripe.com/3cIcN4fTP7BS0kzbXJ2kw0a');
};

export default BuyCardsPageRedirect;
