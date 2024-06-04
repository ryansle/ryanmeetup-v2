// Components
import { Layout } from '@/components/navigation';
import { Divider } from '@/components/global';
import { PosterContainer } from '@/components/posters';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Posters',
  description: 'Download our official Ryan Meetup posters here and help bring the Ryan Meetup to your city!',
  openGraph: {
    url: 'https://ryanmeetup.com/posters',
    title: 'Ryan Meetup - Posters',
    description: 'Download our official Ryan Meetup posters here and help bring the Ryan Meetup to your city!',
    siteName: 'Ryan Meetup',
    images: ['/ryankickoff.png'],
    locale: 'en_US',
    type: 'website',
  },
};

const posters = [
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'Variant Poster', src: '/posters/isyournameryan.jpg' },
  { title: 'Calling all Ryans Poster', src: '/posters/CallingAllRyans.png' },
  { title: 'Uncle Sam Poster', src: '/posters/unclesam.png' },
  { title: 'Know a Ryan Poster', src: '/posters/knowaryan.png' },
];

const eventPosters = [
  { title: 'Ryami Vice', src: '/posters/vice.png' },
  { title: 'St. Ryan\'s Day', src: '/posters/stryans.jpg' },
  { title: 'Ryan Rodeo', src: '/posters/rodeoposter2.png' },
  { title: 'Ryan Rodeo', src: '/posters/ryanrodeo.png' },
  { title: 'Rytoberfest', src: '/posters/rytoberfest.PNG' },
  { title: 'Ryan Rave', src: '/posters/raveposter-sponsored.png' },
  { title: 'Ryan Rave', src: '/posters/ryanrave.png' },
  { title: 'Ryan Retreat', src: '/posters/ryanretreat.png' },
];

const PostersPage = () => {
  return (
    <Layout>
      <PosterContainer
        title='Flyers'
        posters={posters}
        download
        description='Interested in hanging up Ryan Meetup posters in your city? Download our posters here!'
      />

      <Divider margins='xl' />

      <PosterContainer
        title='Event Flyers'
        posters={eventPosters}
        description='Posters from previous events.'
      />
    </Layout>
  );
};

export default PostersPage;