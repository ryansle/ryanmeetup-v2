// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Meetup - About',
  description: 'Learn how the Ryan Meetup got its start.',
  keywords: ['ryan meetup', 'ryan meetup', 'who started the ryan meetup', 'about ryan meetup'],
  openGraph: {
    url: 'https://ryanmeetup.com/about',
    title: 'Ryan Meetup - About',
    description: 'Learn how the Ryan Meetup got its start.',
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

const About = () => {
  return (
    <Layout>
      <Heading className='mb-6'>About Ryan Meetup</Heading>
    </Layout>
  );
};

export default About;