"use client";

import { useMemo, useState } from "react";
import { Heading, Text } from "@/components/global";
import {
  FaArrowLeft as ArrowLeft,
  FaArrowRight as ArrowRight,
  FaAnglesLeft as AnglesLeft,
  FaAnglesRight as AnglesRight,
} from "react-icons/fa6";
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

  const pageButtons = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = new Set<number>();
    pages.add(1);
    pages.add(totalPages);
    pages.add(currentPage);
    if (currentPage > 1) pages.add(currentPage - 1);
    if (currentPage < totalPages) pages.add(currentPage + 1);

    return Array.from(pages).sort((a, b) => a - b);
  }, [currentPage, totalPages]);

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
        <div className="mt-4 flex items-center justify-center">
          <div className="mx-2 inline-flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setPage(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/20 text-black/70 transition hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
              disabled={currentPage === 1}
              aria-disabled={currentPage === 1}
              aria-label="First page"
            >
              <AnglesLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/20 text-black/70 transition hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
              disabled={currentPage === 1}
              aria-disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            {pageButtons.map((pageNumber, index) => {
              const isActive = pageNumber === currentPage;
              const prevPage = pageButtons[index - 1];
              const showEllipsis = index > 0 && pageNumber - prevPage > 1;
              return (
                <div key={pageNumber} className="inline-flex items-center gap-1.5">
                  {showEllipsis && (
                    <span className="px-1 text-xs text-black/40 dark:text-white/40">
                      …
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    className={`h-8 w-8 rounded-full border text-[10px] font-semibold uppercase tracking-[0.2em] transition sm:h-9 sm:w-9 sm:text-xs ${
                      isActive
                        ? "border-black/70 bg-black text-white dark:border-white/50 dark:bg-white dark:text-black"
                        : "border-black/20 text-black/70 hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
                    }`}
                    aria-current={isActive}
                  >
                    {pageNumber}
                  </button>
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => setPage(totalPages)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/20 text-black/70 transition hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
              disabled={currentPage === totalPages}
              aria-disabled={currentPage === totalPages}
              aria-label="Last page"
            >
              <AnglesRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/20 text-black/70 transition hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ArrowRight className="h-3.5 w-3.5" />
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
