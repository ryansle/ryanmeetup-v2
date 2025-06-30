'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import Marquee from 'react-fast-marquee';
import { Heading } from '@/components/global';

// Types
import type { Sponsor } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type SponsorCarousel = {
  sponsors: Sponsor[];
};

const SponsorCarousel = (props: SponsorCarousel) => {
  const { sponsors } = props;

  return (
    <div className='mt-4'>
      <Marquee speed={50} gradient={false}>
        {sponsors.map((sponsor: Sponsor, idx: number) => (
          <div key={idx} className='mx-8 flex flex-col items-center justify-center'>
            <NextLink href={sponsor.href} className='p-4 timing hover:scale-105'>
              <NextImage
                src={convertImageUrl(sponsor.logo) as string}
                alt={sponsor.name}
                width={100}
                height={100}
                className='h-28 md:h-40 w-auto object-contain rounded-xl'
                sizes='(max-width: 768px) 100px, 300px'
              />
            </NextLink>
            <Heading className='text-center max-w-32 text-lg lg:max-w-none' size='h4'>
              {sponsor.name}
            </Heading>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export { SponsorCarousel };
