// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import { Article, FeaturedIn } from '@/components/press';

// Types
import type { Article as RyanArticle, Outlet } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchArticles, fetchOutlets } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Press',
  description: 'Read all about the Ryan Meetup in the news.',
  keywords: ['ryans only', 'ryans only at the ryan meetup', 'and definitely no bryans', 'nyc irish bar plays host to viral ryan meetup', 'ryan meetup in the news', 'ryan meetup news', 'ryan meetup articles', 'ryan meetup press', 'first rule of ryan club, no bryans', 'no bryans allowed', 'ryan maguire', 'hosts bash for people named ryan', 'to get into this party', 'need the right name', 'its ryan', 'alyson krueger', 'will pavia', 'kerry oshea', 'ryan wilde', 'ryan andrew wilde', 'the takeaway', 'the times', 'irish central', 'the times', 'downtown new york alliance', 'new york times', 'miami new times', 'houston chronicle', 'los angeles times'],
  openGraph: {
    url: 'https://ryanmeetup.com/press',
    title: 'Ryan Meetup - Press',
    description: 'Read all about the Ryan Meetup in the news.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/meta/press.png',
        width: 3360,
        height: 1854,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const PressPage = async () => {
  const articles = await fetchArticles();
  const outlets = await fetchOutlets();

  return (
    <Layout fullscreen>
      <div className='pt-8 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
        <Heading className='mb-4 text-center title text-4xl md:text-7xl' size='h1'>RYAN MEETUP</Heading>

        <Text className='secondary text-center italic text-xl'>
          has been proudly featured in:
        </Text>
      </div>

      <FeaturedIn outlets={outlets as Outlet[]} />

      <div className='px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
        <Divider />

        <div className='flex flex-col gap-y-8 mb-8 xl:gap-y-4'>
          {articles?.map((article, index) => (
            <div key={index}>
              <Article article={article as unknown as RyanArticle} />

              {index !== articles.length && <Divider className='block xl:hidden' />}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PressPage;

export const revalidate = 300;