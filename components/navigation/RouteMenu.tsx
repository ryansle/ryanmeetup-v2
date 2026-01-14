// Components
import {
  Transition,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Divider } from "@/components/global";
import { FaChevronDown as ChevronDown } from "react-icons/fa6";
import NextLink from "next/link";

// Types
import type { Route } from "@/lib/types";
import type { ReactNode } from "react";

type RouteMenuProps = {
  icon: ReactNode;
  title: string;
  routes: Route[];
  pathname: string;
};

const RouteMenu = (props: RouteMenuProps) => {
  const { icon, title, routes, pathname } = props;

  const isSelected = (pathname: string) => {
    if (
      (pathname === "/events" ||
        pathname.includes("/gallery") ||
        pathname === "/awards" ||
        pathname === "/about" ||
        pathname === "/holidays" ||
        pathname === "/rsvp" ||
        pathname.includes("/chapters")) &&
      title === "Community"
    ) {
      return "bg-black/15 text-black shadow-sm dark:bg-white/15 dark:text-white";
    } else if (
      (pathname === "/flyers" ||
        pathname === "/contribute" ||
        pathname === "/cards" ||
        pathname === "/charity" ||
        pathname === "/sponsors" ||
        pathname === "/donate") &&
      title === "Support"
    ) {
      return "bg-black/15 text-black shadow-sm dark:bg-white/15 dark:text-white";
    }
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton
            className={`text-sm flex items-center font-semibold rounded-lg tracking-wide gap-x-2 px-3 py-1.5 transition hover:shadow-sm hover:bg-black/5 2xl:text-base text-black dark:text-white dark:hover:bg-white/10 ${
              isSelected(pathname) ?? ""
            }`}
          >
            {icon} {title}{" "}
            <ChevronDown
              className={`h-3 w-3 dark:fill-gray-200 fill-gray-700 timing ${open && "-rotate-180"}`}
            />
          </PopoverButton>

          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              className="z-50 w-fit rounded-xl border border-black/10 bg-white/95 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-black/95"
              anchor="bottom"
            >
              {routes.map((route, index) => (
                <div key={route.text}>
                  <NextLink
                    className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold tracking-wide text-black transition hover:bg-black/5 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10"
                    href={route.href}
                  >
                    <span className="flex items-center gap-2">
                      {route.icon} {route.text}
                    </span>
                    <span className="text-xs opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </NextLink>
                  {index !== routes.length - 1 && <Divider margins="sm" />}
                </div>
              ))}
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export { RouteMenu };
