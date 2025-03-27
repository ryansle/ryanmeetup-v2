// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ChapterInfo } from '@/components/chapters';

// Utilities
import { fetchSingleChapter } from '@/actions/fetchContent';
import { ChapterLead } from '@/lib/types';

const ChapterPage = async ({ params }: { params: { slug: string } }) => {
  const content = await fetchSingleChapter(params.slug);

  // @ts-ignore
  const leaders = content?.leaders?.map((entry: { fields: any; }) => entry.fields) ?? [];
  const city = content?.city;
  const state = content?.state;
  const whatsapp = content?.whatsapp;

  return (
    <Layout>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-6 xl:col-span-5'>
          <ChapterInfo
            leaders={leaders as ChapterLead[]}
            whatsapp={whatsapp as string}
          />
        </div>

        <div className='col-span-6 xl:col-span-7 px-8'>
          <Heading className='text-center mb-8'>
            Ryan Meetup {city as string}
          </Heading>

          <div className='space-y-4'>
            <Text>
              This page is incomplete. It will be updated at a later date as chapters continue to expand.
            </Text>

            <Text>Pretend there are some event photos here.</Text>

            <Text>
              Pretend there is also an events calendar here.
            </Text>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChapterPage;

export const revalidate = 30;