// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { MediaTile } from '@/components/gallery';
import { FaQuestionCircle as Question } from 'react-icons/fa';
import NextLink from 'next/link';

// Types
import type { MediaEvent } from '@/lib/types';

// Utilities
import { fetchMedia } from '@/actions/fetchContent';

const GalleryPage = async () => {
  const media = await fetchMedia();

  return (
    <Layout>
      <Heading className='mb-6'>Ryan Media</Heading>

      <Text size='lg' className='mb-4'>
        Our gallery of Ryan media from previous events.
      </Text>

      <div className='mb-10 border-l pl-4 border-gray-700 border-l-4 space-y-4'>
        <Text size='md' className='flex items-center' color='white'>
          <Question className='mr-4 fill-yellow-500' /> Who is photographing all of these Ryan Meetups?
        </Text>
        <Text size='xs'>
          Ryan Rose is the official photographer for the Ryan Meetup. You can book a gig with her{' '}
          <NextLink className='font-semibold text-blue-500 hover:underline' href='https://www.justryanrose.com/contact'>here</NextLink>.
        </Text>
      </div>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
        {media?.map((content, index) => (
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