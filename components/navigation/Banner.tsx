'use client';

// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-[#EE1A25] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      Happy holidays, Ryans. Register for the <NextLink className='underline' href='/holidays'>Secret Ryan Gift Exchange</NextLink> today. Registration closes on November 29th.
    </div>
  );
};

export { Banner };
