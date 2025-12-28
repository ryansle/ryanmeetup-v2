// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Divider, Pill } from "@/components/global";
import { FeaturedIn, PressFeed } from "@/components/press";

// Types
import type { Article as RyanArticle, Outlet } from "@/lib/types";
import type { Metadata } from "next";

// Utilities
import { fetchArticles, fetchOutlets } from "@/actions/fetchContent";

export const metadata: Metadata = {
  title: "Ryan Meetup - Press",
  description: "Read all about the Ryan Meetup in the news.",
  keywords: [
    "ryans only",
    "ryans only at the ryan meetup",
    "and definitely no bryans",
    "nyc irish bar plays host to viral ryan meetup",
    "ryan meetup in the news",
    "ryan meetup news",
    "ryan meetup articles",
    "ryan meetup press",
    "first rule of ryan club, no bryans",
    "no bryans allowed",
    "ryan maguire",
    "hosts bash for people named ryan",
    "to get into this party",
    "need the right name",
    "its ryan",
    "alyson krueger",
    "will pavia",
    "kerry oshea",
    "ryan wilde",
    "ryan andrew wilde",
    "the takeaway",
    "the times",
    "irish central",
    "the times",
    "downtown new york alliance",
    "new york times",
    "miami new times",
    "houston chronicle",
    "los angeles times",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/press",
    title: "Ryan Meetup - Press",
    description: "Read all about the Ryan Meetup in the news.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/meta/press.png",
        width: 3360,
        height: 1854,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const PressPage = async () => {
  const articles = await fetchArticles();
  const outlets = await fetchOutlets();

  return (
    <Layout fullscreen>
      <div className="pt-8 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]">
        <div className="mb-4 flex justify-center">
          <Pill>Press</Pill>
        </div>
        <Heading
          className="mb-3 text-center title text-4xl md:text-7xl"
          size="h1"
        >
          RYAN MEETUP
        </Heading>

        <Text className="text-center text-lg italic text-black/70 dark:text-white/70">
          has been proudly featured in:
        </Text>
      </div>

      <FeaturedIn outlets={outlets as Outlet[]} />

      <div className="px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]">
        <Divider />

        <PressFeed articles={articles as unknown as RyanArticle[]} />
      </div>
    </Layout>
  );
};

export default PressPage;
