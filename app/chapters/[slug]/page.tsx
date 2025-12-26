// Components
import { Layout } from "@/components/navigation";
import { Heading, Breadcrumbs, PageNotFound } from "@/components/global";
import { ChapterInfo } from "@/components/chapters";
import { EventsContainer } from "@/components/events";
import { FaCity as City } from "react-icons/fa";
import { MdGroup as Group } from "react-icons/md";

// Types
import type { RyanEvent, ContentfulImage } from "@/lib/types";
import type { Metadata } from "next";

// Utilities
import { fetchEvents, fetchSingleChapter } from "@/actions/fetchContent";
import { convertSlug } from "@/utils/convert";
import { getChapterSlugFixture } from "@/lib/test-fixtures/chapters";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const fixture =
    process.env.E2E_TESTS === "true"
      ? getChapterSlugFixture(params.slug)
      : null;
  const content = fixture?.chapter ?? (await fetchSingleChapter(params.slug));

  if (content) {
    const { city, state } = content;

    return {
      title: `Ryan Meetup - ${city} Chapter`,
      description: `Keep up to date with Ryan Meetups in ${city}, ${state}.`,
      keywords: ["ryan meetup", `ryan meetup ${city}`, `ryan meetup ${state}`],
      openGraph: {
        url: `https://ryanmeetup.com/chapters/${params.slug}`,
        title: `Ryan Meetup - ${city} Chapter`,
        description: `Keep up to date with Ryan Meetups in ${city}, ${state}.`,
        siteName: "Ryan Meetup",
        images: [
          {
            url: `https://ryanmeetup.com/chapters/${params.slug}.png`,
            width: 3360,
            height: 1854,
          },
        ],
        locale: "en_US",
        type: "website",
      },
    };
  }
}

const ChapterPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { fixture?: string };
}) => {
  const fixture =
    process.env.E2E_TESTS === "true"
      ? getChapterSlugFixture(params.slug, searchParams?.fixture)
      : null;
  const content = fixture?.chapter ?? (await fetchSingleChapter(params.slug));
  const events = fixture?.events ?? (await fetchEvents());

  // @ts-ignore
  const leaders = content?.chapterLeads;
  const city = content?.city;
  const instagram = content?.instagram;
  const avatar = content?.avatar;
  const isActive = content?.active;

  const iconStyle = "mr-2 fill-black h-4 w-4 shrink-0 dark:fill-white";

  const breadcrumbs = [
    {
      icon: <Group className={iconStyle} />,
      href: "/chapters",
      title: "Chapters",
    },
    {
      icon: <City className={iconStyle} />,
      href: `/chapters/${params.slug}`,
      title: city as string,
    },
  ];

  return (
    <Layout>
      {content ? (
        <div className="flex flex-wrap">
          {/* LEFT PANEL (Sticky) */}
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <Breadcrumbs className="flex sm:hidden" crumbs={breadcrumbs} />
            <div className="sticky top-28">
              <ChapterInfo
                leaders={leaders as string[]}
                instagram={instagram as string}
                avatar={avatar as ContentfulImage}
                city={city as string}
                isActive={isActive as boolean}
              />
            </div>
          </div>

          {/* RIGHT PANEL (Scrollable) */}
          <div className="flex-1 p-4">
            <Breadcrumbs className="hidden sm:flex" crumbs={breadcrumbs} />

            <div className="space-y-4 mt-4">
              <EventsContainer
                events={events as unknown as RyanEvent[]}
                eventType={convertSlug(params.slug)}
                // hidePastEvents
                showUpcomingSection
              />
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </Layout>
  );
};

export default ChapterPage;
