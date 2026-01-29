// Components
import NextLink from "next/link";
import NextImage from "next/image";
import { Heading, Text } from "@/components/global";
import { FaCity as City } from "react-icons/fa";
import { MdLocationPin as Pin } from "react-icons/md";

// Types
import type { ContentfulImage, RyanEvent } from "@/lib/types";

// Utilities
import { convertImageUrl } from "@/utils/convert";

type EventProps = {
  event: RyanEvent;
};

const Event = (props: EventProps) => {
  const { title, coverImage, description, href, city, dateTime, venue } =
    props.event;

  const imageUrl =
    typeof coverImage === "string"
      ? coverImage
      : convertImageUrl(coverImage as ContentfulImage);

  return (
    <NextLink href={href} className="group block">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/90 shadow-[0_25px_50px_-40px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40">
        {/* {isPartnerEvent && (
          <div className='absolute top-6 -left-[60px] -rotate-45 z-10'>
            <div className='px-2 text-md text-center rounded-lg font-semibold uppercase w-[200px] h-6 flex items-center justify-center bg-red-500 text-sm'>
              COMMUNITY
            </div>
          </div>
        )} */}
        <div className="relative w-full max-h-[450px] aspect-w-2 aspect-h-1 overflow-hidden border-b border-black/10 dark:border-white/10">
          <NextImage
            className="rounded-t-2xl"
            src={imageUrl ?? "/trophy.png"}
            fill={true}
            alt={title}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Event Description */}
        <div className="flex flex-1 flex-col px-5 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <Text className="text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
                {dateTime}
              </Text>
              <Heading className="text-2xl title" size="h3">
                {title}
              </Heading>
            </div>
          </div>
          <Text className="min-h-[85px] text-sm text-black/70 dark:text-white/70">
            {description}
          </Text>

          <div className="mt-auto grid grid-cols-2 gap-2 pt-5 text-black/60 dark:text-white/60">
            <div className="flex items-center gap-2">
              <City />
              <Text className="text-xs uppercase tracking-[0.2em]">
                {city}
              </Text>
            </div>

            <div className="flex items-center gap-2">
              <Pin />
              <Text className="text-xs uppercase tracking-[0.2em]">
                {venue}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { Event };
