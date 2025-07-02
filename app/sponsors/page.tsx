// Components
import { Layout } from '@/components/navigation';
import { Text, Divider } from '@/components/global';
import { Blurb } from '@/components/events';
import { BiMailSend as Send } from 'react-icons/bi';
import { SponsorSection } from '@/components/sponsors';

// Types
import { Sponsor } from '@/lib/types';
import { Metadata } from 'next';

// Utilities
import { fetchSponsors } from '@/actions/fetchContent';

export async function generateMetadata(): Promise<Metadata> {
  const sponsors = await fetchSponsors();

  return {
    title: `Ryan Meetup - Sponsors`,
    description: 'Ryan Meetups wouldn\'t be possible without our amazing sponsors. Explore the organizations supporting our events and learn how your brand can join the movement.',
    keywords: ['ryan meetup',
      ...sponsors.map(sponsor => (sponsor.name as string)?.toLowerCase() || '')
    ],
    openGraph: {
      url: 'https://ryanmeetup.com/sponsors',
      title: `Ryan Meetup - Sponsors`,
    description: 'Ryan Meetups wouldn\'t be possible without our amazing sponsors. Explore the organizations supporting our events and learn how your brand can join the movement.',
      siteName: 'Ryan Meetup',
      images: [
        {
          url: 'https://ryanmeetup.com/meta/sponsors.png',
          width: 2056,
          height: 1164,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

const SponsorsPage = async () => {
  const sponsors = await fetchSponsors();

  // const goldSponsors = sponsors.filter((sponsor) => sponsor.eventsSponsored as number >= 3);
  // const silverSponsors = sponsors.filter((sponsor) => sponsor.eventsSponsored as number === 2);
  // const bronzeSponsors = sponsors.filter((sponsor) => sponsor.eventsSponsored as number === 1);

  return (
    <Layout>
      <Blurb
        fullHeadline='Ryan Meetup Sponsors'
        smallHeadline='Sponsors'
        href='/contact'
        icon={<Send />}
        hrefText='Partner With Us'
      >
        <Text className='mb-6 text-xl xl:mx-48'>
          Thanks to our incredible sponsors, Ryan Meetup has grown across the country. Want to help power the next one? Reach out below — we’d love to partner with you.
        </Text>
      </Blurb>

      <Divider />

      <SponsorSection 
        tier='All'
        sponsors={sponsors as Sponsor[]} 
      />

      {/* <SponsorSection 
        tier='Gold'
        sponsors={goldSponsors as Sponsor[]} 
      />

      <Divider />

      <SponsorSection 
        tier='Silver'
        sponsors={silverSponsors as Sponsor[]} 
      />

      <Divider />

      <SponsorSection 
        tier='Bronze'
        sponsors={bronzeSponsors as Sponsor[]} 
      /> */}

      <div className='mb-20' />
    </Layout>
  );
};

export default SponsorsPage;

export const revalidate = 30;