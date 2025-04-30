// Components
import { Layout } from '@/components/navigation';
import { Calendar } from '@/components/chapters';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Calendar',
  description: 'Check out the official calendar of Ryan Meetups around the world.',
  keywords: ['ryan meetup near me', 'ryan meetup calendar', 'when is the next ryan meetup', 'ryan meetup local chapters'],
  openGraph: {
    url: 'https://ryanmeetup.com/calendar',
    title: 'Ryan Meetup - Calendar',
    description: 'Check out the official calendar of Ryan Meetups around the world.',
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

const CalendarPage = async () => {
  return (
    <Layout fullscreen>
      <Calendar />
    </Layout>
  );
};

export default CalendarPage;