"use client";

// Components
import NextLink from "next/link";

const Banner = () => {
  return (
    <div className="font-cooper text-white bg-[#1d1b7a] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]">
      Join us to show the world why Ryans Own Manhattan at the final Ryan meetup of 2025. {' '}
      <NextLink href="/rsvp" className="underline">
        RSVP today
      </NextLink>
      .
    </div>
  );
};

export { Banner };
