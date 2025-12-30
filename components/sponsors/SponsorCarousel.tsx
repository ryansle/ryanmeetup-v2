"use client";

import { useMemo } from "react";

// Components
import NextImage from "next/image";
import NextLink from "next/link";
import Marquee from "react-fast-marquee";

// Types
import type { Sponsor } from "@/lib/types";

// Utilities
import { useTheme } from "next-themes";
import { convertImageUrl } from "@/utils/convert";

type SponsorCarousel = {
  sponsors: Sponsor[];
};

const SponsorCarousel = (props: SponsorCarousel) => {
  const { theme } = useTheme();

  const { sponsors } = props;

  const sponsorLogos = useMemo(
    () =>
      sponsors.map((sponsor) => ({
        href: sponsor.href,
        name: sponsor.name,
        src:
          theme === "light"
            ? (convertImageUrl(sponsor.lightModeImage) as string)
            : (convertImageUrl(sponsor.darkModeImage) as string),
      })),
    [sponsors, theme],
  );

  return (
    <div className="-mt-4 -mb-8">
      <Marquee speed={50} gradient={false}>
        {sponsorLogos.map((sponsor, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center py-6">
            <NextLink
              href={sponsor.href}
              className="group mx-4 flex h-40 w-[14rem] items-center justify-center rounded-2xl border border-white/10 bg-white p-2 transition hover:-translate-y-1 hover:border-white/30 dark:bg-white/5 dark:hover:bg-white/10 sm:mx-6 sm:h-56 sm:w-[22rem]"
            >
              <NextImage
                src={sponsor.src}
                alt={sponsor.name}
                width={320}
                height={160}
                className="h-28 w-auto object-contain sm:h-40"
                sizes="(max-width: 640px) 220px, (max-width: 768px) 320px, 420px"
              />
            </NextLink>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export { SponsorCarousel };
