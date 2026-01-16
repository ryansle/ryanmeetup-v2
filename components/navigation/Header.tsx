"use client";

// Components
import { Heading } from "@/components/global";
import { RouteMenu, ThemeToggle } from "@/components/navigation";
import NextLink from "next/link";
import { MobileMenu } from "@/components/navigation";

// Utilities
import { usePathname } from "next/navigation";
import { layoutPaddingX, routes } from "@/lib/constants";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 relative border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/70">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_10%,rgba(0,0,0,0.06),transparent_60%),radial-gradient(45%_70%_at_80%_0%,rgba(0,0,0,0.04),transparent_55%)] dark:bg-[radial-gradient(60%_80%_at_20%_10%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(45%_70%_at_80%_0%,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className={`relative flex items-center justify-between py-3 ${layoutPaddingX}`}>
        <NextLink
          href="/"
          className="title group flex items-center tracking-[0.2em] timing hover:scale-105"
        >
          <Heading className="text-3xl sm:text-4xl" size="h1">
            RYAN
          </Heading>
        </NextLink>

        <div className="ml-auto hidden items-center gap-2 overflow-x-auto rounded-full border border-black/10 bg-white/70 p-1.5 shadow-sm backdrop-blur dark:border-white/20 dark:bg-white/10 dark:ring-1 dark:ring-white/10 2xl:flex">
          {routes.map((route) =>
            !route.subroutes ? (
              <NextLink
                key={route.text}
                className={`text-sm flex items-center font-semibold rounded-full text-black timing tracking-wide gap-x-2 px-4 py-2 transition hover:shadow-sm hover:bg-black/5 dark:text-white dark:hover:bg-white/10 2xl:text-base ${
                  route.href.includes(pathname) && pathname !== "/"
                    ? "bg-black/15 text-black shadow-sm ring-1 ring-black/10 dark:bg-white/25 dark:text-white dark:ring-white/20"
                    : ""
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

        <div className="ml-auto flex items-center gap-x-4 2xl:hidden">
          <MobileMenu content={routes} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export { Header };
