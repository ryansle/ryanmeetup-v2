// Components
import { Layout } from '@/components/navigation';
import { Heading, Text, Divider } from '@/components/global';
import { Campaign } from '@/components/charity';

// Types
import type { RyanInNeed } from '@/lib/types';
import type { Metadata } from 'next';
import { fetchRyansInNeed } from '@/actions/fetchContent';

export const metadata: Metadata = {
  title: 'Ryan Meetup - Charity',
  description: 'Help support Ryans in need around the world.',
  keywords: ['ryan meetup charity', 'support ryans around the world', 'donate to ryans in need', 'support ryan', 'ryan needs help', 'go fund ryan'],
  openGraph: {
    url: 'https://ryanmeetup.com/charity',
    title: 'Ryan Meetup - Charity',
    description: 'Help support Ryans in need around the world.',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: 'https://ryanmeetup.com/ryanwatsi-min.png',
        width: 6000,
        height: 4000,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const CharityPage = async () => {
  const ryansInNeed = await fetchRyansInNeed();

  const activeCampaigns = ryansInNeed.filter((campaign) => !campaign.completed);
  const fundedCampaigns = ryansInNeed.filter((campaign) => campaign.completed);

  return (
    <Layout className='space-y-6'>
      <Heading>Ryans In Need</Heading>

      <Text>
        All fundraisers on this page have been properly vetted by Ryan.
      </Text>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-3'>
        {activeCampaigns.map((campaign, index) => (
          <Campaign
            key={index}
            ryanInNeed={campaign as RyanInNeed}
          />
        ))}
      </div>

      <Divider />

      <Heading>
        Completed Fundraisers
      </Heading>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-3'>
        {fundedCampaigns.map((campaign, index) => (
          <Campaign
            key={index}
            ryanInNeed={campaign as RyanInNeed}
          />
        ))}
      </div>

    </Layout>
  );
};

export default CharityPage;

export const revalidate = 30;