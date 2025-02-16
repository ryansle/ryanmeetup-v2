

// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Newsletter',
  description: 'Subscribe to the official Ryan Meetup newsletter.',
  openGraph: {
    url: 'https://share-na2.hsforms.com/21Dr3jZZ1QqyzevFmZhPRrw402o2n',
    title: 'Ryan Meetup - Newsletter',
    description: 'Subscribe to the official Ryan Meetup newsletter.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/newsletter.png',
        width: 798,
        height: 373,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const NewsletterPageRedirect = () => {
  redirect('https://share-na2.hsforms.com/21Dr3jZZ1QqyzevFmZhPRrw402o2n');
};

export default NewsletterPageRedirect;
