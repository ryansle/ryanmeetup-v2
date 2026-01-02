"use client";

// Components
import NextImage from "next/image";
import NextLink from "next/link";
import { Heading, Divider, Text, Card, Button } from "@/components/global";
import { Transition } from "@headlessui/react";
import { gallery } from "@/lib/constants";
import {
  FaArrowRight as ArrowRight,
  FaRegNewspaper as Newsletter,
} from "react-icons/fa6";
import {
  MdOutlineEvent as Event,
  MdGroups as Community,
  MdVolunteerActivism as Heart,
} from "react-icons/md";

// Types
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const Info = () => {
  return (
    <div className="space-y-4 xl:space-y-8">
      <div className="space-y-2">
        <Heading
          className="text-5xl title"
          size="h1"
        >
          If your name is Ryan,
        </Heading>
        <Heading
          className="text-3xl title"
          size="h2"
        >
          you&apos;re in the right place.
        </Heading>
      </div>

      <div className="space-y-4 text-base sm:text-lg text-black/70 dark:text-white/70">
        <Text>
          Welcome to the Ryan Meetup — a not-for-profit organization run by
          Ryans, for Ryans, with the ultimate goal of assembling as many
          Ryans as possible.
        </Text>
        <Text>
            One day, we aim to host RyanCon, and break the world record for
            the{" "}
            <NextLink
              href="https://www.guinnessworldrecords.com/world-records/largest-same-name-gathering-first-name"
              className="font-medium text-blue-700 dark:text-blue-500 hover:underline"
            >
              largest same name gathering
            </NextLink>{" "}
            in history.
          </Text>
          <Text>See you soon, Ryan.</Text>
      </div>
    </div>
  );
};

const Actions = () => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button.Link
        href="/newsletter"
        leftIcon={<Newsletter className="h-5 w-5" />}
        variant="primary"
        size="md"
        fullWidth
        className="w-full"
        newTab={false}
      >
        <span className="sm:hidden">Join newsletter</span>
        <span className="hidden sm:inline">Sign up for our newsletter</span>
      </Button.Link>
    </div>
  );
};

type StatItem = {
  value: string;
  label: string;
  icon: ReactNode;
  href: string;
};

type LandingProps = {
  stats: StatItem[];
};

const Overview = (props: { stats: StatItem[] }) => {
  const { stats } = props;

  return (
    <div>
      <Heading className="text-3xl title" size="h2">
        RYAN MEETUP
      </Heading>
      <Text className="mt-2 text-sm uppercase tracking-widest text-black/60 dark:text-white/60">
        What this community has grown into
      </Text>

      <div className="grid grid-cols-2 gap-3 pt-4 text-center sm:text-left">
        {stats.map((stat) => (
          <NextLink
            key={stat.label}
            href={stat.href}
            className="rounded-2xl border border-black/10 bg-white/80 px-3 py-4 shadow-sm dark:border-white/10 dark:bg-white/5 flex flex-col items-start gap-3 transition hover:-translate-y-1 hover:shadow-lg hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 dark:focus-visible:ring-white/40"
          >
            <div className="flex w-full items-center gap-3 sm:w-auto">
              <div className="flex h-12 w-12 md:h-10 md:w-10 lg:w-8 lg:h-8 xl:h-16 xl:w-16 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-black/5 text-black/70 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
                <span className="text-4xl">{stat.icon}</span>
              </div>
              <Heading className="text-2xl md:text-3xl xl:text-4xl font-cooper">
                {stat.value}
              </Heading>
            </div>
            <Text className="w-full text-left text-xs sm:w-auto md:text-sm lg:text-[10px] xl:text-sm uppercase tracking-[0.12em] sm:tracking-[0.2em] whitespace-nowrap text-black/60 dark:text-white/60">
              {stat.label}
            </Text>
          </NextLink>
        ))}
      </div>
    </div>
  );
};

const Landing = (props: LandingProps) => {
  const { stats } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  const highlights = [
    {
      icon: <Event className="h-5 w-5" />,
      title: "Ryan Meetup Events",
      body: "Don\'t miss the chance to attend the only party where everyone knows your name.",
      href: "/events",
      cta: "Explore events",
    },
    {
      icon: <Community className="h-5 w-5" />,
      title: "Local Chapters",
      body: "Find Ryans near you and build community in your own city.",
      href: "/chapters",
      cta: "Find a chapter",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Support With Merch",
      body: "Grab official Ryan Meetup gear and help power our next gatherings.",
      href: "/merch",
      cta: "Shop the store",
    },
  ];

  const slides = gallery.map((photo) => ({
    src: photo.imageUrl,
    alt: photo.title,
  }));

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
  const prevIndex = (activeSlide - 1 + slides.length) % slides.length;
  const nextIndex = (activeSlide + 1) % slides.length;
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden text-black dark:text-white">
      <div className="relative flex flex-col gap-8 lg:gap-16 lg:grid lg:grid-cols-2 lg:items-center">
        <div className="order-2 flex flex-col gap-4 lg:order-1">
          <Info />
          <Actions />
          <Divider />
          <Overview stats={stats} />
        </div>

        <div className="order-1 flex flex-col space-y-6 lg:order-2">
          <div className="relative h-60 overflow-hidden rounded-3xl border border-black/10 shadow-2xl sm:h-80 lg:h-[360px] dark:border-white/10 [perspective:1200px]">
            <div className="pointer-events-none absolute inset-y-6 left-2 z-0 w-16 -translate-x-1 overflow-hidden rounded-2xl border border-white/20 bg-black/10 opacity-60 shadow-lg sm:inset-y-8 sm:left-3 sm:w-20 sm:-translate-x-2">
              <NextImage
                className="h-full w-full object-cover"
                src={slides[prevIndex].src}
                fill
                alt={slides[prevIndex].alt}
              />
            </div>
            <div className="pointer-events-none absolute inset-y-6 right-2 z-0 w-16 translate-x-1 overflow-hidden rounded-2xl border border-white/20 bg-black/10 opacity-60 shadow-lg sm:inset-y-8 sm:right-3 sm:w-20 sm:translate-x-2">
              <NextImage
                className="h-full w-full object-cover"
                src={slides[nextIndex].src}
                fill
                alt={slides[nextIndex].alt}
              />
            </div>
            {slides.map((slide, index) => (
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
            <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white">
              Established 2023
            </div>
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-2 backdrop-blur">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-2 w-2 rounded-full transition ${
                    activeSlide === index
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden gap-4 lg:grid">
            {highlights.map((item, index) => (
              <Transition
                key={item.title}
                appear={true}
                show={true}
                enter="transition duration-700 ease-out"
                enterFrom="opacity-0 translate-y-6"
                enterTo="opacity-100 translate-y-0"
              >
                <Card
                  variant="soft"
                  size="sm"
                  hover
                  className={`flex flex-col gap-3 ${
                    index === 0
                      ? "delay-100"
                      : index === 1
                        ? "delay-200"
                        : "delay-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-base font-semibold uppercase tracking-wider">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black text-white dark:border-white/10 dark:bg-white dark:text-black">
                        {item.icon}
                      </span>
                      {item.title}
                    </div>
                    <NextLink
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                    >
                      {item.cta}
                      <ArrowRight className="h-3 w-3" />
                    </NextLink>
                  </div>
                  <Text className="text-base text-black/70 dark:text-white/70">
                    {item.body}
                  </Text>
                </Card>
              </Transition>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Landing };
