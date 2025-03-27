// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import NextImage from 'next/image';

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

const AboutPage = () => {
  return (
    <Layout>
      <div className='xl:px-20 space-y-6'>
        <div className='relative mb-10 w-full h-48 md:h-80 lg:h-72 xl:h-[440px]'>
          <NextImage
            className='rounded-xl shadow-xl mt-4 lg:object-center xl:object-top'
            fill
            src='/ryankickoff.png'
            objectFit='cover'
            alt='The first Ryan Meetup'
          />
        </div>
        <Heading>About Us</Heading>

        <Text>
          In February 2023, Ryan decided she wanted to meet more people named Ryan. So she posted a handful of flyers in her Brooklyn neighborhood with a QR code that implored Ryans to RSVP for a &quot;Ryan Meetup.&quot; Only two other Ryans attended.
        </Text>

        <Text>
          That night, after checking each other&apos;s IDs, Ryan, Ryan, and Ryan devised a plan to reach more Ryans. And set an ambitious goal for themselves: to break the world record for largest same first name gathering.
        </Text>

        <Text>
          So the Ryans got to work, covering NYC in flyers to advertise their next event at Ryan Maguire&apos;s pub—but this time, over 100 Ryans showed up. Including some Ryans from major news sources, who helped spread the word to even more Ryans.
        </Text>

        <Text>
          Soon, Ryans everywhere wanted to join in on the fun. So we took it on tour, hosting Ryan Meetups in Los Angeles, Austin, Chicago, Miami, and Toronto. All while building a community with thousands of Ryans, who each contribute in their own unique way. And that&apos;s exactly what it will take to put our name in the record books.
        </Text>

        <Text>
          When your name is called, be ready Ryan. We&apos;re going to need you.
        </Text>

        <Divider />

        <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
          {gallery.map((photo, index) => (
            <div className='transition ease-in-out duration-200 hover:scale-102' key={index}>
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
      </div>
    </Layout>
  );
};

export default AboutPage;