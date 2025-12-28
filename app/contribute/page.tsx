// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Divider } from "@/components/global";
import {
  FaHandsHelping as Help,
  FaDollarSign as Dollar,
  FaCamera as Camera,
  FaPenNib as Pen,
  FaLaptopCode as Code,
  FaBullhorn as Bullhorn,
  FaPrint as Print,
} from "react-icons/fa";
import { FaGear as Gear } from "react-icons/fa6";
import NextLink from "next/link";
import { RiFilePaper2Line as Flyer } from "react-icons/ri";
import { IoPersonAdd as Socials } from "react-icons/io5";
import { MdMovie as Video, MdDesignServices as Design } from "react-icons/md";

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan Meetup - Contribute",
  description: "Learn how you can contribute to the Ryan Meetup.",
  keywords: [
    "donate to the ryan meetup",
    "ryan meetup venmo",
    "ryan meetup zelle",
    "ryan meetup money",
    "contribute to ryan meetup",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/contribute",
    title: "Ryan Meetup - Contribute",
    description: "Learn how you can contribute to the Ryan Meetup.",
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

const ContributePage = async () => {
  const waysToSupport = [
    {
      title: "Invite more Ryans",
      body: "The goal is gathering as many Ryans as possible, and this is the easiest way to expand our network.",
      icon: <Socials className="h-5 w-5" />,
    },
    {
      title: "Hang up flyers",
      body: "This is how it all started for us, and it's an effective way to reach Ryans in the wild.",
      icon: <Flyer className="h-5 w-5" />,
    },
    {
      title: "Share your skills",
      body: "Combining our capabilities makes the Ryan Meetup stronger and more self-sustaining.",
      icon: <Help className="h-5 w-5" />,
    },
    {
      title: "Support the mission",
      body: "Merch purchases and donations help fund future events and community growth.",
      icon: <Dollar className="h-5 w-5" />,
    },
  ];

  const composed = [
    {
      title: "Photo / Video",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      title: "Creative Director",
      icon: <Pen className="h-5 w-5" />,
    },
    {
      title: "Engineering",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Production / Writing",
      icon: <Video className="h-5 w-5" />,
    },
    {
      title: "Marketing / Outreach",
      icon: <Bullhorn className="h-5 w-5" />,
    },
    {
      title: "Graphic Design",
      icon: <Design className="h-5 w-5" />,
    },
    {
      title: "Printing",
      icon: <Print className="h-5 w-5" />,
    },
    {
      title: "Logistics",
      icon: <Gear className="h-5 w-5" />,
    },
  ];

  return (
    <Layout>
      <section className="space-y-4 text-center mb-8">
        <Heading className="text-4xl title sm:text-5xl lg:text-6xl" size="h1">
          Contribute to the Ryan Meetup
        </Heading>
        <Text className="text-lg text-black/70 dark:text-white/70">
          We have an army of Ryans at our disposal. The more Ryans who pitch in,
          the faster we&apos;ll grow.
        </Text>
        <Text className="text-lg text-black/60 dark:text-white/60">
          Our entire team is 100% volunteer-based.
        </Text>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_25px_50px_-40px_rgba(0,0,0,0.6)] dark:border-white/10 dark:bg-white/5 lg:p-10">
        <div className="space-y-4">
          <Heading className="text-3xl title sm:text-4xl" size="h2">
            Team & Skills
          </Heading>
          <Text className="text-base text-black/70 dark:text-white/70">
            These cards represent the Ryans currently on the team. If you have
            a relevant skill, we&apos;d love for you to join our volunteer crew.
          </Text>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {composed.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-black/10 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black text-white dark:border-white/10 dark:bg-white dark:text-black">
                    {role.icon}
                  </span>
                  <Text className="text-sm uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
                    {role.title} Ryan
                  </Text>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-6">
          <NextLink
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-black/15 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:-translate-y-0.5 hover:border-black/30 dark:border-white/20 dark:text-white dark:hover:border-white/40"
          >
            <Socials className="h-4 w-4" />
            Join the team
          </NextLink>
        </div>
      </section>

      <Divider margins="xl" />

      <section className="rounded-2xl border border-black/10 bg-white/80 p-6 shadow-[0_25px_50px_-40px_rgba(0,0,0,0.6)] dark:border-white/10 dark:bg-white/5 lg:p-10">
        <div className="space-y-6">
          <Heading className="text-3xl title sm:text-4xl" size="h2">
            Ways to Contribute
          </Heading>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {waysToSupport.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black text-white dark:border-white/10 dark:bg-white dark:text-black">
                    {item.icon}
                  </span>
                  <Text className="text-sm uppercase tracking-[0.3em] text-black/70 dark:text-white/70">
                    {item.title}
                  </Text>
                </div>
                <Text className="mt-3 text-sm text-black/70 dark:text-white/70">
                  {item.body}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContributePage;
