"use client";

// Components
import NextLink from "next/link";
import { layoutPaddingX } from "@/lib/constants";

const Banner = () => {
  return (
    <div className={`font-cooper text-white  bg-[#073326] py-1 ${layoutPaddingX}`}>
      We&apos;re taking this year&apos;s St. Ryan&apos;s Day celebration to Philadelphia! See you there, Ryan.{" "}
      <NextLink href="/rsvp" className="underline hover:text-[#ad8f4f]">
        RSVP today
      </NextLink>
      .
    </div>
  );
};

export { Banner };
