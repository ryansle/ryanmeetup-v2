// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import QRCode from 'react-qr-code';
import NextLink from 'next/link';
import NextImage from 'next/image';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate to the Ryan Meetup',
  description: 'Donate to the Ryan Meetup to help keep events funded.',
  openGraph: {
    url: 'https://ryanmeetup.com/donate',
    title: 'Donate to the Ryan Meetup',
    description: 'Donate to the Ryan Meetup to help keep events funded.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/donate.webp',
        width: 1000,
        height: 714,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const DonatePage = async () => {
  const labelStyle = 'font-bold text-xl text-blue-500 hover:underline -mt-2';
  const cardStyle = 'flex flex-col items-center justify-center col-span-4 border p-4 rounded-lg border-gray-700 timing shadow-lg hover:scale-102 lg:col-span-2 lg:hover:scale-105';

  return (
    <Layout className='text-center space-y-6'>
      <Heading>Donate to the Ryan Meetup</Heading>
      <Text className='px-0 lg:px-32'>
        All donations go towards setting up future Ryan Meetup events (ie: renting out spaces, buying name tags, trophies, decorations, etc, as well as tightening up security against potential Bryan intruders at our events).
      </Text>
      <Text className='px-0 lg:px-32'>
        Currently, our non-profit is sustained entirely by ticket and merchandise sales as well as donations.
      </Text>
      <Text>
        There are two ways to donate to the Ryan Meetup:
      </Text>

      <Divider />

      <div className='grid grid-cols-4 gap-x-20 gap-y-4 px-0 lg:px-40'>
        <div className={cardStyle}>
          <NextImage
            src='/zelle.png'
            width={250}
            height={250}
            alt='Zelle'
          />
          <div className='relative w-40 h-24'>
            <NextImage
              src='/logos/zellelogo.png'
              fill
              alt='Zelle Logo'
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className={labelStyle}>
            theryanmeetup@gmail.com
          </p>
        </div>
        <div className={cardStyle}>
          <QRCode
            value='https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1'
            size={250}
          />
          <div className='relative w-40 h-24'>
            <NextImage
              src='/logos/venmo-logo.png'
              fill
              alt='Venmo Logo'
              style={{ objectFit: 'contain' }}
            />
          </div>
          <NextLink
            href='https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1'
            className={labelStyle}
          >
            @RyanMeetup
          </NextLink>
        </div>
      </div>
    </Layout>
  );
};

export default DonatePage;

export const revalidate = 30;