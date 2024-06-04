// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, List } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';
import QRCode from 'react-qr-code';

// Types
import type { Metadata } from 'next';

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

const ContributePage = () => {
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
    {
      main: 'Consider Venmoing us.',
      sub: 'All donations go towards setting up future Ryan Meetup events (ie: renting out spaces, buying name tags, trophies, decorations, etc, as well as tightening up security against potential Bryan intruders at our events).'
    }
  ];

  return (
    <Layout className='space-y-6'>
      <Heading>Contribute to the Ryan Meetup</Heading>

      <Text>
        Ryan Meetup has attained non-profit status and is currently in the process of awaiting official recognition under section 501(c)(3) of the Internal Revenue Code.
      </Text>

      <Text>
        We have an army of Ryans at our disposal, so let&apos;s take advantage of it. The more Ryans who pitch in, the faster we&apos;ll grow.
      </Text>

      <div className='space-y-3'>
        <Heading size='md'>
          Ways to Contribute
        </Heading>
        <div className='grid grid-cols-12 flex items-center'>
          <div className='col-span-12 space-y-4 xl:col-span-9'>
            <List content={waysToSupport} />
          </div>
          <div className='col-span-0 xl:col-span-1' />
          <div className='col-span-12 flex flex-col items-center mt-10 xl:mt-0 xl:col-span-2'>
            <QRCode
              value='https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1'
              size={200}
            />
            <div className='relative w-28 h-14'>
              <NextImage
                src='/venmo-logo.png'
                fill
                alt='Venmo Logo'
                style={{ objectFit: 'contain' }}
              />
            </div>
            <NextLink
              href='https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1'
              className='font-bold text-blue-500 hover:underline -mt-2'
            >
              @RyanMeetup
            </NextLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContributePage;