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
          <div key={idx} className="flex flex-col items-center justify-center">
            <NextLink href={sponsor.href} className="p-4 timing hover:scale-105">
              <NextImage
                src={sponsor.src}
                alt={sponsor.name}
                width={70}
                height={30}
                className="h-28 md:h-40 w-auto object-contain rounded-xl"
                sizes="(max-width: 768px) 100px, 300px"
              />
            </NextLink>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export { SponsorCarousel };
