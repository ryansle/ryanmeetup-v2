// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ChapterInfo } from '@/components/chapters';
import { EventsContainer } from '@/components/events';
import { FaCity as City } from 'react-icons/fa';
import { MdGroup as Group } from 'react-icons/md';
import NextLink from 'next/link';

// Types
import type { RyanEvent, ChapterLead, ContentfulImage } from '@/lib/types';

// Utilities
import { fetchEvents, fetchSingleChapter } from '@/actions/fetchContent';
import { convertSlug } from '@/utils/convert';

const ChapterPage = async ({ params }: { params: { slug: string } }) => {
  const content = await fetchSingleChapter(params.slug);
  const events = await fetchEvents();

  // @ts-ignore
  const leaders = content.leaders?.map((entry: { fields: any; }) => entry.fields) ?? [];
  const city = content.city;
  const whatsapp = content.whatsAppLink;
  const instagram = content.instagram;
  const avatar = content.avatar;

  return (
    <Layout>
      <div className='flex flex-wrap'>
        {/* LEFT PANEL (Sticky) */}
        <div className='w-full md:w-1/2 xl:w-1/3 p-4'>
          <div className='sticky top-28'>
            <ChapterInfo
              leaders={leaders as ChapterLead[]}
              whatsapp={whatsapp as string}
              instagram={instagram as string}
              avatar={avatar as ContentfulImage}
              city={city as string}
            />
          </div>
        </div>

        {/* RIGHT PANEL (Scrollable) */}
        <div className='flex-1 p-4'>
          <div className='flex space-x-4 mb-2'>
            <NextLink href='/chapters' className='text-gray-400 flex items-center timing hover:scale-102'>
              <Group className='mr-2' /> <Text>Chapters</Text>
            </NextLink>

            <span className='text-gray-400'> / </span>

            <NextLink href='/chapters' className='flex items-center timing hover:scale-102'>
              <City className='mr-2' /> <Text color='white'>{city as string}</Text>
            </NextLink>
          </div>

          <div className='hidden xl:block'>
            <Heading className='mb-8' size='xl'>
              Ryan Meetup {city as string}
            </Heading>
          </div>

          <div className='block xl:hidden'>
            <Heading className='mb-8' size='lg'>
              {city as string} Events
            </Heading>
          </div>

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