// Components
import { Layout } from '@/components/navigation';
import { Heading, Divider, Text } from '@/components/global';
import { FAQ } from '@/components/home';
import { ChapterTile } from '@/components/chapters';

// Types
import type { FrequentlyAskedQuestion, RyanChapter } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchChapters, fetchFAQs } from '@/actions/fetchContent';


export const metadata: Metadata = {
  title: 'Ryan Meetup - Chapters',
  description: 'Introducing local chapters of Ryan Meetup - a new way to keep connected with your local Ryans, and continue building that sense of community even closer to home.',
  keywords: ['ryan meetup chapters', 'local ryan meetup', 'ryan meetup near me', 'where is the next ryan meetup', 'start your own ryan meetup', 'ryan meetup event', 'host a ryan meetup'],
  openGraph: {
    url: 'https://ryanmeetup.com/chapters',
    title: 'Ryan Meetup - Chapters',
    description: 'Introducing local chapters of Ryan Meetup - a new way to keep connected with your local Ryans, and continue building that sense of community even closer to home.',
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

const ChaptersPage = async () => {
  const faqs = await fetchFAQs();
  const chapters = await fetchChapters();

  // @ts-ignore - all chapter FAQs will contain a load order
  const chapterFaqs = faqs.filter((faq) => faq.type === 'chapter').sort((a, b) => a.loadOrder - b.loadOrder);

  return (
    <Layout className='space-y-6'>
      <Heading className='text-center' size='xl'>
        Ryan Meetup Chapters
      </Heading>

      <Text className='text-center xl:mx-40'>
        Introducing local chapters of Ryan Meetup - a new way to keep connected with your local Ryans, and continue building that sense of community even closer to home.
      </Text>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
        {chapters?.map((chapter, index) => (
          <ChapterTile
            key={index}
            chapter={chapter as unknown as RyanChapter}
          />
        ))}
      </div>

      <Divider />

      <FAQ
        showTitle
        data={chapterFaqs as FrequentlyAskedQuestion[]}
      />
    </Layout>
  );
};

export default ChaptersPage;
