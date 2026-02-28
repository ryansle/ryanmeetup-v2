"use client";

import NextLink from "next/link";
import { Heading, Text } from "@/components/global";

import type { RyanEvent } from "@/lib/types";

type UpcomingEventsListProps = {
  events: RyanEvent[];
};

const getEventTime = (value: RyanEvent["date"]) => {
  if (typeof value === "string") {
    const dateOnlyMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (dateOnlyMatch) {
      const year = Number(dateOnlyMatch[1]);
      const monthIndex = Number(dateOnlyMatch[2]) - 1;
      const day = Number(dateOnlyMatch[3]);
      return new Date(year, monthIndex, day).getTime();
    }
  }

  return new Date(value as unknown as string).getTime();
};

const formatMonthDay = (value: RyanEvent["date"]) => {
  if (typeof value === "string") {
    const dateOnlyMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (dateOnlyMatch) {
      const year = Number(dateOnlyMatch[1]);
      const monthIndex = Number(dateOnlyMatch[2]) - 1;
      const day = Number(dateOnlyMatch[3]);
      const date = new Date(year, monthIndex, day);
      return {
        month: date.toLocaleDateString("en-US", { month: "short" }),
        day: date.toLocaleDateString("en-US", { day: "2-digit" }),
      };
    }
  }

  const date = new Date(value as unknown as string);
  return {
    month: date.toLocaleDateString("en-US", { month: "short" }),
    day: date.toLocaleDateString("en-US", { day: "2-digit" }),
  };
};

const UpcomingEventsList = (props: UpcomingEventsListProps) => {
  const { events } = props;

  if (events.length === 0) return null;
  const sortedEvents = [...events].sort(
    (a, b) => getEventTime(a.date) - getEventTime(b.date),
  );

  return (
    <div className="mb-10 rounded-2xl border border-black/10 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="mb-4 flex flex-col gap-2 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
        <Heading className="text-3xl title lg:text-4xl" size="h2">
          Upcoming Events
        </Heading>
        <Text className="text-xs uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
          {events.length} event{events.length === 1 ? "" : "s"}
        </Text>
      </div>
      <div className="grid gap-3">
        {sortedEvents.map((event) => {
          const date = formatMonthDay(event.date);
          const isNationalEvent = event.chapter.includes("Main");
          const chapterTag = event.chapter.find((item) => item !== "Main");
          return (
            <NextLink
              key={`${event.title}-${event.date}`}
              href={event.href}
              className="group flex flex-col gap-4 rounded-2xl border border-black/10 bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:border-black/30 hover:bg-black/5 hover:shadow-md dark:border-white/15 dark:bg-white/5 dark:hover:border-white/30 dark:hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl border border-black/10 bg-black/5 text-black dark:border-white/10 dark:bg-white/10 dark:text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70 dark:text-white/70">
                    {date.month}
                  </span>
                  <span className="text-lg font-semibold">{date.day}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Heading className="text-lg title" size="h3">
                      {event.title}
                    </Heading>
                    {isNationalEvent && (
                      <span className="inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-700 shadow-sm dark:border-amber-300/60 dark:bg-amber-300/20 dark:text-amber-200">
                        National Event
                      </span>
                    )}
                    {chapterTag && (
                      <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm dark:border-emerald-300/40 dark:bg-emerald-300/15 dark:text-emerald-200">
                        {chapterTag} Chapter
                      </span>
                    )}
                  </div>
                  <Text className="text-xs uppercase tracking-[0.2em] text-black/70 dark:text-white/70">
                    {event.city} • {event.venue}
                  </Text>
                </div>
              </div>
              <span className="inline-flex w-full items-center justify-center rounded-full border border-black/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition group-hover:border-black/40 group-hover:bg-black/5 dark:border-white/20 dark:text-white dark:group-hover:border-white/40 dark:group-hover:bg-white/10 sm:w-auto">
                RSVP
              </span>
            </NextLink>
          );
        })}
      </div>
    </div>
  );
};

export { UpcomingEventsList };
