"use client";

import { useMemo } from "react";

// Components
import { Heading, Text } from "@/components/global";

// Types
import type { Charity } from "@/lib/types";

// Utilities
import useCounter from "@/hooks/useCounter";

type TotalCountProps = {
  donations: Charity[];
};

const TotalCount = (props: TotalCountProps) => {
  const { donations } = props;

  const fmt = (n: number) =>
    n.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  const total = useMemo(() => {
    return donations.reduce((sum, item) => {
      const num = parseFloat(item.amount.replace(/[^0-9.-]+/g, ""));
      return sum + num;
    }, 0);
  }, [donations]);

  const animatedGrand = useCounter(total, { duration: 500 });

  return (
    <div className="px-6 text-center max-w-7xl mx-auto">
      <Heading
        className="mb-6 text-center text-4xl xl:text-7xl title"
        size="h1"
      >
        Ryan Meetup <span className="hidden xl:inline-block">has raised</span>
      </Heading>
      <div className="inline-flex items-center justify-center rounded-3xl bg-white/5 ring-1 ring-white/10 px-6 py-4 md:p-8">
        <div className="text-left">
          <div className="block xl:hidden text-lg xl:text-xl uppercase tracking-widest text-white/70 mb-4 text-center">
            HAS RAISED
          </div>
          <div className="mt-2 text-6xl md:text-[10rem] font-black text-center leading-none">
            {fmt(animatedGrand)}
          </div>
          <div className="text-lg xl:text-xl uppercase tracking-widest text-white/70 mt-4 xl:mt-10 text-center">
            FOR CHARITABLE CAUSES WORLDWIDE
          </div>
        </div>
      </div>
      <Text className="mt-4 text-sm text-white/60">
        Last updated: {new Date().toLocaleDateString()}
      </Text>
    </div>
  );
};

export { TotalCount };
