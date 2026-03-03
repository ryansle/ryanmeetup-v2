"use client";

import { useMemo, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Components
import { EmptyState } from "@/components/global";
import { UpcomingEventsList } from "@/components/events";
import { EventsEmptyTable } from "@/components/events/EventsEmptyTable";
import { EventsPagination } from "@/components/events/EventsPagination";
import { ResultsPerPage } from "@/components/events/ResultsPerPage";
import {
  FaArrowLeft as ArrowLeft,
  FaArrowRight as ArrowRight,
  FaAnglesLeft as AnglesLeft,
  FaAnglesRight as AnglesRight,
} from "react-icons/fa6";

// Utilities
import { getEventEmptyMessage, getSortedEventsByView } from "@/utils/events";
import { formatEventCount } from "@/utils/date";
import type { RyanEvent } from "@/lib/types";

type EventsListPagerProps = {
  events: RyanEvent[];
  view?: "upcoming" | "past";
  pageSize?: number;
  perPageOptions?: number[];
  defaultPerPage?: number;
  showPerPageSelector?: boolean;
  breadcrumbNode?: ReactNode;
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
    breadcrumbNode,
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

  const sortedEvents = useMemo(
    () => getSortedEventsByView(events, view, sortOrder),
    [events, sortOrder, view],
  );

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
  const emptyMessage = getEventEmptyMessage(view);
  const footerAction =
    showPerPageSelector && perPageOptions?.length ? (
      <ResultsPerPage
        value={effectivePerPage}
        options={perPageOptions}
        onChange={setPerPage}
      />
    ) : null;

  return (
    <div className="space-y-4">
      {breadcrumbNode ? (
        <div className="-mb-4 flex items-center">{breadcrumbNode}</div>
      ) : null}

      {sortedEvents.length === 0 ? (
        emptyStateVariant === "table" ? (
          <EventsEmptyTable
            title={resolvedTitle}
            countLabel={formatEventCount(0)}
            message={emptyMessage}
          />
        ) : (
          <EmptyState message={emptyMessage} />
        )
      ) : (
        <UpcomingEventsList
          events={pagedItems}
          title={resolvedTitle}
          sortOrder={sortOrder ?? (view === "upcoming" ? "asc" : "desc")}
          ctaLabel={resolvedCta}
          footerAction={footerAction}
        />
      )}

      <EventsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageButtons={pageButtons}
        onFirst={() => setPage(1)}
        onPrevious={() => setPage((prev) => Math.max(1, prev - 1))}
        onNext={() => setPage((prev) => Math.min(totalPages, prev + 1))}
        onLast={() => setPage(totalPages)}
        onPage={setPage}
        firstIcon={<AnglesLeft className="h-3.5 w-3.5" />}
        previousIcon={<ArrowLeft className="h-3.5 w-3.5" />}
        nextIcon={<ArrowRight className="h-3.5 w-3.5" />}
        lastIcon={<AnglesRight className="h-3.5 w-3.5" />}
      />

    </div>
  );
};

export { EventsListPager };
