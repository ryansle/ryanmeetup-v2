// Components
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Heading } from '@/components/global';

// Utilities
import { RyanChapter } from '@/lib/types';
import { convertImageUrl } from '@/utils/convert';

type ChapterTileProps = {
  chapter: RyanChapter;
};

// TODO: nav to a chapter page instead of directly to WhatsApp
const ChapterTile = (props: ChapterTileProps) => {
  const { city, slug, state, coverImage, whatsAppLink } = props.chapter;

  return (
    <NextLink href={`/chapters/${slug}`}>
    {/* <NextLink href={whatsAppLink}> */}
      <div className='border flex flex-col items-center justify-center shadow-xl border-gray-700 rounded-xl h-full timing hover:border-white hover:scale-102'>
        <div className='relative w-full flex items-center justify-center rounded-xl h-80 overflow-hidden bg-center'>
          <div className='w-full h-full brightness-30'>
            <NextImage
              src={convertImageUrl(coverImage) ?? '/group-photos/ryanroundup.png'}
              alt={`${city} Chapter`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='absolute w-full inset-x-0 text-white text-xs text-center leading-4 flex items-center justify-center flex-col px-8'>
            <Heading ignoreColorMode size='lg'>{city}</Heading>
            <Heading size='base' ignoreColorMode>{state}</Heading>
          </div>
        </div>
      </div>
    </NextLink >
  );
};

export { ChapterTile };