'use client';

// Components
import { Button } from '@/components/global';
import { FaDownload as Download } from 'react-icons/fa';
import { Poster } from '@/components/flyers';

// Types
import type { Flyer } from '@/lib/types';

type PosterContainerProps = {
  title: string;
  flyers: Flyer[];
  download?: boolean;
  description: string;
};

const PosterContainer = (props: PosterContainerProps) => {
  const { flyers, download = false } = props;

  return (
    <div className='space-y-6'>
      {download && (
        <Button
          onClick={() => window.open('/posters/posters.zip')}
          leftIcon={<Download />}
          className='mt-8'
        >
          Download Flyer Bundle
        </Button>
      )}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
        {flyers.map((flyer: Flyer, index: number) => (
          <Poster
            key={index}
            title={flyer.title}
            src={flyer.src}
          />
        ))}
      </div>
    </div>
  );
};

export { PosterContainer };