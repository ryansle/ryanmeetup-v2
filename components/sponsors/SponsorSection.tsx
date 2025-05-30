'use client';

// Components
import { Sponsor } from '@/components/sponsors';
import { Heading, Text } from '@/components/global';

// Types
import type { Sponsor as SponsorType } from '@/lib/types';

type SponsorSectionProps = {
  sponsors: SponsorType[];
  tier: string;
};

const SponsorSection = (props: SponsorSectionProps) => {
  const { sponsors, tier } = props;

  return (
    <section className='space-y-8'>
      <Heading className='text-center'>
        {tier} Sponsors
      </Heading>

      <Text className='text-center'>
        {tier === 'Gold' && 'Gold tier sponsors have stood with the Ryan Meetup time and time again — not just with financial support, but with hands-on help, collaborative ideas, and unwavering encouragement. They\'re woven into the story of this movement and help make the impossible feel inevitable.'}
        {tier === 'Silver' && 'Silver tier sponsors have returned to support multiple Ryan Meetups, showing a clear commitment to the community. Whether through recurring contributions, logistical support, or brand partnerships, they’ve helped us build momentum from city to city.'}
        {tier === 'Bronze' && 'Bronze tier sponsors have helped bring a Ryan Meetup to life through their one-time support — whether by donating funds, providing resources, or simply believing in the mission. Every meetup needs a spark, and they helped light the flame.'}
      </Text>

      <div className={`grid grid-cols-2 gap-x-4 xl:grid-cols-${sponsors.length < 4 ? sponsors.length : '4'} content-center gap-8`}>
        {sponsors.map((sponsor) => (
          <Sponsor 
            key={sponsor.name as string}
            sponsor={sponsor as SponsorType}
            className='col-span-1'
          />
        ))}
      </div>
    </section>
  );
};

export { SponsorSection };