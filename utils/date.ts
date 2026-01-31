import type { RyanEvent } from "@/lib/types";

const toEndOfDayTime = (value: RyanEvent["date"]) => {
  if (typeof value === "string") {
    const dateOnlyMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (dateOnlyMatch) {
      const year = Number(dateOnlyMatch[1]);
      const monthIndex = Number(dateOnlyMatch[2]) - 1;
      const day = Number(dateOnlyMatch[3]);
      return new Date(year, monthIndex, day, 23, 59, 59, 999).getTime();
    }
  }

  const eventDate = new Date(value as unknown as string);
  const endOfDay = new Date(eventDate);
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay.getTime();
};

const isEventUpcoming = (value: RyanEvent["date"], now = Date.now()) =>
  toEndOfDayTime(value) >= now;

const formatEventDate = (value: Date | string, locale?: string) => {
  if (typeof value === "string") {
    const dateOnlyMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (dateOnlyMatch) {
      const year = Number(dateOnlyMatch[1]);
      const monthIndex = Number(dateOnlyMatch[2]) - 1;
      const day = Number(dateOnlyMatch[3]);
      return new Date(year, monthIndex, day).toLocaleDateString(locale);
    }
  }

  return new Date(value).toLocaleDateString(locale);
};

export { formatEventDate, isEventUpcoming, toEndOfDayTime };
