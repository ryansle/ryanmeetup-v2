// Components
import { Layout } from '@/components/navigation';
import { MediaContainer } from '@/components/gallery';

// Types
import type { MediaEvent } from '@/lib/types';

// Utilities
import { fetchSingleMediaEvent } from '@/actions/fetchContent';

const GalleryEventPage = async ({ params }: { params: { slug: string } }) => {
  const media = await fetchSingleMediaEvent(params.slug);

  return (
    <Layout>
      <MediaContainer media={media as unknown as MediaEvent} />
    </Layout>
  );
};

export default GalleryEventPage;
