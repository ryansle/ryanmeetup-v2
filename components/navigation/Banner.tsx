"use client";

// Components
import NextLink from "next/link";

const Banner = () => {
  return (
    <div className="font-cooper text-white bg-red-500 py-1 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]">
      Ryan Meetup is expanding across North America! Find a local chapter near you at{" "}
      <NextLink href="/chapters" className="underline hover:text-blue-300">
        ryanmeetup.com/chapters
      </NextLink>
      {" "}.
    </div>
  );
};

export { Banner };
