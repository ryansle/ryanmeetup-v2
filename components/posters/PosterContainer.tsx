'use client';

// Components
import { Heading, Text, Button } from '@/components/global';
import { FaDownload as Download } from 'react-icons/fa';
import { Poster } from '@/components/posters';

// Types
import type { Flyer } from '@/lib/types';

type PosterContainerProps = {
  title: string;
  posters: Flyer[];
  download?: boolean;
  description: string;
};

const PosterContainer = (props: PosterContainerProps) => {
  const { posters, download = false } = props;

  return (
    <div className='space-y-6'>
      {download && (
        <Button
          onClick={() => window.open('/posters/posters.zip')}
          leftIcon={<Download />}
          className='mt-8'
        >
          Download Poster Bundle
        </Button>
      )}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
        {posters.map((poster: Flyer, index: number) => (
          <Poster
            key={index}
            title={poster.title}
            src={poster.src}
          />
        ))}
      </div>
    </div>
  );
};

export { PosterContainer };