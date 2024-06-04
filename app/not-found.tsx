// Components
import { Layout } from '@/components/navigation';
import { PageNotFound } from '@/components/global';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Ryan Not Found',
  description: '404 - Ryan Not Found',
  openGraph: {
    url: 'https://ryanmeetup.com',
    title: '404 Ryan Not Found',
    description: '404 - Ryan Not Found',
    siteName: 'Ryan Meetup',
    images: '/ryanroundup.png',
    locale: 'en_US',
    type: 'website',
  },
};

const NotFoundPage = () => {
  return (
    <Layout>
      <PageNotFound />
    </Layout>
  );
};

export default NotFoundPage;