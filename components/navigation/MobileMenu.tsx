// Components
import {
  Transition,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import NextLink from "next/link";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { FaChevronDown as ChevronDown } from "react-icons/fa6";
import { FaDollarSign as Dollar } from "react-icons/fa";

// Types
import type { ReactNode } from "react";
import type { Route } from "@/lib/types";

type MenuOption = {
  icon: ReactNode;
  text: string;
  href: string;
  subroutes?: Route[];
};

type MobileMenuProps = {
  content: MenuOption[];
};

const MobileMenu = (props: MobileMenuProps) => {
  const { content } = props;

  return (
    <div className="flex items-center justify-center">
      <div className="relative inline-block text-left z-10">
        <Popover className="relative">
          <PopoverButton className="text-sm flex items-center font-semibold rounded-lg tracking-wide gap-x-2 px-3 py-1.5 transition hover:shadow-sm hover:bg-black/5 text-black dark:text-white dark:hover:text-white dark:hover:bg-white/10">
            <Hamburger />
            Menu
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
              className="z-50 w-56 rounded-xl border border-black/10 bg-white/95 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-black/95"
              anchor="bottom end"
            >
              <NextLink
                href="/donate"
                className="mb-2 flex w-full items-center justify-center gap-2 rounded-lg bg-black px-3 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                <Dollar className="h-4 w-4" /> Donate
              </NextLink>
              {content.map((row, idx) =>
                !row.subroutes ? (
                  <NextLink
                    key={row.text}
                    className={`group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold tracking-wide text-black transition hover:bg-black/5 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 ${
                      idx % 2 === 0 ? "bg-black/5 dark:bg-white/5" : ""
                    }`}
                    href={row.href}
                  >
                    <span className="flex items-center gap-2">
                      {row.icon} {row.text}
                    </span>
                    <span className="text-xs opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </NextLink>
                ) : (
                  <Disclosure key={row.text}>
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-semibold tracking-wide text-black transition hover:bg-black/5 dark:text-white/80 dark:hover:text-white dark:hover:bg-white/10 ${
                            idx % 2 === 0 ? "bg-black/5 dark:bg-white/5" : ""
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {row.icon} {row.text}
                          </span>
                          <ChevronDown
                            className={`h-3 w-3 fill-gray-700 timing dark:fill-gray-200 ${open && "-rotate-180"}`}
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="pl-4">
                          {row.subroutes &&
                            row.subroutes.map((route) => (
                              <NextLink
                                key={route.text}
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
                            ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ),
              )}
            </PopoverPanel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export { MobileMenu };
