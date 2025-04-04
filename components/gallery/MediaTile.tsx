// Components
import { Heading } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Types
import type { MediaEvent } from '@/lib/types';

// Utilities
import { convertImageUrl } from '@/utils/convert';

type MediaTileProps = {
  id: string;
  data: MediaEvent;
};

const MediaTile = (props: MediaTileProps) => {
  const { title, eventDate, bgImage, photoUrl } = props.data;

  return (
    <NextLink href={photoUrl}>
      <div className='border flex flex-col items-center justify-center shadow-xl border-gray-700 rounded-xl h-full timing hover:border-white hover:scale-102'>
        <div className='relative w-full flex items-center justify-center rounded-xl h-80 overflow-hidden bg-center'>
          <div className='w-full h-full brightness-30'>
            <NextImage
              src={convertImageUrl(bgImage) ?? '/trophy.png'}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='absolute w-full inset-x-0 text-white text-xs text-center leading-4 flex items-center justify-center flex-col px-8'>
            <Heading ignoreColorMode>{title}</Heading>
            <Heading size='sm' ignoreColorMode>{eventDate}</Heading>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { MediaTile };
