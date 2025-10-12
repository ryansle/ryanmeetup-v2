"use client";

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

  return (
    <div className="-mt-4 -mb-8">
      <Marquee speed={50} gradient={false}>
        {sponsors.map((sponsor: Sponsor, idx: number) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <NextLink
              href={sponsor.href}
              className="p-4 timing hover:scale-105"
            >
              <NextImage
                src={
                  theme === "light"
                    ? (convertImageUrl(sponsor.lightModeImage) as string)
                    : (convertImageUrl(sponsor.darkModeImage) as string)
                }
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
