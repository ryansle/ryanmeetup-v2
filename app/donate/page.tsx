// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Donate',
  description: 'Consider donating to the Ryan Meetup in order to fund our events.',
  openGraph: {
    url: 'https://ryanmeetup.com/donate',
    title: 'Ryan Meetup - Donate',
    description: 'Consider donating to the Ryan Meetup in order to fund our events.',
    siteName: 'Ryan Meetup',
    images: ['/donate.webp'],
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