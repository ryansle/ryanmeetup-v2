// Components
import NextImage from 'next/image';

type PosterProps = {
  title: string;
  src: string;
};

const Poster = (props: PosterProps) => {
  const { title, src } = props;

  return (
    <div className='overflow-hidden aspect-w-3 aspect-h-4'>
      <NextImage
        className='border border-gray-600'
        src={src}
        fill={true}
        alt={title}
      />
    </div>
  );
};

export { Poster };