// Components
import { Layout } from '@/components/navigation';
import { Divider, Text } from '@/components/global';
import { Blurb, EventsContainer } from '@/components/events';
import { FaRegNewspaper as News } from 'react-icons/fa';

// Types
import type { RyanEvent } from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import { fetchEvents } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Events',
  description: 'Keep up to date with Ryan Meetups near you!',
  keywords: ['when is the next ryan meetup?', 'ryan meetup', 'ryan meetup nyc', 'ryan meetup new york', 'ryan meetup new york city', 'ryan meetup near me', 'ryan meetup los angeles', 'ryan rendezvous', 'ryan roundup', 'ryan kickoff', 'ryan rodeo', 'ryan roundtable', 'ryan roadtrip', 'ryan rally', 'ryan rave', 'ryan run', 'ryan new york city', 'ryan meet up', 'ryan meetup new york city', 'ryan reunion', 'ryan syndicate', 'ryan retreat', 'ryan relay', 'st ryans day', 'ryami vice', '150 deadpools and wolverine', 'ryans game show', 'rytoberfest', 'ryancon', 'last ryan standing', 'ryan royale', 'ryan relay', 'society of ryans', 'ryan red carpet'],
  openGraph: {
    url: 'https://ryanmeetup.com/events',
    title: 'Ryan Meetup - Events',
    description: 'Keep up to date with Ryan Meetups near you!',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/meta/events.png',
        width: 3360,
        height: 1854,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const EventsPage = async () => {
  const events = await fetchEvents();

  return (
    <Layout>
      <Blurb 
        fullHeadline='Join the Ryan Meetup'
        smallHeadline='Our Events'
        href='/newsletter'
        icon={<News />}
        hrefText='Get notified of future events'
      >
        <Text className='secondary text-xl mb-6 xl:mx-32'>
          <span className='hidden md:inline-block'>
            It&apos;s never too late to join the Ryan Meetup.
          </span>
          <span>
            {' '}Sign up for our newsletter below to stay up-to-date with our events.{' '}
          </span>

          <span className='hidden md:inline-block'>
            And remember - No Bryans allowed.
          </span>
        </Text>
      </Blurb>

      <Divider />

      <EventsContainer events={events as unknown as RyanEvent[]} />
    </Layout>
  );
};

export default EventsPage;

export const revalidate = 300;