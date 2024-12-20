// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ContactForm } from '@/components/contact';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Contact Us',
  description: 'Get in contact with one of the Ryans here.',
  keywords: ['contact ryan', 'contact ryan meetup', 'ryan meetup email address', 'official ryan business', 'big and important ryan topics', 'ryan', 'ryan meetup'],
  openGraph: {
    url: 'https://ryanmeetup.com/contact',
    title: 'Ryan Meetup - Contact Us',
    description: 'Get in contact with one of the Ryans here.',
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

const ContactPage = async () => {
  return (
    <Layout className='space-y-6'>
      <Heading>Contact the Ryans</Heading>

      <Text size='lg'>
        One of our Ryans will get back to you as soon as we can.
      </Text>

      <ContactForm />
    </Layout>
  );
};

export default ContactPage;

export const revalidate = 30;