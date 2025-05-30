// Components
import { Heading } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Types
import type { Sponsor } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type SponsorProps = {
  sponsor: Sponsor;
  className?: string;
};

const Sponsor = (props: SponsorProps) => {
  const { 
    name,
    logo,
    href,
  } = props.sponsor;
  const { className } = props;

  return (
    <NextLink 
      href={href}
      className={`flex flex-col items-center w-full justify-start timing hover:scale-102 ${className}`}
    >
      <NextImage 
        src={convertImageUrl(logo) ?? '/chapters/default.jpg'}
        width={300}
        height={300}
        alt={name}
        className='rounded-xl'
      />

      <div className='hidden lg:block'>
        <Heading size='md' className='mt-4 text-center'>
          {name}
        </Heading>
      </div>

      <div className='block lg:hidden'>
        <Heading size='sm' className='mt-4 text-center'>
          {name}
        </Heading>
      </div>
    </NextLink>
  );
};

export { Sponsor };