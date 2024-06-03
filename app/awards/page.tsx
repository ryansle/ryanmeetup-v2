// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import { FarthestRyan, Champion, Leaderboard } from '@/components/awards';

// Types
import type { TravelingRyan, ChampionRyan, RepeatRyan } from '@/lib/types';

// Utilities
import { fetchFarthestRyans, fetchChampionRyans, fetchRepeatRyans } from '@/actions/fetchContent';

const AwardsPage = async () => {
  const farthest = await fetchFarthestRyans();
  const champs = await fetchChampionRyans();
  const repeats = await fetchRepeatRyans();

  return (
    <Layout>
      <Heading className='mb-6'>Hall of Ryans</Heading>
      <Text size='lg'>
        Honoring Ryan Meetup award winning Ryans and more.
      </Text>

      <Divider />

      <div className='grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-3'>
        {farthest?.map((ryan, index) => (
          <FarthestRyan
            key={index}
            ryan={ryan as unknown as TravelingRyan}
          />
        ))}
      </div>

      <Divider margins='xl' />

      <div>
        <Heading size='md' className='mb-4 text-center xl:text-left'>Ryan Meetup Champions</Heading>
        <Text size='lg' className='mb-10 text-center xl:text-left'>
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

        <Divider margins='xl' />

        <Leaderboard ryans={repeats as RepeatRyan[]} />
      </div>
    </Layout>
  );
};

export default AwardsPage;