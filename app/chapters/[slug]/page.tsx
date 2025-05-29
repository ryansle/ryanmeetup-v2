// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ChapterInfo } from '@/components/chapters';
import { EventsContainer } from '@/components/events';

// Types
import type { RyanEvent, ChapterLead } from '@/lib/types';

// Utilities
import { fetchEvents, fetchSingleChapter } from '@/actions/fetchContent';
import { convertSlug } from '@/utils/convert';

const ChapterPage = async ({ params }: { params: { slug: string } }) => {
  const content = await fetchSingleChapter(params.slug);
  const events = await fetchEvents();

  // @ts-ignore
  const leaders = content?.leaders?.map((entry: { fields: any; }) => entry.fields) ?? [];
  const city = content?.city;
  const whatsapp = content?.whatsAppLink;

  return (
    <Layout>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-6 xl:col-span-5'>
          <ChapterInfo
            leaders={leaders as ChapterLead[]}
            whatsapp={whatsapp as string}
          />
        </div>

        <div className='col-span-12 md:col-span-6 xl:col-span-7 px-2'>
          <Heading className='mb-8' size='xl'>
            Ryan Meetup {city as string}
          </Heading>

          <div className='space-y-4'>
            <EventsContainer 
              events={events as unknown as RyanEvent[]}
              eventType={convertSlug(params.slug)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChapterPage;

export const revalidate = 30;