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
      return "bg-gray-300 dark:bg-gray-800";
    } else if (
      (pathname === "/flyers" ||
        pathname === "/contribute" ||
        pathname === "/cards" ||
        pathname === "/charity" ||
        pathname === "/sponsors" ||
        pathname === "/donate") &&
      title === "Support"
    ) {
      return "bg-gray-300 dark:bg-gray-800";
    }
  };

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton
            className={`${isSelected(pathname)} text-sm flex items-center text-black font-semibold rounded-lg tracking-wide gap-x-2 px-2 py-1 border border-white timing hover:border hover:border-gray-700 2xl:text-base dark:text-white dark:border-black`}
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
              className="z-50 bg-white dark:bg-black w-fit rounded-lg border border-gray-700 p-2 mt-2"
              anchor="bottom"
            >
              {routes.map((route, index) => (
                <div key={route.text}>
                  <NextLink
                    className="flex title items-center font-semibold tracking-wide gap-x-2 px-2 py-1 hover:bg-gray-300 dark:hover:bg-gray-700 hover:rounded"
                    href={route.href}
                  >
                    {route.icon} {route.text}
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
