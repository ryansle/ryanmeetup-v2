// Types
import type { Testimonial } from '@/lib/types';

type TestimonyProps = {
  testimony: Testimonial;
};

const Testimony = (props: TestimonyProps) => {
  const {
    // lastName,
    // headshot,
    location,
    quote
  } = props.testimony;

  return (
    <div className='rounded-xl border bg-white border-gray-400 break-inside-avoid-column shadow-xl p-4 mb-4 h-max dark:border-gray-700 dark:bg-black timing hover:scale-102'>
      <div className='grid grid-cols-5 gap-4'>
        {/* <div className='col-span-1'>
          <NextImage 
            src={headshot ? convertImageUrl(headshot) as string : '/icons/ryanicon.png'}
            height={50}
            width={50}
            alt={`Ryan ${lastName} Headshot`}
            className='rounded-full object-cover'
          />
        </div> */}
        <div className='col-span-5'>
          <p className='text-gray-600 text-base dark:text-gray-400'>
            {quote}
          </p>
          <h3 className='text-lg font-semibold text-lg mt-2 text-right'>
            - Ryan from {location}
          </h3>
        </div>
      </div>
    </div>
  );
};

export { Testimony };