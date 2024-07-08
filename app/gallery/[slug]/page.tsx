// Components
import { Layout } from '@/components/navigation';
import { MediaContainer } from '@/components/gallery';

// Types
import type { MediaEvent, Ticket } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchSingleMediaEvent, fetchRyanTickets } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Gallery',
  description: 'View photos from previous Ryan Meetups.',
  openGraph: {
    url: 'https://ryanmeetup.com/gallery',
    title: 'Ryan Meetup - Gallery',
    description: 'View photos from previous Ryan Meetups.',
    siteName: 'Ryan Meetup',
    images: '/ryanroundup.png',
    locale: 'en_US',
    type: 'website',
  },
};

const GalleryEventPage = async ({ params }: { params: { slug: string } }) => {
  const media = await fetchSingleMediaEvent(params.slug);
  const tickets = await fetchRyanTickets();

  return (
    <Layout tickets={tickets as Ticket}>
      <MediaContainer media={media as unknown as MediaEvent} />
    </Layout>
  );
};

export default GalleryEventPage;

export const revalidate = 30;