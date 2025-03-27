// Components
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';

// Types
import type { Article } from '@/lib/types';
import { convertImageUrl } from '@/utils/convert';

type ArticleProps = {
  article: Article;
};

type ArticleImageProps = {
  imageSrc: string;
  title: string;
};

const ArticleImage = (props: ArticleImageProps) => {
  const { imageSrc, title } = props;

  return (
    <div className='w-full max-h-[200px] aspect-w-2 aspect-h-1'>
      <NextImage
        className='rounded-lg shadow-xl border border-gray-400 dark:border-gray-700'
        src={imageSrc}
        fill
        alt={title}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

const Article = (props: ArticleProps) => {
  const {
    title,
    author,
    outlet,
    href,
    publishedOn,
    thumbnail,
    new: isNew,
  } = props.article;

  const highlight = 'font-semibold text-blue-500';

  const imageUrl = convertImageUrl(thumbnail);

  return (
    <NextLink
      href={href}
      target='_blank'
    >
      <div className='mb-2 timing hover:scale-102'>
        <div className='grid grid-cols-5'>
          <div className='col-span-5 xl:col-span-2'>
            <ArticleImage
              imageSrc={imageUrl ?? '/trophy.png'}
              title={title}
            />
          </div>

          <div className='col-span-5 mt-2 xl:col-span-3 xl:ml-8 xl:mt-0'>
            <div className='flex items-center space-x-4'>
              <Text>
                {publishedOn}
              </Text>
              {isNew && <span className='text-green-500 border border-green-500 text-sm font-medium px-2 rounded bg-green-900 text-white'>NEW</span>}
            </div>

            <div className='hidden md:block'>
              <Heading size='lg'>
                {title}
              </Heading>
            </div>
            <div className='block md:hidden'>
              <Heading size='md'>
                {title}
              </Heading>
            </div>

            <div className='block md:hidden'>
              <Text className='mt-4' size='sm'>
                by <span className={highlight}>{author}</span> in {outlet.split(' ')[0].toLowerCase() === 'the' ? '' : 'the'} <span className={highlight}>{outlet}</span>
              </Text>
            </div>
            <div className='hidden md:block'>
              <Text className='mt-4' size='lg'>
                by <span className={highlight}>{author}</span> in {outlet.split(' ')[0].toLowerCase() === 'the' ? '' : 'the'} <span className={highlight}>{outlet}</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { Article };
