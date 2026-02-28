"use client";

import { useMemo, useState, useEffect } from "react";
import { Heading, Text } from "@/components/global";
import { UpcomingEventsList } from "@/components/events";
import { toEndOfDayTime } from "@/utils/date";
import type { RyanEvent } from "@/lib/types";
import {
  FaArrowLeft as ArrowLeft,
  FaArrowRight as ArrowRight,
  FaAnglesLeft as AnglesLeft,
  FaAnglesRight as AnglesRight,
} from "react-icons/fa6";

type EventsListPagerProps = {
  events: RyanEvent[];
  view?: "upcoming" | "past";
  pageSize?: number;
  perPageOptions?: number[];
  defaultPerPage?: number;
  showPerPageSelector?: boolean;
  listTitle?: string;
  ctaLabel?: string;
  sortOrder?: "asc" | "desc";
  emptyStateVariant?: "text" | "table";
  resetKey?: string | number;
};

const EventsListPager = (props: EventsListPagerProps) => {
  const {
    events,
    view = "upcoming",
    pageSize = 5,
    perPageOptions,
    defaultPerPage,
    showPerPageSelector = false,
    listTitle,
    ctaLabel,
    sortOrder,
    emptyStateVariant = "text",
    resetKey,
  } = props;

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(
    defaultPerPage ?? perPageOptions?.[0] ?? pageSize,
  );

  const effectivePerPage = showPerPageSelector ? perPage : pageSize;

  const filteredEvents = useMemo(() => {
    const now = Date.now();
    return events.filter((event) =>
      view === "upcoming"
        ? toEndOfDayTime(event.date) >= now
        : toEndOfDayTime(event.date) < now,
    );
  }, [events, view]);

  const sortedEvents = useMemo(() => {
    const order =
      sortOrder ?? (view === "upcoming" ? "asc" : "desc");
    return [...filteredEvents].sort((a, b) =>
      order === "asc"
        ? toEndOfDayTime(a.date) - toEndOfDayTime(b.date)
        : toEndOfDayTime(b.date) - toEndOfDayTime(a.date),
    );
  }, [filteredEvents, sortOrder, view]);

  const totalPages = Math.max(1, Math.ceil(sortedEvents.length / effectivePerPage));
  const currentPage = Math.min(page, totalPages);
  const pagedItems = sortedEvents.slice(
    (currentPage - 1) * effectivePerPage,
    currentPage * effectivePerPage,
  );

  useEffect(() => {
    if (showPerPageSelector && perPageOptions?.length) {
      if (!perPageOptions.includes(perPage)) {
        setPerPage(perPageOptions[0]);
      }
    }
  }, [perPage, perPageOptions, showPerPageSelector]);

  useEffect(() => {
    setPage(1);
  }, [effectivePerPage, resetKey]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

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

  const resolvedTitle =
    listTitle ?? (view === "upcoming" ? "Upcoming Events" : "Past Events");
  const resolvedCta =
    ctaLabel ?? (view === "upcoming" ? "RSVP" : "View event");
  const emptyMessage =
    view === "upcoming"
      ? "No upcoming events right now. Check back soon!"
      : "No past events yet.";

  return (
    <div className="space-y-4">
      {showPerPageSelector && perPageOptions?.length ? (
        <div className="flex justify-center sm:justify-end">
          <label className="inline-flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70 dark:text-white/70">
            Results per page
            <select
              value={effectivePerPage}
              onChange={(event) => setPerPage(Number(event.target.value))}
              className="h-9 rounded-full border border-black/20 bg-white/80 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70 shadow-sm transition hover:border-black/40 dark:border-white/20 dark:bg-white/10 dark:text-white/70 dark:hover:border-white/40"
            >
              {perPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}

      {sortedEvents.length === 0 ? (
        emptyStateVariant === "table" ? (
          <div className="mb-10 rounded-2xl border border-black/10 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex flex-col gap-2 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
              <Heading className="text-3xl title lg:text-4xl" size="h2">
                {resolvedTitle}
              </Heading>
              <Text className="text-xs uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
                0 events
              </Text>
            </div>
            <div className="rounded-2xl border border-dashed border-black/20 p-6 text-center dark:border-white/20">
              <Text className="text-sm text-black/70 dark:text-white/70">
                {emptyMessage}
              </Text>
            </div>
          </div>
        ) : (
          <Text className="text-center text-sm text-black/70 dark:text-white/70">
            {emptyMessage}
          </Text>
        )
      ) : (
        <UpcomingEventsList
          events={pagedItems}
          title={resolvedTitle}
          sortOrder={sortOrder ?? (view === "upcoming" ? "asc" : "desc")}
          ctaLabel={resolvedCta}
        />
      )}

      {sortedEvents.length > effectivePerPage && (
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
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/20 text-black/70 transition hover:border-black/40 hover:text-black dark:border-white/20 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
              disabled={currentPage === totalPages}
              aria-disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
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
        </div>
      )}
    </div>
  );
};

export { EventsListPager };
