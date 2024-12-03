'use client';

// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-[#EE1A25] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      📣&nbsp; One weekend. Two Ryan Meetups. Join us in San Diego on Jan 24 &amp; 25 for Last Ryan Standing and Ryan&apos;s Game Show. <NextLink href='/rsvp' className='underline'>RSVP today</NextLink>.
    </div>
  );
};

export { Banner };
