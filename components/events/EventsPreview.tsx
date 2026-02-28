"use client";

import { useMemo, useState } from "react";
import { Heading, Text } from "@/components/global";
import { EventsListPager } from "@/components/events/EventsListPager";
import type { RyanEvent } from "@/lib/types";
import { toEndOfDayTime } from "@/utils/date";

type EventsPreviewProps = {
  events: RyanEvent[];
};

const EventsPreview = (props: EventsPreviewProps) => {
  const { events } = props;
  const [view, setView] = useState<"upcoming" | "past">("upcoming");
  const pageSize = 5;

  const { upcoming, past } = useMemo(() => {
    const now = Date.now();
    const upcomingEvents = events.filter((event) => toEndOfDayTime(event.date) >= now);
    const pastEvents = events.filter((event) => toEndOfDayTime(event.date) < now);
    return { upcoming: upcomingEvents, past: pastEvents };
  }, [events]);

  const hasUpcoming = upcoming.length > 0;
  const hasPast = past.length > 0;

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div>
          <Heading className="text-3xl title lg:text-4xl" size="h2">
            Events Overview
          </Heading>
          <Text className="text-sm text-black/70 dark:text-white/70">
            See what&apos;s coming up — or browse past meetups.
          </Text>
        </div>
        <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-black/10 bg-white/80 p-1 shadow-sm dark:border-white/10 dark:bg-white/10 lg:self-auto">
          <button
            type="button"
            onClick={() => {
              setView("upcoming");
            }}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
              view === "upcoming"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
            }`}
            aria-pressed={view === "upcoming"}
          >
            Upcoming
          </button>
          <button
            type="button"
            onClick={() => {
              setView("past");
            }}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
              view === "past"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
            }`}
            aria-pressed={view === "past"}
          >
            Past
          </button>
        </div>
      </div>

      {(view === "upcoming" && hasUpcoming) || (view === "past" && hasPast) ? (
        <EventsListPager
          events={events}
          view={view}
          pageSize={pageSize}
          listTitle={view === "upcoming" ? "Upcoming Events" : "Past Events"}
          ctaLabel={view === "upcoming" ? "RSVP" : "View event"}
          sortOrder={view === "upcoming" ? "asc" : "desc"}
          resetKey={view}
        />
      ) : null}

      {view === "upcoming" && !hasUpcoming && (
        <Text className="text-center text-sm text-black/70 dark:text-white/70">
          No upcoming events right now. Check back soon!
        </Text>
      )}

      {view === "past" && !hasPast && (
        <Text className="text-center text-sm text-black/70 dark:text-white/70">
          No past events yet.
        </Text>
      )}
    </section>
  );
};

export { EventsPreview };
