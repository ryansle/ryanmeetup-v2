'use client';

// Components
import NextLink from 'next/link';

type BannerProps = {
  tickets: number;
};

const Banner = (props: BannerProps) => {
  const { tickets } = props;

  return (
    <div className='font-cooper text-white bg-[#EE1A25] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]'>
      {tickets} ticket{tickets !== 1 && 's'} remaining for <NextLink className='underline underline-offset-2' href='/tickets'>150 Deadpools & Wolverine</NextLink> in New York City. July 27th.
    </div>
  );
};

export { Banner };
