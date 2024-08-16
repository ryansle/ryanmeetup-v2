'use client';

// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-[#EE1A25] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      Ryan Meetup is going international on September 8th! RSVP to Ryan Royale in Toronto, ON <NextLink className='underline' href='https://www.ryanmeetup.com/rsvp'>here.</NextLink>
    </div>
  );
};

export { Banner };
