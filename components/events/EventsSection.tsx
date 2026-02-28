"use client";

// Components
import { Heading, Text } from "@/components/global";
import { Event, Chapters } from "@/components/events";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { FaChevronDown as ChevronDown } from "react-icons/fa";

// Types
import type { RyanEvent } from "@/lib/types";

// Utilities
import { usePathname } from "next/navigation";

type EventsSectionProps = {
  events: RyanEvent[];
  title: string;
  eventType: string;
  hidePastEvents?: boolean;
  showChapters: boolean;
  chapterEventCount?: number;
  mainEventCount?: number;
};

type ContainerProps = {
  eventType: string;
  events: RyanEvent[];
  title: string;
  showChapters: boolean;
};

const Container = (props: ContainerProps) => {
  const { eventType, events, title, showChapters } = props;

  const pathname = usePathname();

  return (
    <div>
      {eventType === "Main" ? (
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-3">
          {title.includes("Upcoming Events") &&
            showChapters &&
            !pathname.includes("/chapters") && <Chapters />}

          {events?.map((event, index) => (
            <Event key={index} event={event as RyanEvent} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 xl:grid-cols-2">
          {events?.map((event, index) => (
            <Event key={index} event={event as RyanEvent} />
          ))}
        </div>
      )}
    </div>
  );
};

const EventsSection = (props: EventsSectionProps) => {
  const {
    events,
    title,
    eventType,
    hidePastEvents = false,
    showChapters,
    chapterEventCount = 0,
    mainEventCount = events.length,
  } = props;

  const isUpcomingMainSection =
    title === "Upcoming Events" && eventType === "Main";
  const hasOnlyChapterUpcoming =
    isUpcomingMainSection && showChapters && chapterEventCount > 0 && mainEventCount === 0;
  const displayCount =
    isUpcomingMainSection && showChapters
      ? chapterEventCount + mainEventCount
      : events.length;
  const eventCountLabel = hasOnlyChapterUpcoming
    ? `${chapterEventCount} chapter event${
        chapterEventCount === 1 ? "" : "s"
      }`
    : `${displayCount} event${displayCount === 1 ? "" : "s"}`;

  return (
    <div className="mb-10">
      {hidePastEvents ? (
        <Disclosure as="div" className="w-full">
          {({ open }) => (
            <>
              <DisclosureButton className="gap-x-4 mb-2 w-full flex items-center hover:underline hover:scale-102 timing">
                <div className="flex flex-1 flex-col gap-2 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
                  <Heading className="text-3xl title lg:text-4xl" size="h2">
                    {title}
                  </Heading>
                  <Text className="text-xs uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
                    {eventCountLabel}
                  </Text>
                </div>

                <div className="flex justify-end">
                  <ChevronDown className={`timing ${open && "-rotate-180"}`} />
                </div>
              </DisclosureButton>

              <div className="overflow-hidden">
                <Transition
                  enter="duration-200 ease-in-out"
                  enterFrom="opacity-0 -translate-y-6"
                  enterTo="opacity-100 translate-y-0"
                  leave="duration-300 ease-in-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-6"
                >
                  <DisclosurePanel className="origin-top transition">
                    <Container
                      eventType={eventType}
                      events={events}
                      title={title}
                      showChapters={showChapters}
                    />
                  </DisclosurePanel>
                </Transition>
              </div>
            </>
          )}
        </Disclosure>
      ) : (
        <div>
          <div className="mb-4 flex flex-col gap-2 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <Heading className="text-3xl title lg:text-4xl" size="h2">
              {title}
            </Heading>
            <Text className="text-xs uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
              {eventCountLabel}
            </Text>
          </div>

          <Container
            eventType={eventType}
            events={events}
            title={title}
            showChapters={showChapters}
          />
        </div>
      )}
    </div>
  );
};

export { EventsSection };
