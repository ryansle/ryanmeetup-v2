// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, List, Divider } from '@/components/global';
import { FaHandshake as Handshake } from 'react-icons/fa';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Types
import type { Metadata } from 'next';

// Utilities
import { gallery } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ryan Meetup - About',
  description: 'Learn how the Ryan Meetup got its start.',
  keywords: ['ryan meetup', 'ryan meetup', 'who started the ryan meetup', 'about ryan meetup'],
  openGraph: {
    url: 'https://ryanmeetup.com/about',
    title: 'Ryan Meetup - About',
    description: 'Learn how the Ryan Meetup got its start.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/ryankickoff.png',
        width: 1600,
        height: 800,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const About = () => {
  const topics = [
    { main: 'What kind of Ryans were they?' },
    { main: 'How did each of them end up here?' },
    { main: 'Should they establish a social media presence?' },
    { main: 'And most importantly, what would come next?' }
  ];

  return (
    <Layout className='space-y-6'>
      <Heading>About Us</Heading>

      <div className='grid grid-cols-12 xl:gap-10'>
        <div className='col-span-12 xl:col-span-6 space-y-6'>
          <Text>
            What began as a simple idea took root when Ryan set out to find other Ryans in her Brooklyn neighborhood. She posted flyers throughout the area, inviting everyone named &quot;Ryan&quot; to join a new community—the Ryan Meetup.
          </Text>

          <Text>
            After two weeks of spreading the word, five Ryans had RSVP&apos;d to the inaugural event, dubbed the &quot;Ryan Kickoff&quot; in Brooklyn, NY. With modest attendance expected, Ryan and a fellow Ryan debated whether to proceed. In the end, they decided that even a small gathering could mark the beginning of something special.
          </Text>
        </div>

        <div className='col-span-12 xl:col-span-6 relative mb-4 w-full h-32 h-32 md:h-64 xl:w-full'>
          <NextImage
            className='rounded-xl shadow-xl mt-4'
            fill
            src='/ryankickoff.png'
            objectFit='cover'
            alt='The first Ryan Meetup'
          />
        </div>
      </div>

      <Text>
        On the morning of the event, Ryan also RSVP&apos;d to confirm his attendance. That evening, the three pioneering Ryans gathered at a local Brooklyn bar for their first meeting. Amidst introductions and laughs, they discussed the pressing topics at hand:
      </Text>

      <List
        icon={<Handshake className='fill-gray-600 dark:fill-white mt-1 mr-4 w-5 h-5 flex-shrink-0' />}
        content={topics}
      />

      <Text>
        It was during this inaugural event that they collectively decided to keep the momentum going. The next meetup would be titled the &quot;Ryan Roundup&quot; and was set for a new venue in Manhattan, appropriately held at Ryan Maguire&apos;s Ale House.
      </Text>

      <Text>
        Determined to broaden their reach, each Ryan began promoting the Roundup with new flyers posted around their own parts of the city. Soon, &quot;Ryan Meetup&quot; notices started popping up in neighborhoods across New York—from Bushwick and Citi Field to Hudson Yards, Hell&apos;s Kitchen, and Flatiron. Eventually, the movement expanded across the country, with flyers appearing in Austin, TX, Myrtle Beach, SC, and Washington, DC.
      </Text>

      <Text>
        The Roundup quickly gained traction online, catching the eye of <NextLink className='text-blue-500 hover:underline' href='https://www.instagram.com/whatisnewyork/?hl=en'>@WhatIsNewYork on Instagram</NextLink>, making it onto LIVE with Kelly and Ryan, and even reaching the front page of Reddit. By the time the event rolled around, over 100 Ryans attended, attracting attention from major outlets like the New York Times, NPR, and beyond.
      </Text>

      <Text>
        With this growing recognition, it was clear: the Ryan Meetup was only beginning.
      </Text>

      <Divider />

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
        {gallery.map((photo) => (
          <div className='transition ease-in-out duration-200 hover:scale-102'>
            <div className='w-full max-h-[450px] aspect-w-3 aspect-h-2 overflow-hidden border rounded-lg shadow-xl dark:border-black'>
              <NextImage
                src={photo.imageUrl}
                fill
                alt={photo.title}
                style={{ objectFit: 'cover' }}
                sizes='(max-width: 640px) 100vw,
                   (max-width: 768px) 100vw,
                   (max-width: 1024px) 100vw,
                   (max-width: 1280px) 100vw,
                   (max-width: 1536px) 100vw'
              />
            </div>

            <Text className='text-center mt-2'>
              {photo.title}
            </Text>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default About;