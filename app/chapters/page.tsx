// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { FAQ } from '@/components/home';

// Types
import type { FrequentlyAskedQuestion } from '@/lib/types';

// Utilities
import { fetchFAQs } from '@/actions/fetchContent';

const ChaptersPage = async () => {
  const faqs = await fetchFAQs();

  const chapterFaqs = faqs.filter((faq) => faq.type === 'chapter');

  return (
    <Layout className='space-y-6'>
      <Heading className='text-center' size='xl'>Ryan Meetup Chapters</Heading>

      <FAQ data={chapterFaqs as FrequentlyAskedQuestion[]} />

      <Heading className='text-center'>
        Our Chapters
      </Heading>
    </Layout>
  );
};

export default ChaptersPage;
