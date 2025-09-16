

// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Newsletter',
  description: 'Subscribe to the official Ryan Meetup newsletter.',
  openGraph: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdS8O47kdOcmjXglOt_aGTs2q9qK6CrN4zGFdx62H10a-8kDg/viewform',
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
  redirect('https://docs.google.com/forms/d/e/1FAIpQLSdS8O47kdOcmjXglOt_aGTs2q9qK6CrN4zGFdx62H10a-8kDg/viewform');
};

export default NewsletterPageRedirect;
