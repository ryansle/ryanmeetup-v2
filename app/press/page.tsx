// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Divider, Pill } from "@/components/global";
import { FeaturedIn, PressFeed } from "@/components/press";
import { layoutPaddingX } from "@/lib/constants";

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
    "ryan meetup press kit",
    "ryan meetup media coverage",
    "ryan meetup news coverage",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/press",
    title: "Ryan Meetup - Press",
    description: "Read all about the Ryan Meetup in the news.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/meta/press.png",
        width: 2056,
        height: 1161,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ryanmeetup.com/press",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Meetup - Press",
    description: "Read all about the Ryan Meetup in the news.",
    images: ["https://ryanmeetup.com/meta/press.png"],
  },
};

const PressPage = async () => {
  const articles = await fetchArticles();
  const outlets = await fetchOutlets();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: (articles as RyanArticle[]).map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "NewsArticle",
        headline: article.title,
        datePublished: new Date(article.publishDate).toISOString(),
        author: {
          "@type": "Person",
          name: article.author,
        },
        publisher: {
          "@type": "Organization",
          name: article.outlet,
        },
        mainEntityOfPage: article.href,
        url: article.href,
      },
    })),
  };

  return (
    <Layout fullscreen>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={`pt-8 ${layoutPaddingX}`}>
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

      <div className={`${layoutPaddingX}`}>
        <Divider />

        <PressFeed articles={articles as unknown as RyanArticle[]} />
      </div>
    </Layout>
  );
};

export default PressPage;
