// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Divider } from "@/components/global";
import NextImage from "next/image";

// Types
import type { Metadata } from "next";

// Utilities
import { gallery } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ryan Meetup - About",
  description: "Learn how the Ryan Meetup got its start.",
  keywords: [
    "ryan meetup",
    "ryan meetup",
    "who started the ryan meetup",
    "about ryan meetup",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/about",
    title: "Ryan Meetup - About",
    description: "Learn how the Ryan Meetup got its start.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/ryankickoff.png",
        width: 1600,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AboutPage = () => {
  const story = [
    "In February 2023, Ryan decided she wanted to meet more people named Ryan. So she posted a handful of flyers in her Brooklyn neighborhood with a QR code that implored Ryans to RSVP for a \"Ryan Meetup.\" Only two other Ryans attended.",
    "That night, after checking each other's IDs, Ryan, Ryan, and Ryan devised a plan to reach more Ryans—and set an ambitious goal for themselves: to break the world record for largest same first name gathering.",
    "So the Ryans got to work, covering NYC in flyers to advertise their next event at Ryan Maguire's pub—but this time, over 100 Ryans showed up, including some Ryans from major news sources, who helped spread the word to even more Ryans.",
    "Soon, Ryans everywhere wanted to join in on the fun. So we took Ryan Meetup on tour, hosting events in Los Angeles, Denver, Chicago, and more. All while building a community with thousands of Ryans, who each contribute in their own unique way. And that's exactly what it will take to put our name in the record books.",
    "When your name is called, be ready Ryan. We're going to need you.",
  ];

  return (
    <Layout>
      <div className="xl:px-20 space-y-12">
        <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.6)] dark:border-white/10 dark:bg-white/5 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.08),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />
          <div className="absolute -top-24 right-10 hidden h-64 w-64 rounded-full border border-black/10 bg-white/60 blur-3xl dark:border-white/10 dark:bg-white/10 lg:block" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black/70 dark:border-white/15 dark:bg-white/5 dark:text-white/70">
                How it all started
              </div>
              <Heading className="text-4xl title sm:text-5xl" size="h1">
                About Ryan Meetup
              </Heading>
              <Text className="text-lg text-black/70 dark:text-white/70">
                A community built by Ryans, for Ryans, with a mission to unite
                the most Ryans in one place and make history together.
              </Text>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 dark:border-white/15 dark:bg-white/5">
                  Founded 2023
                </span>
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 dark:border-white/15 dark:bg-white/5">
                  Brooklyn, NY
                </span>
                <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 dark:border-white/15 dark:bg-white/5">
                  Not-for-profit
                </span>
              </div>
            </div>
            <div className="relative h-56 overflow-hidden rounded-3xl border border-black/10 shadow-2xl sm:h-80 lg:h-[360px] dark:border-white/10">
              <NextImage
                className="rounded-3xl"
                fill
                src="/ryankickoff.png"
                alt="The first Ryan Meetup"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 space-y-1">
                <Text className="text-xs uppercase tracking-[0.25em] text-white/70">
                  First meetup
                </Text>
                <Text className="text-xl font-cooper text-white">
                  Ryan Kickoff 2023
                </Text>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          {story.map((paragraph, index) => (
            <Text key={index} className="text-lg text-black/70 dark:text-white/70">
              {paragraph}
            </Text>
          ))}
        </section>

        <Divider />

        <section className="space-y-6">
          <div className="text-center">
            <Heading className="text-4xl title" size="h2">
              Moments from the meetup
            </Heading>
            <Text className="mt-2 text-base text-black/70 dark:text-white/70">
              A growing archive of Ryans showing up for each other.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((photo, index) => (
              <div
                className="rounded-2xl border border-black/10 bg-white/80 p-3 shadow-sm transition hover:-translate-y-1 hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40"
                key={index}
              >
                <div className="relative w-full max-h-[420px] aspect-w-3 aspect-h-2 overflow-hidden rounded-2xl">
                  <NextImage
                    src={photo.imageUrl}
                    fill
                    alt={photo.title}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 100vw,
                      (max-width: 1024px) 100vw,
                      (max-width: 1280px) 100vw,
                      (max-width: 1536px) 100vw"
                  />
                </div>
                <Text className="text-center mt-3 text-sm uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                  {photo.title}
                </Text>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
