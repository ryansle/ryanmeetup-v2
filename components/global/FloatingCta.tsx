"use client";

import { useEffect, useMemo, useState } from "react";

// Componenets
import NextLink from "next/link";
import { Heading, Text } from "@/components/global";

// Utilities
import { usePathname } from "next/navigation";

// Types
import type { ReactNode } from "react";

type FloatingCtaProps = {
  id: string;
  href: string;
  label: string;
  sublabel?: string;
  secondarySublabel?: string;
  icon?: ReactNode;
  hiddenRoutes?: string[];
  dismissDurationMs?: number;
  ariaLabel?: string;
  className?: string;
};

const FloatingCta = (props: FloatingCtaProps) => {
  const {
    id,
    href,
    label,
    sublabel,
    secondarySublabel,
    icon,
    hiddenRoutes = [],
    dismissDurationMs = 1000 * 60 * 60 * 24 * 7,
    ariaLabel = label,
    className,
  } = props;

  const pathname = usePathname();
  const dismissKey = useMemo(() => `floatingCtaDismissedAt:${id}`, [id]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(dismissKey);
      const dismissedAt = stored ? Number(stored) : 0;
      if (dismissedAt && Date.now() - dismissedAt < dismissDurationMs) {
        setIsVisible(false);
      } else {
        if (dismissedAt) {
          window.localStorage.removeItem(dismissKey);
        }
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, [dismissDurationMs, dismissKey]);

  if (!isVisible || hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 z-[9999] pointer-events-auto ${className ?? ""}`}
    >
      <div className="group relative">
        <NextLink href={href} aria-label={ariaLabel}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.2),_transparent_60%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]" />
            <div className="absolute -inset-1 rounded-3xl bg-[conic-gradient(from_180deg,_rgba(0,0,0,0.35),_rgba(0,0,0,0.05),_rgba(0,0,0,0.35))] opacity-40 blur-md dark:bg-[conic-gradient(from_180deg,_rgba(255,255,255,0.35),_rgba(255,255,255,0.05),_rgba(255,255,255,0.35))]" />
            <div className="relative inline-flex items-center gap-2 rounded-2xl border border-[#ad8f4f] bg-[#073326] px-2 py-1.5 text-white shadow-[0_12px_30px_-25px_rgba(0,0,0,0.65)] transition group-hover:-translate-y-1 hover:-translate-y-1 hover:border-[#c8a45a] sm:gap-4 sm:px-5 sm:py-4 sm:shadow-[0_25px_60px_-35px_rgba(0,0,0,0.65)]">
              {icon && (
                <div className="flex h-6 w-6 items-center justify-center rounded-2xl bg-[#002414] text-[#ad8f4f] shadow-md sm:h-11 sm:w-11">
                  {icon}
                </div>
              )}
              <div>
                <Heading className="text-lg text-[#f4e7c1] sm:text-2xl" size="h4">
                  {label}
                </Heading>
                {(sublabel || secondarySublabel) && (
                  <div className="space-y-0.5">
                    {sublabel && (
                      <Text className="text-xs md:text-sm uppercase text-white dark:text-[#ad8f4f]/90">
                        {sublabel}
                      </Text>
                    )}
                    {secondarySublabel && (
                      <Text className="text-xs md:text-sm uppercase text-white dark:text-[#ad8f4f]/90">
                        {secondarySublabel}
                      </Text>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </NextLink>
        <button
          type="button"
          onClick={() => {
            setIsVisible(false);
            if (typeof window === "undefined") return;
            try {
              window.localStorage.setItem(dismissKey, Date.now().toString());
            } catch {
              // Ignore storage access errors.
            }
          }}
          className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-[#ad8f4f] bg-[#073326] text-[10px] font-semibold text-[#f4e7c1] shadow-md transition group-hover:-translate-y-1 hover:-translate-y-0.5 hover:border-[#c8a45a] sm:-top-2 sm:-right-2 sm:h-7 sm:w-7 sm:text-xs"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export { FloatingCta };
