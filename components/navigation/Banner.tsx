'use client';

// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-[#EE1A25] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      Tickets for <NextLink className='underline underline-offset-2' href='/tickets'>150 Deadpools & Wolverine</NextLink> are now sold out. See you all in New York City on July 27th.
    </div>
  );
};

export { Banner };
