// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Note } from '@/components/global';
import { MediaTile } from '@/components/gallery';
import { FaQuestionCircle as Question } from 'react-icons/fa';
import NextLink from 'next/link';

// Types
import type { MediaEvent } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchMedia } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Gallery',
  description: 'View photos from previous Ryan Meetups.',
  keywords: ['ryan meetup', 'ryan meetup gallery', 'ryan meetup photos', 'ryan meetup media', 'pictures of ryan meetup', 'ryan photos', 'ryans'],
  openGraph: {
    url: 'https://ryanmeetup.com/gallery',
    title: 'Ryan Meetup - Gallery',
    description: 'View photos from previous Ryan Meetups.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/ryanroundup.png',
        width: 3284,
        height: 2189,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const GalleryPage = async () => {
  const media = await fetchMedia();

  const tiles = media.sort((a, b) => new Date(b.fields.eventDate as string).getTime() - new Date(a.fields.eventDate as string).getTime());

  return (
    <Layout>
      <Heading className='mb-6'>Ryan Media</Heading>

      <Text size='lg' className='mb-4'>
        Our gallery of Ryan media from previous events.
      </Text>

      <Note>
        <Text size='md' className='flex items-center'>
          <Question className='mr-4 fill-yellow-500' /> <span className='text-black dark:text-white'>Who is photographing all of these Ryan Meetups?</span>
        </Text>
        <Text size='xs'>
          Ryan Rose is the official photographer for the Ryan Meetup. You can book a gig with her{' '}
          <NextLink className='font-semibold text-blue-500 underline' href='https://www.justryanrose.com/contact'>here</NextLink>.
        </Text>
      </Note>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
        {tiles?.map((content, index) => (
          <MediaTile
            key={index}
            id={content.sys.id}
            data={content.fields as unknown as MediaEvent}
          />
        ))}
      </div>
    </Layout>
  );
};

export default GalleryPage;

export const revalidate = 30;