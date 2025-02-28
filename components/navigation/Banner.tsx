'use client';

// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-green-600 py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      St. Ryan&apos;s Day returns. Join us in Boston, MA, on March 22nd, 2025. <NextLink href='/rsvp' className='underline'>RSVP today</NextLink>.
    </div>
  );
};

export { Banner };
