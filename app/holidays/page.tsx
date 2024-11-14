// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, List, Divider } from '@/components/global';
import { JoinButton } from '@/components/holidays';
import { FaGift as Gift } from 'react-icons/fa';
import NextImage from 'next/image';

// Types
import type { Metadata } from 'next';

// Utilities
import { fetchHolidayFAQs } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Secret Ryan Exchange',
  description: 'Sec-ry-t Ryan Gift Exchange for the 2024 Holiday Season',
  keywords: ['ryan meetup', 'ryan meetup', 'secret ryan', 'ryan meetup christmas 2024', 'ryan christmas', 'secret ryan gifts', 'secret ryan exchange'],
  openGraph: {
    url: 'https://ryanmeetup.com/holidays',
    title: 'Ryan Meetup - Secret Ryan Exchange',
    description: 'Sec-ry-t Ryan Gift Exchange for the 2024 Holiday Season',
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

const HolidayPage = async () => {
  const faqs = await fetchHolidayFAQs();

  const dates = [
    { main: 'November 15th: Registration opens for Secret Ryan; Ryans may start populating their wish lists for the exchange.' },
    { main: 'November 29th: Registration closes, and each participating Ryan will be assigned their Ryan to purchase a gift for.' },
    { main: 'November 29th - December 14th: Gifts should be purchased and sent out.' },
    { main: 'December 14th: Ryans should receive their gifts by then' },
    { main: 'December 18th: Submit gift opening videos to the Ryan Meetup team so we can put together a video summarizing the experience' }
  ];

  const photos = [
    '/ryanclaus.webp',
    '/claus.webp',
    '/donate.webp',
  ];

  return (
    <Layout>
      <div className='space-y-10 xl:px-20'>
        <div>
          <div className='space-y-2'>
            <Heading>Secret Ryan Gift Exchange</Heading>

            <Text>
              In place of an in-person event this holiday season, Ryan Meetup will be hosting an all-Ryan gift exchange through the Elfster app to bring our community closer together from afar.
            </Text>
          </div>

          <JoinButton />

          <div className='grid grid-cols-1 gap-x-4 mt-8 gap-y-4 md:grid-cols-2 lg:mt-0 xl:grid-cols-3'>
            {photos.map((photo, index) => (
              <div className='w-full lg:mt-8 max-h-[450px] aspect-w-3 aspect-h-2 overflow-hidden border rounded-lg shadow-xl dark:border-black' key={index}>
                <NextImage
                  src={photo}
                  fill
                  alt='Ryan Claus Photos, December 2023'
                  style={{ objectFit: 'cover' }}
                  sizes='(max-width: 640px) 100vw,
                   (max-width: 768px) 100vw,
                   (max-width: 1024px) 100vw,
                   (max-width: 1280px) 100vw,
                   (max-width: 1536px) 100vw'
                />
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className='space-y-2'>
          <Heading size='md'>
            How does it work?
          </Heading>

          <Text>
            Using the Elfster app, each Ryan will sign up and supply their name and shipping information to receive your gifts.
          </Text>

          <Text>
            Upon closing registrations on our end, each Ryan will be assigned another Ryan to purchase gifts for. Two Ryans will not necessarily be exchanging gifts with one another, as each assignment is completely random.
          </Text>

          <Text>
            Once assigned, you&apos;ll have access to your Ryan&apos;s wishlist for potential gifts they&apos;re interested in receiving. While you are not required to purchase directly from a wishlist, it simply exists to simplify the gift-giving process.
          </Text>

          <Text>
            Ryans will be given approximately two weeks to purchase their gifts and have them shipped out to their assigned Ryan in time for the holidays.
          </Text>
        </div>

        <div>
          <Heading size='md' className='mb-4'>
            Frequently Asked Questions
          </Heading>

          {faqs.map((item, index) => (
            <div key={index} className='mb-8'>
              <Heading size='sm' variant='normal' bold className='mb-2'>
                {item.question as unknown as string}
              </Heading>

              <Text>
                {item.answer as unknown as string}
              </Text>
            </div>
          ))}
        </div>

        <Divider />

        <div className='space-y-2'>
          <Heading size='md'>
            Timeline
          </Heading>

          <List
            icon={<Gift className='fill-gray-600 dark:fill-white mt-1 mr-4 w-5 h-5 flex-shrink-0' />}
            content={dates}
          />
        </div>

        <JoinButton />
      </div>
    </Layout>
  );
};

export default HolidayPage;

export const revalidate = 30;