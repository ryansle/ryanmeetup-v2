"use client";

import NextImage from "next/image";
import { Badge } from "@/components/global";
import { useEffect, useRef, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  subtitle?: string;
  city?: string;
};

type RotatingGalleryProps = {
  items: GalleryItem[];
  intervalMs?: number;
};

const TRANSITION_MS = 900;

const RotatingGallery = (props: RotatingGalleryProps) => {
  const { items, intervalMs = 6500 } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIsTransitioning(true);
      timeoutRef.current = window.setTimeout(() => {
        setActiveIndex((current) => (current + 1) % items.length);
        setIsTransitioning(false);
      }, TRANSITION_MS);
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [intervalMs, items.length]);

  if (items.length === 0) {
    return null;
  }

  const prevIndex = (activeIndex - 1 + items.length) % items.length;
  const nextIndex = (activeIndex + 1) % items.length;
  const activeItem = items[activeIndex];
  const nextItem = items[nextIndex];
  const prevItem = items[prevIndex];
  const badgeSubtitle = activeItem.subtitle;
  const badgeCity = activeItem.city;

  return (
    <div className="relative h-60 overflow-visible sm:h-80 lg:h-[360px]">
      {(badgeSubtitle || badgeCity) && (
        <div className="pointer-events-none absolute right-6 top-6 z-30 flex flex-col items-end gap-2">
          {badgeSubtitle && <Badge>{badgeSubtitle}</Badge>}
          {badgeCity && <Badge>📍 {badgeCity} shit balls fuck</Badge>}
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 z-0 h-[82%] w-[78%] -translate-y-1/2 -translate-x-6 rotate-[-4deg] overflow-hidden rounded-3xl border border-black/10 shadow-xl dark:border-white/10">
          <NextImage src={prevItem.src} alt={prevItem.alt} fill className="object-cover brightness-90" />
        </div>

        <div className="absolute right-0 top-1/2 z-0 h-[82%] w-[78%] -translate-y-1/2 translate-x-6 rotate-[4deg] overflow-hidden rounded-3xl border border-black/10 shadow-xl dark:border-white/10">
          <NextImage src={nextItem.src} alt={nextItem.alt} fill className="object-cover brightness-90" />
        </div>

        <div
          className="relative z-10 h-full w-[88%] overflow-hidden rounded-3xl border border-black/10 bg-black/5 shadow-2xl dark:border-white/10"
        >
          <div className="absolute inset-0">
            <NextImage src={nextItem.src} alt={nextItem.alt} fill className="object-cover" />
          </div>
          <div
            className={`absolute inset-0 transition-opacity ease-in-out [will-change:opacity] ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
          >
            <NextImage src={activeItem.src} alt={activeItem.alt} fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        </div>
      </div>
    </div>
  );
};

export { RotatingGallery };
