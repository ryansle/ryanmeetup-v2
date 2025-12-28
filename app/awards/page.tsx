// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Divider, Pill } from "@/components/global";
import { FarthestRyan, Champion, Leaderboard } from "@/components/awards";
import { MdLeaderboard as Leader } from "react-icons/md";
import { FaTrophy as Trophy, FaPlaneArrival as Plane } from "react-icons/fa";

// Types
import type { TravelingRyan, ChampionRyan, RepeatRyan } from "@/lib/types";
import type { Metadata } from "next";

// Utilities
import {
  fetchFarthestRyans,
  fetchChampionRyans,
  fetchRepeatRyans,
} from "@/actions/fetchContent";
import { getAwardsFixture } from "@/lib/test-fixtures/awards";

export const metadata: Metadata = {
  title: "Ryan Meetup - Awards",
  description:
    "The Hall of Ryans honors farthest traveling Ryans, Ryan Meetup champions, and more.",
  keywords: [
    "award winners",
    "hall of ryans",
    "farthest traveling ryans",
    "who won at the ryan meetup",
    "ryan meetup tournament",
    "rytoberfest champion",
    "little kings",
    "little king of St. Ryans Day",
    "mr ryami",
    "ms. ryami",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/awards",
    title: "Ryan Meetup - Awards",
    description:
      "The Hall of Ryans honors farthest traveling Ryans, Ryan Meetup champions, and more.",
    siteName: "Ryan Meetup - Awards",
    images: [
      {
        url: "https://ryanmeetup.com/trophy.png",
        width: 1000,
        height: 667,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AwardsPage = async () => {
  const fixture =
    process.env.E2E_TESTS === "true" ? getAwardsFixture() : null;
  const farthest = fixture?.farthest ?? (await fetchFarthestRyans());
  const champs = fixture?.champs ?? (await fetchChampionRyans());
  const repeats = fixture?.repeats ?? (await fetchRepeatRyans());

  const anchorStyle =
    "group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-sm transition hover:-translate-y-1 hover:border-black/30 dark:border-white/15 dark:bg-black dark:text-white dark:hover:border-white/40";
  const iconStyle = "h-5 w-5";

  const anchors = [
    {
      icon: <Plane className={iconStyle} />,
      href: "#farthest",
      tooltip: "Farthest Traveled",
    },
    {
      icon: <Trophy className={iconStyle} />,
      href: "#champions",
      tooltip: "Champions",
    },
    {
      icon: <Leader className={iconStyle} />,
      href: "#leaderboard",
      tooltip: "Leaderboard",
    },
  ];

  return (
    <Layout>
      <div className="relative space-y-12">
        <section className="space-y-4 text-center">
          <div className="flex justify-center">
            <Pill>Awards</Pill>
          </div>
          <Heading className="text-4xl title sm:text-5xl lg:text-6xl" size="h1">
            Hall of Ryans
          </Heading>
          <Text className="text-lg text-black/70 dark:text-white/70">
            Honoring the Ryans who traveled the farthest, earned top titles, and
            showed up again and again.
          </Text>
        </section>

        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 lg:right-24 lg:bottom-8">
          {anchors.map((anchor) => (
            <div key={anchor.href} className="relative group">
              <a href={anchor.href} className={anchorStyle}>
                {anchor.icon}
              </a>
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white opacity-0 transition group-hover:opacity-100 dark:bg-white dark:text-black">
                {anchor.tooltip}
              </span>
            </div>
          ))}
        </div>

        <Divider />

        <div id="farthest" />
        <section className="space-y-6">
          <Heading className="text-center text-3xl title sm:text-4xl">
            Farthest Traveling Ryans
          </Heading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {farthest?.map((ryan, index) => (
              <FarthestRyan key={index} ryan={ryan as unknown as TravelingRyan} />
            ))}
          </div>
        </section>

        <Divider margins="xl" />

        <div id="champions" />
        <section className="space-y-6">
          <div className="space-y-2 text-center">
            <Heading className="text-3xl title sm:text-4xl">
              Ryan Meetup Champions
            </Heading>
            <Text className="text-base text-black/70 dark:text-white/70">
              Ryans that overcame great obstacles to take home the championship
              titles.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {champs?.map((ryan, index) => (
              <Champion key={index} ryan={ryan as unknown as ChampionRyan} />
            ))}
          </div>
        </section>

        <Divider margins="xl" />

        <div id="leaderboard" />
        <section className="space-y-6">
          <Leaderboard ryans={repeats as RepeatRyan[]} />
        </section>
      </div>
    </Layout>
  );
};

export default AwardsPage;
