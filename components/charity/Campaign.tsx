// Components
import { Heading, Text } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { FaDollarSign as Dollar } from 'react-icons/fa';

// Types
import type { RyanInNeed } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type CampaignProps = {
  ryanInNeed: RyanInNeed;
};

const Campaign = (props: CampaignProps) => {
  const {
    coverImage,
    title,
    goal,
    platform,
    href,
    completed,
  } = props.ryanInNeed;

  const imageUrl = convertImageUrl(coverImage);

  return (
    <NextLink href={href}>
      <div className='border border-gray-400 relative bg-white dark:bg-black dark:border-gray-700 rounded-3xl flex flex-col h-full overflow-hidden break-inside-avoid-column timing hover:border-black dark:hover:border-white hover:scale-102'>
        {completed && (
          <div className='absolute top-6 -left-[60px] -rotate-45 z-10'>
            <div className='px-2 text-md text-center rounded-lg font-semibold uppercase w-[200px] h-6 flex items-center justify-center bg-green-700 text-sm'>
              FUNDED
            </div>
          </div>
        )}
        <div className='w-full max-h-[450px] aspect-w-2 aspect-h-1 overflow-hidden'>
          <NextImage
            className='rounded-t-3xl border-b border-gray-400 dark:border-gray-700'
            src={imageUrl ?? '/trophy.png'}
            fill={true}
            alt={title}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className='p-4 space-y-2'>
          <Heading size='sm'>{title}</Heading>

          <Text className='flex items-center shrink-0'>
            <Dollar className='mr-4 fill-white' /> Fundraising Goal: {goal}
          </Text>
        </div>
      </div>
    </NextLink>
  );
};

export { Campaign };