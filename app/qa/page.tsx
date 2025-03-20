// Types
import type { Metadata } from 'next';

// Utilities
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Q&A',
  description: 'Documenting the shared history of the Ryan Meetup.',
  keywords: ['ryan meetup qa', 'ryan meetup', 'history of ryan meetup'],
  openGraph: {
    url: 'https://ryanmeetup.com/qa',
    title: 'Ryan Meetup - Q&A',
    description: 'Documenting the shared history of the Ryan Meetup..',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/ryankickoff.png',
        width: 1600,
        height: 800,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const QAPage = () => {
  redirect('https://forms.gle/1btc43o1EyqLVqLL7q');
};

export default QAPage;
