"use client";

import { useMemo, useState } from "react";

// Components
import { Text, Divider, Heading, Input } from "@/components/global";
import { EventsSection } from "@/components/events";
import NextLink from "next/link";

// Types
import type { RyanEvent } from "@/lib/types";

// Utilities
import { toEndOfDayTime } from "@/utils/date";

type EventsContainerProps = {
  events: RyanEvent[];
  eventType?: string;
  hidePastEvents?: boolean;
  showUpcomingSection?: boolean;
  showChapters?: boolean;
  displayMode?: "sectioned" | "flat";
};

const EventsContainer = (props: EventsContainerProps) => {
  const {
    events,
    eventType = "Main",
    hidePastEvents = false,
    showUpcomingSection = false,
    showChapters = true,
    displayMode = "sectioned",
  } = props;

  const [query, setQuery] = useState("");

  const eventsWithMeta = useMemo(
    () =>
      events.map((event) => ({
        event,
        time: toEndOfDayTime(event.date),
        isMain: event.chapter.includes(eventType),
      })),
    [events, eventType],
  );

  const filteredEventsWithMeta = useMemo(() => {
    if (!query.trim()) return eventsWithMeta;
    const needle = query.trim().toLowerCase();
    return eventsWithMeta.filter(({ event }) => {
      const haystack = [
        event.title,
        event.city,
        event.venue,
        event.description,
        event.chapter?.join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [eventsWithMeta, query]);

  if (displayMode === "flat") {
    const now = Date.now();
    const activeEvents = filteredEventsWithMeta
      .filter((item) => item.time >= now)
      .map((item) => item.event)
      .sort((a, b) => toEndOfDayTime(a.date) - toEndOfDayTime(b.date));
    const inactiveEvents = filteredEventsWithMeta
      .filter((item) => item.time < now)
      .map((item) => item.event)
      .sort((a, b) => toEndOfDayTime(b.date) - toEndOfDayTime(a.date));

    const showEmptyUpcomingBanner =
      showUpcomingSection &&
      activeEvents.length === 0 &&
      inactiveEvents.length !== 0;

    return (
      <div className="mb-10">
        <div className="mb-6">
          <Input
            label="Search events"
            name="event-search"
            placeholder="Search by city, venue, or event name..."
            inputClassName="pr-4"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
        </div>
        {showEmptyUpcomingBanner && (
          <div className="mb-8">
            <Heading
              className="mb-4 text-center text-3xl title lg:text-4xl lg:text-left"
              size="h2"
            >
              Upcoming Events
            </Heading>
            <div className="space-y-4">
              <Text className="text-lg text-center secondary lg:text-left">
                No upcoming events at this time.
              </Text>
            </div>
            <Divider margins="lg" />
          </div>
        )}

        {!showEmptyUpcomingBanner && activeEvents.length !== 0 && (
          <>
            <EventsSection
              title="Upcoming Events"
              events={activeEvents}
              eventType={eventType}
              showChapters={false}
            />
            {inactiveEvents.length !== 0 && <Divider margins="lg" />}
          </>
        )}

        {inactiveEvents.length !== 0 && (
          <EventsSection
            title="Past Events"
            events={inactiveEvents}
            eventType={eventType}
            hidePastEvents={hidePastEvents}
            showChapters={false}
          />
        )}
      </div>
    );
  }

  const now = Date.now();
  const mainEvents: RyanEvent[] = [];
  const chapterEvents: RyanEvent[] = [];
  const activeEvents: RyanEvent[] = [];
  const inactiveEvents: RyanEvent[] = [];

  for (const item of filteredEventsWithMeta) {
    if (item.isMain) {
      mainEvents.push(item.event);
      if (item.time >= now) {
        activeEvents.push(item.event);
      } else {
        inactiveEvents.push(item.event);
      }
    } else if (item.time >= now) {
      chapterEvents.push(item.event);
    }
  }
  activeEvents.sort((a, b) => toEndOfDayTime(a.date) - toEndOfDayTime(b.date));
  chapterEvents.sort((a, b) => toEndOfDayTime(a.date) - toEndOfDayTime(b.date));
  inactiveEvents.sort((a, b) => toEndOfDayTime(b.date) - toEndOfDayTime(a.date));

  const showEmptyUpcomingBanner =
    showUpcomingSection &&
    activeEvents.length === 0 &&
    inactiveEvents.length !== 0;
  return (
    <div className="mb-10">
      <div className="mb-6">
        <Input
          label="Search events"
          name="event-search"
          placeholder="Search by city, venue, or event name..."
          inputClassName="pr-4"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>
      {showEmptyUpcomingBanner && (
        <div className="mb-8">
          <Heading
            className="mb-4 text-center text-3xl title lg:text-4xl lg:text-left"
            size="h2"
          >
            Upcoming Events
          </Heading>
          <div className="space-y-4">
            <Text className="text-lg text-center secondary lg:text-left">
              No upcoming events at this time.
            </Text>
          </div>
          <Divider margins="lg" />
        </div>
      )}

      {/* Only render the second block if we are NOT in the “empty banner” case */}
      {!showEmptyUpcomingBanner &&
        (activeEvents.length !== 0 || chapterEvents.length !== 0) && (
          <>
            <EventsSection
              title={activeEvents.length !== 0 ? "All Upcoming Events" : "Upcoming Events"}
              events={activeEvents}
              eventType={eventType}
              showChapters={showChapters && chapterEvents.length !== 0}
              chapterEventCount={chapterEvents.length}
              mainEventCount={activeEvents.length}
            />
            {inactiveEvents.length !== 0 && <Divider margins="lg" />}
          </>
        )}

      {inactiveEvents.length !== 0 && (
        <EventsSection
          title="Past Events"
          events={inactiveEvents}
          eventType={eventType}
          hidePastEvents={hidePastEvents}
          showChapters={false}
        />
      )}

      {inactiveEvents.length === 0 && activeEvents.length === 0 && (
        <div className="space-y-4">
          <Text className="text-center text-lg secondary lg:text-left">
            There have not been any local Ryan Meetups in {eventType} yet.
          </Text>
          <Text className="text-center text-lg secondary lg:text-left">
            Reach out to Ryan via Instagram or at{" "}
            <NextLink
              className="font-semibold text-blue-700 dark:text-blue-500 hover:cursor"
              href="mailto:ryan@ryanmeetup.com"
            >
              ryan@ryanmeetup.com
            </NextLink>{" "}
            about scheduling one today!
          </Text>
        </div>
      )}
    </div>
  );
};

export { EventsContainer };
