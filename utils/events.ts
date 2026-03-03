import type { RyanEvent } from "@/lib/types";
import { sortEventsByDate, splitEventsByTime } from "@/utils/date";

const buildEventSearchText = (event: RyanEvent) =>
  [
    event.title,
    event.city,
    event.venue,
    event.description,
    event.chapter?.join(" "),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

const filterEventsByQuery = (events: RyanEvent[], query: string) => {
  const needle = query.trim().toLowerCase();
  if (!needle) return events;
  return events.filter((event) => buildEventSearchText(event).includes(needle));
};

const getEventsByView = (events: RyanEvent[], view: "upcoming" | "past") => {
  const { upcoming, past } = splitEventsByTime(events);
  return view === "upcoming" ? upcoming : past;
};

const getSortedEventsByView = (
  events: RyanEvent[],
  view: "upcoming" | "past",
  sortOrder?: "asc" | "desc",
) => {
  const order = sortOrder ?? (view === "upcoming" ? "asc" : "desc");
  return sortEventsByDate(getEventsByView(events, view), order);
};

const getEventEmptyMessage = (view: "upcoming" | "past") =>
  view === "upcoming"
    ? "No upcoming events right now. Check back soon!"
    : "No past events yet.";

export {
  buildEventSearchText,
  filterEventsByQuery,
  getEventsByView,
  getSortedEventsByView,
  getEventEmptyMessage,
};
