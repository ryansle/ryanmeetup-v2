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
              className="group mx-6 flex h-56 w-[22rem] items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-2 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <NextImage
                src={sponsor.src}
                alt={sponsor.name}
                width={320}
                height={160}
                className="h-40 w-auto object-contain"
                sizes="(max-width: 768px) 320px, 420px"
              />
            </NextLink>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export { SponsorCarousel };
