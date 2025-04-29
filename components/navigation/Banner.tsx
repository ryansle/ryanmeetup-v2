'use client';

// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-[#7e6a8f] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      Denver Ryans asked. We answered. We&apos;ll see you there for our next double header, Ryans. <NextLink href='/rsvp' className='underline'>RSVP today</NextLink>.
    </div>
  );
};

export { Banner };
