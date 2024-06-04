// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import { Article } from '@/components/press';

// Types
import type { Article as RyanArticle } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchArticles } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Press',
  description: 'Read all about the Ryan Meetup in the news.',
  keywords: ['ryans only', 'ryans only at the ryan meetup', 'and definitely no bryans', 'nyc irish bar plays host to viral ryan meetup', 'ryan meetup in the news', 'ryan meetup news', 'ryan meetup articles', 'ryan meetup press', 'first rule of ryan club, no bryans', 'no bryans allowed', 'ryan maguire', 'hosts bash for people named ryan', 'to get into this party', 'need the right name', 'its ryan', 'alyson krueger', 'will pavia', 'kerry oshea', 'ryan wilde', 'ryan andrew wilde', 'the takeaway', 'the times', 'irish central', 'the times', 'downtown new york alliance', 'new york times', 'miami new times', 'houston chronicle', 'los angeles times'],
  openGraph: {
    url: 'https://ryanmeetup.com/press',
    title: 'Ryan Meetup - Gallery',
    description: 'Read all about the Ryan Meetup in the news.',
    siteName: 'Ryan Meetup',
    images: '/ryanroundup.png',
    locale: 'en_US',
    type: 'website',
  },
};

const PressPage = async () => {
  const articles = await fetchArticles();

  return (
    <Layout>
      <Heading className='mb-6'>Ryan Meetup in the Media</Heading>

      <Text size='lg'>
        Keep up to date with the latest Ryan Meetup news in the media!
      </Text>

      <Divider />

      <div className='flex flex-col gap-y-8 xl:gap-y-4'>
        {articles?.map((article, index) => (
          <div key={index}>
            <Article article={article as unknown as RyanArticle} />

            {index !== articles.length && <Divider className='block xl:hidden' />}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default PressPage;