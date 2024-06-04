// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Donate',
  description: 'Consider donating to the Ryan Meetup in order to fund our events.',
  keywords: ['donate to the ryan meetup', 'ryan meetup venmo', 'ryan meetup zelle', 'ryan meetup money', 'contribute to ryan meetup'],
  openGraph: {
    url: 'https://ryanmeetup.com/donate',
    title: 'Ryan Meetup - Donate',
    description: 'Consider donating to the Ryan Meetup in order to fund our events.',
    siteName: 'Ryan Meetup',
    images: '/donate.png',
    locale: 'en_US',
    type: 'website',
  },
};

const DonatePage = () => {
  return (
    <Layout>
      <Heading className='mb-6'>Donate to the Ryan Meetup</Heading>
    </Layout>
  );
};

export default DonatePage;