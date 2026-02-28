"use client";

import { useMemo, useState } from "react";
import { Heading, Text } from "@/components/global";
import { UpcomingEventsList } from "@/components/events";
import type { RyanEvent } from "@/lib/types";
import { toEndOfDayTime } from "@/utils/date";

type EventsPreviewProps = {
  events: RyanEvent[];
};

const EventsPreview = (props: EventsPreviewProps) => {
  const { events } = props;
  const [view, setView] = useState<"upcoming" | "past">("upcoming");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const { upcoming, past } = useMemo(() => {
    const now = Date.now();
    const upcomingEvents = events.filter((event) => toEndOfDayTime(event.date) >= now);
    const pastEvents = events.filter((event) => toEndOfDayTime(event.date) < now);
    return { upcoming: upcomingEvents, past: pastEvents };
  }, [events]);

  const hasUpcoming = upcoming.length > 0;
  const hasPast = past.length > 0;

  const currentItems = view === "upcoming" ? upcoming : past;
  const totalPages = Math.max(1, Math.ceil(currentItems.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedItems = currentItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

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
              setPage(1);
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
              setPage(1);
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

      {view === "upcoming" && hasUpcoming && (
        <UpcomingEventsList
          events={pagedItems}
          title="Upcoming Events"
          sortOrder="asc"
          ctaLabel="RSVP"
        />
      )}

      {view === "past" && hasPast && (
        <UpcomingEventsList
          events={pagedItems}
          title="Past Events"
          sortOrder="desc"
          ctaLabel="View event"
        />
      )}

      {currentItems.length > pageSize && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="rounded-full border border-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/70 transition hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
          >
            Prev
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === currentPage;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                  className={`h-9 w-9 rounded-full border text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    isActive
                      ? "border-black/70 bg-black text-white dark:border-white/50 dark:bg-white dark:text-black"
                      : "border-black/20 text-black/70 hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
                  }`}
                  aria-current={isActive}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            className="rounded-full border border-black/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/70 transition hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

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
