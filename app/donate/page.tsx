// Components
import { Layout } from "@/components/navigation";
import { Heading, Text } from "@/components/global";
import QRCode from "react-qr-code";
import NextLink from "next/link";
import NextImage from "next/image";

// Types
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Donate to the Ryan Meetup",
  description: "Donate to the Ryan Meetup to help keep events funded.",
  openGraph: {
    url: "https://ryanmeetup.com/donate",
    title: "Donate to the Ryan Meetup",
    description: "Donate to the Ryan Meetup to help keep events funded.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/donate.webp",
        width: 1000,
        height: 714,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

type DonateOptionCardProps = {
  visual: ReactNode;
  logoSrc: string;
  logoAlt: string;
  value: string;
  valueHref?: string;
  method: string;
};

const DonateOptionCard = (props: DonateOptionCardProps) => {
  const { visual, logoSrc, logoAlt, value, valueHref, method } = props;

  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40">
      <div className="mx-auto flex h-[200px] w-[200px] items-center justify-center rounded-2xl border border-black/10 bg-white p-3 dark:border-white/10 dark:bg-white/90">
        {visual}
      </div>
      <div className="relative mx-auto mt-3 h-16 w-36">
        <NextImage
          src={logoSrc}
          fill
          alt={logoAlt}
          style={{ objectFit: "contain" }}
        />
      </div>
      {valueHref ? (
        <NextLink
          href={valueHref}
          className="mt-2 inline-flex text-lg font-semibold text-blue-700 hover:underline dark:text-blue-500"
        >
          {value}
        </NextLink>
      ) : (
        <Text className="mt-2 text-lg font-semibold text-blue-700 dark:text-blue-500">
          {value}
        </Text>
      )}
      <Text className="mt-1 text-xs uppercase tracking-[0.3em] text-black/50 dark:text-white/50">
        {method}
      </Text>
    </div>
  );
};

const DonatePage = async () => {
  const backendItems = [
    {
      title: "Vercel web hosting",
      body: "Keeps our site live and tracks visitor analytics.",
    },
    {
      title: "Google Drive storage",
      body: "Thousands of event photos stored in 4K.",
    },
    {
      title: "QR code generator",
      body: "Customized codes for flyers with analytics tracking.",
    },
    {
      title: "Email hosting",
      body: "Official @ryanmeetup.com addresses for press and sponsorships.",
    },
    {
      title: "Merch production costs",
      body: "Production fees that get reimbursed through sales.",
    },
    {
      title: "Storage unit",
      body:
        "After 3+ years of storing event materials between our own apartments, it has become necessary to have a dedicated space.",
    },
  ];

  const eventItems = [
    "Venue rentals.",
    "Decorations: balloons, backdrops, and the little touches around the venue.",
    "Prizes and supplies: from beer for the St. Ryan’s Day chug competition to beer steins and sausages for Rytoberfest.",
    "Props and details that make events feel special and thematic.",
    "Entertainment: DJs, performers, and other talent to keep the party going.",
  ];

  return (
    <Layout className="space-y-10">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <Heading className="text-4xl title sm:text-5xl lg:text-6xl" size="h1">
            Help power the next Ryan Meetup.
          </Heading>
          <Text className="text-lg text-black/70 dark:text-white/70">
            All donations go towards setting up future Ryan Meetup events (ie:
            renting out spaces, buying name tags, trophies, decorations, etc, as
            well as tightening up security against potential Bryan intruders at
            our events).
          </Text>
          <Text className="text-base text-black/60 dark:text-white/60">
            Our not-for-profit organization is sustained by donations and
            community support.
          </Text>
          <div className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <Text className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
              Prefer merch instead?
            </Text>
            <Text className="mt-3 text-sm text-black/70 dark:text-white/70">
              Purchase Ryan Meetup merchandise directly to support future
              events and community growth.
            </Text>
            <NextLink
              href="/merch"
              className="mt-4 inline-flex items-center justify-center rounded-lg border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:-translate-y-0.5 hover:border-black/30 dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              Shop merch
            </NextLink>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <Text className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
              Where does all the money go?
            </Text>
            <Text className="mt-3 text-sm text-black/70 dark:text-white/70">
              All the money Ryan Meetup brings in goes straight back into
              running the organization and hosting future events. That includes
              the behind-the-scenes tools and services that keep things running
              smoothly, like:
            </Text>
            <ul className="mt-4 space-y-2">
              {backendItems.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white" />
                  <Text className="text-sm text-black/70 dark:text-white/70">
                    <span className="font-semibold text-black dark:text-white">
                      {item.title}
                    </span>
                    : {item.body}
                  </Text>
                </li>
              ))}
            </ul>
            <Text className="mt-4 text-sm text-black/70 dark:text-white/70">
              On top of that, large-scale events aren’t cheap — venues,
              materials, and logistics all add up. In short: every cent goes
              back into Ryans, not pockets.
            </Text>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <Text className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
              What kinds of things does Ryan Meetup spend money on?
            </Text>
            <Text className="mt-3 text-sm text-black/70 dark:text-white/70">
              Beyond subscriptions and backend costs, most of our spending goes
              towards making our events as memorable as possible. That includes:
            </Text>
            <ul className="mt-4 space-y-2">
              {eventItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black dark:bg-white" />
                  <Text className="text-sm text-black/70 dark:text-white/70">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4 lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <Heading className="text-2xl title sm:text-3xl" size="h2">
              Two easy ways to donate
            </Heading>
            <Text className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50 dark:text-white/50">
              2 options
            </Text>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <DonateOptionCard
              method="Zelle"
              value="theryanmeetup@gmail.com"
              logoSrc="/logos/zellelogo.png"
              logoAlt="Zelle Logo"
              visual={
                <NextImage src="/zelle.png" width={180} height={180} alt="Zelle" />
              }
            />

            <DonateOptionCard
              method="Venmo"
              value="@RyanMeetup"
              valueHref="https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1"
              logoSrc="/logos/venmo-logo.png"
              logoAlt="Venmo Logo"
              visual={
                <QRCode
                  value="https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1"
                  size={160}
                />
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;
