'use client';

import { useState } from 'react';

// Components
import { Heading, Text, Button } from '@/components/global';
import { ZoomButton, Photo } from '@/components/gallery';
import { BiZoomIn as ZoomIn, BiZoomOut as ZoomOut } from 'react-icons/bi';

// Types
import type { ContentfulImage, MediaEvent } from '@/lib/types';

type MediaContainerProps = {
  media: MediaEvent;
};

const MediaContainer = (props: MediaContainerProps) => {
  const {
    title,
    date,
    description,
    googleDriveLink,
    photos,
  } = props.media;

  const [zoom, setZoom] = useState<number>(3);

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex flex-col mb-4'>
          <Heading>
            {title}
          </Heading>
          <Heading size='sm'>
            {new Date(date).toLocaleDateString()}
          </Heading>
        </div>

        <div className='space-x-4'>
          <ZoomButton
            rightIcon={<ZoomOut />}
            onClick={() => setZoom(zoom + 1)}
            disabled={zoom >= 3}
          >
            Zoom Out
          </ZoomButton>
          <ZoomButton
            rightIcon={<ZoomIn />}
            onClick={() => setZoom(zoom - 1)}
            disabled={zoom <= 1}
          >
            Zoom In
          </ZoomButton>
        </div>
      </div>

      <div className='mb-10'>
        <Text className='mb-4'>
          {description}
        </Text>
        <Button.Link href={googleDriveLink as string}>
          Access Full Sized Photos Here
        </Button.Link>
      </div>

      <div className={`grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-${zoom} xl:grid-cols-${zoom}`}>
        {photos.map((content: ContentfulImage, index: number) => (
          <Photo
            key={index}
            image={content}
          />
        ))}
      </div>
    </div>
  );
};
export { MediaContainer };
