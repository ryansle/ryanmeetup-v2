'use client';

// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-[#EE1A25] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      NYC Ryans: We have some very important Ryan business to attend to this <NextLink className='underline' href='/rsvp'>Sunday, October 13th</NextLink>. See you at Ryan Maguire&apos;s at 5 PM.
    </div>
  );
};

export { Banner };
