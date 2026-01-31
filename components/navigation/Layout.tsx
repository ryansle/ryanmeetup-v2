"use client";

import { useState, useEffect } from "react";

// Components
import { Banner, Header, NewFooter } from "@/components/navigation";
import NextLink from "next/link";
import { Heading, Text } from "@/components/global";
import { PiCloverFill as Clover  } from "react-icons/pi";
import { useTheme } from "next-themes";
import { layoutPaddingX } from "@/lib/constants";
import { usePathname } from "next/navigation";

// Types
import type { ReactNode } from "react";

type LayoutProps = {
  className?: string;
  children: ReactNode;
  fullscreen?: boolean;
};

const Layout = (props: LayoutProps) => {
  const { className, children, fullscreen = false } = props;

  const { theme } = useTheme();
  const pathname = usePathname();
  const hiddenRsvpRoutes = ["/rsvp", "/awards", "/name-change"];

  const [isClient, setIsClient] = useState(false);
  const [showFloatingRsvp, setShowFloatingRsvp] = useState(false);
  const dismissKey = "rsvpFloatingDismissedAt";
  const dismissDurationMs = 1000 * 60 * 60 * 24 * 7;

  useEffect(() => {
    setIsClient(true);
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(dismissKey);
      const dismissedAt = stored ? Number(stored) : 0;
      if (dismissedAt && Date.now() - dismissedAt < dismissDurationMs) {
        setShowFloatingRsvp(false);
      } else {
        if (dismissedAt) {
          window.localStorage.removeItem(dismissKey);
        }
        setShowFloatingRsvp(true);
      }
    } catch {
      // Ignore storage access errors and show the button by default.
      setShowFloatingRsvp(true);
    }
  }, []);

  return (
    <main>
      <Banner />
      <Header />
      <section
        className={`${className} 
                    text-white h-full flex flex-col dark:bg-black dark:text-white
                    ${isClient && theme === "light" ? "bg-[url('/crumbled.png')] bg-repeat bg-cover bg-white" : "bg-white from-white bg-gradient-to-b from-neutral-00 to-neutral-200 to-neutral-00 dark:from-neutral-900 dark:to-black"} 
                    ${fullscreen ? "bg-black" : `py-8 ${layoutPaddingX}`}`}
      >
        {children}
      </section>

      {showFloatingRsvp && !hiddenRsvpRoutes.includes(pathname) && (
        <div className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 z-[9999] pointer-events-auto">
          <div className="group relative">
            <NextLink href="/rsvp" aria-label="RSVP to upcoming events">
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.2),_transparent_60%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]" />
                <div className="absolute -inset-1 rounded-3xl bg-[conic-gradient(from_180deg,_rgba(0,0,0,0.35),_rgba(0,0,0,0.05),_rgba(0,0,0,0.35))] opacity-40 blur-md dark:bg-[conic-gradient(from_180deg,_rgba(255,255,255,0.35),_rgba(255,255,255,0.05),_rgba(255,255,255,0.35))]" />
                <div className="relative inline-flex items-center gap-2 rounded-2xl border border-[#ad8f4f] bg-[#073326] px-2 py-1.5 text-white shadow-[0_12px_30px_-25px_rgba(0,0,0,0.65)] transition group-hover:-translate-y-1 hover:-translate-y-1 hover:border-[#c8a45a] sm:gap-4 sm:px-5 sm:py-4 sm:shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-2xl bg-[#002414] text-[#ad8f4f] shadow-md sm:h-11 sm:w-11">
                    <Clover className="text-lg fill-[#ad8f4f]" />
                  </div>
                  <div>
                    <Heading className="text-sm text-[#f4e7c1] sm:text-2xl" size="h4">
                      RSVP
                    </Heading>
                    <Text className="text-[8px] uppercase text-[#ad8f4f]/90 sm:text-xs">
                      To St. Ryan&apos;s Day
                    </Text>
                  </div>
                </div>
              </div>
            </NextLink>
            <button
              type="button"
              onClick={() => {
                setShowFloatingRsvp(false);
                if (typeof window === "undefined") return;
                try {
                  window.localStorage.setItem(
                    dismissKey,
                    Date.now().toString(),
                  );
                } catch {
                  // Ignore storage access errors.
                }
              }}
              className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-[#ad8f4f] bg-[#073326] text-[10px] font-semibold text-[#f4e7c1] shadow-md transition group-hover:-translate-y-1 hover:-translate-y-0.5 hover:border-[#c8a45a] sm:-top-2 sm:-right-2 sm:h-7 sm:w-7 sm:text-xs"
              aria-label="Dismiss RSVP button"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <NewFooter />
    </main>
  );
};

export { Layout };
