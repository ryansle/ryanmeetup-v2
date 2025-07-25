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

  const sorted = sponsors.sort((a, b) => b.eventsSponsored - a.eventsSponsored);

  return (
    <section className='space-y-8'>
      <Heading className='text-center text-3xl md:text-5xl' size='h2'>
        {tier} Sponsors
      </Heading>

      <Text className='text-center text-base lg:text-lg mx-0 2xl:mx-48'>
        {tier === 'Founding' && 'Founding sponsors have gone above and beyond to support the Ryan Meetup, by providing essential resources, funding, and more. They are the backbone of our community and help us achieve our mission.'}
        {tier === 'Core' && 'Core sponsors have consistently supported multiple Ryan Meetups, demonstrating their ongoing commitment to the community and helping to drive our mission forward.'}
        {/* {tier === 'Contributing' && 'Contributing sponsors have played a vital role in supporting individual Ryan Meetups, providing essential resources and encouragement to make these events a success.'} */}
      </Text>

      {sorted.length >= 4 && (
        <div className={`content-center gap-4 grid grid-cols-2 lg:grid-cols-${tier === 'Founding' ? '3' : '4'}`}>
          {sorted.map((sponsor) => (
            <Sponsor 
              key={sponsor.name as string}
              sponsor={sponsor as SponsorType}
              className='col-span-1 w-full max-w-[800px]'
            />
          ))}
        </div>
      )}
      
      {sorted.length < 4 && (
        <div className='flex items-center justify-center gap-4'>
          {sorted.map((sponsor) => (
            <Sponsor 
              key={sponsor.name as string}
              sponsor={sponsor as SponsorType}
              className='w-full max-w-[400px]'
            />
          ))}
        </div>
      )}
    </section>
  );
};

export { SponsorSection };