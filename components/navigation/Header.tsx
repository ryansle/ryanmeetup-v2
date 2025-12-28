"use client";

// Components
import { Heading } from "@/components/global";
import { RouteMenu, ThemeToggle } from "@/components/navigation";
import NextLink from "next/link";
import { MobileMenu } from "@/components/navigation";

// Utilities
import { usePathname } from "next/navigation";
import { routes } from "@/lib/constants";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex justify-between border-b border-gray-400 dark:border-gray-700 px-4 py-4 bg-white dark:bg-black lg:px-32 2xl:px-48 3xl:px-[350px] 4xl:px-[500px]">
      <NextLink href="/" className="title timing hover:scale-105">
        <Heading className="text-4xl" size="h1">
          RYAN
        </Heading>
      </NextLink>

      <div className="ml-auto hidden 2xl:flex items-center space-x-4 overflow-y-scroll">
        {routes.map((route) =>
          !route.subroutes ? (
            <NextLink
              key={route.text}
              className={`text-sm flex items-center font-semibold rounded-lg text-black tracking-wide gap-x-2 px-3 py-1.5 border transition hover:border-black/40 hover:shadow-sm dark:text-white/80 dark:hover:text-white dark:hover:border-white/30 2xl:text-base ${
                route.href.includes(pathname) && pathname !== "/"
                  ? "border-black/30 bg-black text-white dark:border-white/30 dark:bg-white/10 dark:text-white"
                  : "border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5"
              }`}
              href={route.href}
            >
              {route.icon} {route.text}
            </NextLink>
          ) : (
            <RouteMenu
              key={route.text}
              icon={route.icon}
              title={route.text}
              routes={route.subroutes}
              pathname={pathname}
            />
          ),
        )}

        <ThemeToggle />
      </div>

      <div className="ml-auto flex gap-x-4 2xl:hidden">
        <MobileMenu content={routes} />
        <ThemeToggle />
      </div>
    </header>
  );
};

export { Header };
