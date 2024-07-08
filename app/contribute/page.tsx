// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, List, Divider } from '@/components/global';
import { FaHandshake as Handshake } from 'react-icons/fa';
import NextLink from 'next/link';
import { GoDotFill as Bullet } from 'react-icons/go';

// Types
import type { Metadata } from 'next';
import type { Ticket } from '@/lib/types';

// Utilities
import { fetchRyanTickets } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Contribute',
  description: 'Learn how you can contrivute to the Ryan Meetup.',
  keywords: ['donate to the ryan meetup', 'ryan meetup venmo', 'ryan meetup zelle', 'ryan meetup money', 'contribute to ryan meetup'],
  openGraph: {
    url: 'https://ryanmeetup.com/contribute',
    title: 'Ryan Meetup - Contribute',
    description: 'Learn how you can contrivute to the Ryan Meetup.',
    siteName: 'Ryan Meetup',
    images: '/donate.png',
    locale: 'en_US',
    type: 'website',
  },
};

const ContributePage = async () => {
  const tickets = await fetchRyanTickets();

  const waysToSupport = [
    {
      main: 'Invite more Ryans.',
      sub: 'The goal is gathering as many Ryans as possible, and this is the easiest way to expand our network.',
    },
    {
      main: 'Hang up posters.',
      sub: 'This is how it all started for us, and it’s an effective way to reach Ryans in the wild.',
    },
    {
      main: 'Share your skills.',
      sub: 'Combining all of our capabilities will make us a well-rounded, well-oiled machine.',
    },
    {
      main: 'Buy our merchandise.',
      sub: 'Become a walking advertisement for the Ryan movement. And rest assured, all of our designs were created by fellow Ryans.',
    },
  ];

  const composed = [
    { main: 'A photographer/videographer.' },
    { main: 'A senior copywriter/creative director.' },
    { main: 'A software engineer.' }
  ];

  return (
    <Layout className='space-y-6' tickets={tickets as Ticket}>
      <Heading>Contribute to the Ryan Meetup</Heading>

      <Text>
        Ryan Meetup has attained non-profit status and is currently in the process of awaiting official recognition under section 501(c)(3) of the Internal Revenue Code.
      </Text>

      <Text>
        We have an army of Ryans at our disposal, so let&apos;s take advantage of it. The more Ryans who pitch in, the faster we&apos;ll grow.
      </Text>

      <Text>
        If you believe you have a relevant skill that can help to further expand the Ryan Meetup, please reach out to us on our <NextLink className='text-blue-500 underline font-semibold' href='/contact'>/contact</NextLink> page. Our small team of Ryans is currently composed of:
      </Text>

      <List
        icon={<Bullet className='fill-gray-600 dark:fill-white mt-1 mr-4 w-5 h-5 flex-shrink-0' />}
        content={composed}
      />

      <Divider />

      <div className='space-y-3'>
        <Heading size='md'>
          Ways to Contribute
        </Heading>
        <div className='col-span-12 space-y-4'>
          <List
            icon={<Handshake className='fill-gray-600 dark:fill-white mt-1 mr-4 w-5 h-5 flex-shrink-0' />}
            content={waysToSupport}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ContributePage;