"use client";

// Components
import { Heading, Text, Card, Pill } from "@/components/global";
import NextLink from "next/link";
import NextImage from "next/image";
import { FaInstagram as Instagram } from "react-icons/fa";

// Types
import type { ContentfulImage } from "@/lib/types";

// Utilities
import { convertImageUrl, filterInstagram } from "@/utils/convert";

type ChapterInfoProps = {
  leaders: string[];
  instagram: string;
  avatar: ContentfulImage;
  city: string;
  isActive?: boolean;
};

const ChapterInfo = (props: ChapterInfoProps) => {
  const { leaders, instagram, avatar, city, isActive } = props;

  return (
    <Card variant="soft" size="lg" className="relative overflow-hidden">
      {!isActive && (
        <div className="absolute right-4 top-4 z-10">
          <Pill className="border-red-500/40 bg-red-500/10 text-red-600 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300">
            Inactive
          </Pill>
        </div>
      )}

      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex items-center justify-center">
          <NextImage
            src={(avatar && convertImageUrl(avatar)) ?? "/chapters/default.jpg"}
            width={200}
            height={200}
            alt={`Ryan Meetup ${city}`}
            className="rounded-full border border-black/10 shadow-xl dark:border-white/10"
          />
        </div>

        <Heading className="text-3xl title" size="h1">
          {city as string}
        </Heading>
      </div>

      <div className="mt-6 space-y-5">
        <div className="grid grid-cols-9 gap-3">
          <div className="col-span-4">
            <Text className="text-sm font-semibold uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
              Chapter Lead{leaders.length > 1 && "s"}
            </Text>
          </div>

          <div className="col-span-5 space-y-1">
            {leaders.map((ryan, index) => (
              <Text key={index} className="text-base text-black/70 dark:text-white/70">
                {ryan}
              </Text>
            ))}

            {leaders.length === 0 && (
              <Text className="text-base text-black/70 dark:text-white/70">
                No active lead.
              </Text>
            )}
          </div>
        </div>

        <div className="grid grid-cols-7 gap-3 flex items-center">
          <div className="col-span-3">
            <Text className="text-sm font-semibold uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
              Instagram
            </Text>
          </div>

          <div className="col-span-4">
            <NextLink
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex w-full items-center justify-start gap-2 overflow-hidden rounded-lg bg-transparent p-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:text-black/70 dark:text-white dark:hover:text-white/70 hover:underline"
            >
              <span className="text-base">
                <Instagram className="h-4 w-4" />
              </span>
              <span className="truncate">{filterInstagram(instagram)}</span>
            </NextLink>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/90 p-4 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <Heading className="text-lg title" size="h4">
            Need to get in contact?
          </Heading>

          <Text className="mt-2 text-sm text-black/70 dark:text-white/70">
            Our Instagram inbox is open for all inquiries.
          </Text>
        </div>
      </div>
    </Card>
  );
};

export { ChapterInfo };
