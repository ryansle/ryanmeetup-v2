"use client";

// Components
import NextLink from "next/link";

const Banner = () => {
  return (
    <div className="font-cooper text-white bg-[#1fa8de] py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]">
      Rytoberfest returns. See you in NYC on September 13th, Ryans.{" "}
      <NextLink href="/rsvp" className="underline">
        RSVP today
      </NextLink>
      .
    </div>
  );
};

export { Banner };
