import type { ReactNode } from "react";
import { FaCity as City } from "react-icons/fa";
import { MdGroup as Group } from "react-icons/md";
import { IoCalendarNumber as Calendar } from "react-icons/io5";
import { FaListUl as List } from "react-icons/fa";

type BreadcrumbItem = {
  icon: ReactNode;
  href: string;
  title: string;
};

const iconStyle = "mr-2 fill-black h-4 w-4 shrink-0 dark:fill-white";

const getChapterBreadcrumbs = (slug: string, city: string): BreadcrumbItem[] => [
  {
    icon: <Group className={iconStyle} />,
    href: "/chapters",
    title: "Chapters",
  },
  {
    icon: <City className={iconStyle} />,
    href: `/chapters/${slug}`,
    title: city,
  },
];

const getUpcomingEventsBreadcrumbs = (): BreadcrumbItem[] => [
  {
    icon: <Calendar className={iconStyle} />,
    href: "/events",
    title: "Events",
  },
  {
    icon: <List className={iconStyle} />,
    href: "/events/upcoming",
    title: "Upcoming",
  },
];

export type { BreadcrumbItem };
export { getChapterBreadcrumbs, getUpcomingEventsBreadcrumbs };
