// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Text } from '@/components/global';

// Types
import type { Sponsor } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';
import { useTheme } from 'next-themes';

type SponsorProps = {
  sponsor: Sponsor;
  className?: string;
};

const Sponsor = (props: SponsorProps) => {
  const { 
    name,
    darkModeImage,
    lightModeImage,
    href,
    eventsSponsored,
  } = props.sponsor;
  const { className } = props;

  const { theme } = useTheme();

  return (
    <NextLink 
      href={href}
      className={`flex flex-col items-center w-full justify-start timing hover:scale-102 ${className}`}
    >
      <NextImage 
        src={theme === 'light' ? convertImageUrl(lightModeImage) as string : convertImageUrl(darkModeImage) as string}
        width={300}
        height={300}
        alt={name}
        className='rounded-xl'
      />
    </NextLink>
  );
};

export { Sponsor };