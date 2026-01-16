"use client";

// Components
import NextLink from "next/link";
import { layoutPaddingX } from "@/lib/constants";

const Banner = () => {
  return (
    <div className={`font-cooper text-white bg-red-500 py-1 ${layoutPaddingX}`}>
      Ryan Meetup is expanding across North America! Find a local chapter near you at{" "}
      <NextLink href="/chapters" className="underline hover:text-blue-300">
        ryanmeetup.com/chapters
      </NextLink>
      {" "}.
    </div>
  );
};

export { Banner };
