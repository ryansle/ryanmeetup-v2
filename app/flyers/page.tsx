// Components
import { Layout } from '@/components/navigation';
import { Divider, Text } from '@/components/global';
import { PosterContainer } from '@/components/flyers';
import { Blurb } from '@/components/events';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Flyers',
  description: 'Download our official Ryan Meetup flyers here and help bring the Ryan Meetup to your city!',
  keywords: ['ryan meetup', 'ryan meetup posters', 'ryan meetup flyers', 'is your name ryan', 'wanna meet other ryans', 'join the ryan meetup', 'ryan meet up', 'first name must be ryan', 'no bryans allowed', 'tell them to join the ryan meetup', 'we want you to join the ryan meetup', 'wanna change your name to ryan', 'no brians allowed', 'do you know a ryan', 'meet other ryans', 'absolutely no bryans'],
  openGraph: {
    url: 'https://ryanmeetup.com/flyers',
    title: 'Ryan Meetup - Flyers',
    description: 'Download our official Ryan Meetup flyers here and help bring the Ryan Meetup to your city!',
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

const flyers = [
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'Variant Poster', src: '/posters/isyournameryan.jpg' },
  { title: 'Calling all Ryans Poster', src: '/posters/CallingAllRyans.png' },
  { title: 'Uncle Sam Poster', src: '/posters/unclesam.png' },
  { title: 'Know a Ryan Poster', src: '/posters/knowaryan.png' },
];

const eventFlyers = [
  { title: 'St. Ryan\'s Day II', src: '/posters/stryan2.png' },
  { title: 'Ryan\'s Game Show', src: '/posters/rgs.png' },
  { title: 'Last Ryan Standing', src: '/posters/lastryanstanding.png' },
  { title: 'Ryan Royale', src: '/posters/RyanRoyale.png' },
  { title: '150 Deadpools & Wolverine', src: '/posters/deadpool.jpeg' },
  { title: '150 Deadpools & Wolverine', src: '/posters/rysup.png' },
  { title: 'Ryami Vice', src: '/posters/vice.png' },
  { title: 'St. Ryan\'s Day', src: '/posters/stryans.jpg' },
  { title: 'Ryan Rodeo', src: '/posters/rodeoposter2.png' },
  { title: 'Ryan Rodeo', src: '/posters/ryanrodeo.png' },
  { title: 'Rytoberfest', src: '/posters/rytoberfest.PNG' },
  { title: 'Ryan Rave', src: '/posters/raveposter-sponsored.png' },
  { title: 'Ryan Rave', src: '/posters/ryanrave.png' },
  { title: 'Ryan Retreat', src: '/posters/ryanretreat.png' },
];

const FlyersPage = async () => {
  return (
    <Layout>
      <Blurb
        fullHeadline='Ryan Meetup Flyers'
        smallHeadline='Ryan Meetup Flyers'
      >
        <Text className='secondary text-xl mx-0 sm:mx-24 lg:mx-0'>
          Interested in hanging up Ryan Meetup flyers in your city? Download our flyers here!
        </Text>
      </Blurb>
      <PosterContainer
        title='Flyers'
        flyers={flyers}
        download
        description='Interested in hanging up Ryan Meetup flyers in your city? Download our flyers here!'
      />

      <Divider margins='xl' />

      <PosterContainer
        title='Event Flyers'
        flyers={eventFlyers}
        description='Posters from previous events.'
      />
    </Layout>
  );
};

export default FlyersPage;

export const revalidate = 300;