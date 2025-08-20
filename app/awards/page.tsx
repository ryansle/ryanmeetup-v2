// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import { FarthestRyan, Champion, Leaderboard } from '@/components/awards';
import { MdLeaderboard as Leader } from 'react-icons/md';
import { FaTrophy as Trophy, FaPlaneArrival as Plane } from 'react-icons/fa';
import { Blurb } from '@/components/events';

// Types
import type {
  TravelingRyan,
  ChampionRyan,
  RepeatRyan,
} from '@/lib/types';
import type { Metadata } from 'next';

// Utilities
import {
  fetchFarthestRyans,
  fetchChampionRyans,
  fetchRepeatRyans,
} from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Awards',
  description: 'The Hall of Ryans honors farthest traveling Ryans, Ryan Meetup champions, and more.',
  keywords: ['award winners', 'hall of ryans', 'farthest traveling ryans', 'who won at the ryan meetup', 'ryan meetup tournament', 'rytoberfest champion', 'little kings', 'little king of St. Ryans Day', 'mr ryami', 'ms. ryami'],
  openGraph: {
    url: 'https://ryanmeetup.com/awards',
    title: 'Ryan Meetup - Awards',
    description: 'The Hall of Ryans honors farthest traveling Ryans, Ryan Meetup champions, and more.',
    siteName: 'Ryan Meetup - Awards',
    images: [
      {
        url: 'https://ryanmeetup.com/trophy.png',
        width: 1000,
        height: 667,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const AwardsPage = async () => {
  const farthest = await fetchFarthestRyans();
  const champs = await fetchChampionRyans();
  const repeats = await fetchRepeatRyans();

  const anchorStyle = 'block text-sm text-blue-600';
  const iconStyle = 'w-5 h-5 fill-white dark:fill-black timing hover:scale-110'

  const anchors = [
    { 
      icon: <Plane className={iconStyle} />, 
      href: '#farthest',
      tooltip: 'Farthest Traveled', 
    },
    { 
      icon: <Trophy className={iconStyle} />, 
      href: '#champions',
      tooltip: 'Champions', 
    },
    { 
      icon: <Leader className={iconStyle} />, 
      href: '#leaderboard',
      tooltip: 'Leaderboard', 
    }
  ];

  return (
    <Layout>
      <div id='farthest' />
      <Blurb
        fullHeadline='Hall of Ryans'
        smallHeadline='Hall of Ryans'
      >
        <Text className='text-xl'>
          Honoring Ryan Meetup award winning Ryans and more.
        </Text>
      </Blurb>

      <div className='fixed bottom-3 right-3 z-50 lg:right-32 lg:bottom-8'>
        <div className='dark:bg-white border border-gray-700 bg-black shadow-lg rounded-lg p-2 space-y-4'>
          {anchors.map((anchor) => (
            <div key={anchor.href} className='relative group'>
              <a 
                href={anchor.href} 
                className={anchorStyle}
              >
                {anchor.icon}
              </a>
              <span className='absolute right-full mr-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-opacity mr-4'>
                {anchor.tooltip}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      <Heading className='mb-6 text-center text-4xl title'>Farthest Traveling Ryans</Heading>

      <div className='grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-3'>
        {farthest?.map((ryan, index) => (
          <FarthestRyan
            key={index}
            ryan={ryan as unknown as TravelingRyan}
          />
        ))}
      </div>

      <div id='champions' />

      <Divider margins='xl' />

      <div>
        <Heading className='mb-6 text-center text-4xl title'>Ryan Meetup Champions</Heading>
        <Text className='mb-10 text-center text-xl'>
          Ryans that overcame great obstacles to take home the championship titles.
        </Text>

        <div className='grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-3'>
          {champs?.map((ryan, index) => (
            <Champion
              key={index}
              ryan={ryan as unknown as ChampionRyan}
            />
          ))}
        </div>

        <div id='leaderboard' />
        <Divider margins='xl' />

        <Leaderboard ryans={repeats as RepeatRyan[]} />

      </div>
    </Layout>
  );
};

export default AwardsPage;

export const revalidate = 300;