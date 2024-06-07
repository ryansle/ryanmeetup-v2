// Components
import NextImage from 'next/image';

// Types
import type { ContentfulImage } from '@/lib/types';

type PhotoProps = {
  image: ContentfulImage;
};

const Photo = (props: PhotoProps) => {
  const { file, title } = props.image.fields;

  const imageUrl = file.url.replace('//', '');

  return (
    <div className='w-full max-h-[450px] aspect-w-3 aspect-h-2 overflow-hidden border rounded-lg shadow-xl dark:border-black'>
      <NextImage
        src={`https://${imageUrl}`}
        fill
        alt={title}
        style={{ objectFit: 'cover' }}
        sizes='(max-width: 640px) 100vw,
               (max-width: 768px) 100vw,
               (max-width: 1024px) 100vw,
               (max-width: 1280px) 100vw,
               (max-width: 1536px) 100vw'
      />
    </div>
  );
};

export { Photo };