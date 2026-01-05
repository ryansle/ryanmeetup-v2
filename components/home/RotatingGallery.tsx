"use client";

import NextImage from "next/image";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Badge } from "@/components/global";
import { FaChevronLeft as ChevronLeft, FaChevronRight as ChevronRight } from "react-icons/fa6";

type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  city?: string;
};

type RotatingGalleryProps = {
  items: GalleryItem[];
  intervalMs?: number;
};

const RotatingGallery = (props: RotatingGalleryProps) => {
  const { items, intervalMs = 6000 } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const animationVariants = {
    flip: {
      enter: "transition duration-700 ease-out",
      enterFrom: "opacity-0 [transform:rotateY(-90deg)]",
      enterTo: "opacity-100 [transform:rotateY(0deg)]",
      leave: "transition duration-700 ease-in",
      leaveFrom: "opacity-100 [transform:rotateY(0deg)]",
      leaveTo: "opacity-0 [transform:rotateY(90deg)]",
    },
    slide: {
      enter: "transition duration-700 ease-out",
      enterFrom: "opacity-0 translate-x-10",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition duration-700 ease-in",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 -translate-x-10",
    },
    zoom: {
      enter: "transition duration-700 ease-out",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition duration-700 ease-in",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-105",
    },
  };

  const animationStyle = animationVariants.slide;

  useEffect(() => {
    setActiveSlide(0);
  }, [items.length]);

  useEffect(() => {
    if (items.length <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % items.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs, items.length]);

  if (items.length === 0) {
    return null;
  }

  const prevIndex = (activeSlide - 1 + items.length) % items.length;
  const nextIndex = (activeSlide + 1) % items.length;

  return (
    <div className="relative h-60 overflow-hidden rounded-3xl border border-black/10 shadow-2xl sm:h-80 lg:h-[360px] dark:border-white/10 [perspective:1200px]">
      <div className="pointer-events-none absolute inset-y-6 left-2 z-0 w-16 -translate-x-1 overflow-hidden rounded-2xl border border-white/20 bg-black/10 opacity-60 shadow-lg sm:inset-y-8 sm:left-3 sm:w-20 sm:-translate-x-2">
        <NextImage
          className="h-full w-full object-cover"
          src={items[prevIndex].src}
          fill
          alt={items[prevIndex].alt}
        />
      </div>
      <div className="pointer-events-none absolute inset-y-6 right-2 z-0 w-16 translate-x-1 overflow-hidden rounded-2xl border border-white/20 bg-black/10 opacity-60 shadow-lg sm:inset-y-8 sm:right-3 sm:w-20 sm:translate-x-2">
        <NextImage
          className="h-full w-full object-cover"
          src={items[nextIndex].src}
          fill
          alt={items[nextIndex].alt}
        />
      </div>
      {items.map((slide, index) => (
        <Transition
          key={slide.src}
          appear={true}
          show={activeSlide === index}
          enter={animationStyle.enter}
          enterFrom={animationStyle.enterFrom}
          enterTo={animationStyle.enterTo}
          leave={animationStyle.leave}
          leaveFrom={animationStyle.leaveFrom}
          leaveTo={animationStyle.leaveTo}
        >
          <div className="absolute inset-0 z-10 [transform-style:preserve-3d] [backface-visibility:hidden]">
            <NextImage
              className="rounded-3xl"
              src={slide.src}
              fill
              alt={slide.alt}
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </Transition>
      ))}
      {items[activeSlide]?.title && (
        <div className="pointer-events-none absolute right-4 top-4 z-20">
          <Badge>{items[activeSlide].title}</Badge>
        </div>
      )}
      {items[activeSlide]?.city && (
        <div className="pointer-events-none absolute left-4 top-4 z-20">
          <Badge>📍 {items[activeSlide].city}</Badge>
        </div>
      )}
      <button
        type="button"
        onClick={() => setActiveSlide((current) => (current - 1 + items.length) % items.length)}
        aria-label="Show previous photo"
        className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => setActiveSlide((current) => (current + 1) % items.length)}
        aria-label="Show next photo"
        className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white shadow-lg backdrop-blur transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2 backdrop-blur">
        {items.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition ${
              activeSlide === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export { RotatingGallery };
