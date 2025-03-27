// Components
import { Layout } from '@/components/navigation';
import { MediaContainer } from '@/components/gallery';

// Types
import type { MediaEvent } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchSingleMediaEvent } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Gallery',
  description: 'View photos from previous Ryan Meetups.',
  openGraph: {
    url: 'https://ryanmeetup.com/gallery',
    title: 'Ryan Meetup - Gallery',
    description: 'View photos from previous Ryan Meetups.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/group-photos/ryanroundup.png',
        width: 3284,
        height: 2189,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const GalleryEventPage = async ({ params }: { params: { slug: string } }) => {
  const media = await fetchSingleMediaEvent(params.slug);

  return (
    <Layout>
      <MediaContainer media={media as unknown as MediaEvent} />
    </Layout>
  );
};

export default GalleryEventPage;

export const revalidate = 30;