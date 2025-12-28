// Components
import { Layout } from "@/components/navigation";
import { Heading, Text, Pill, Card } from "@/components/global";
import { MediaTile } from "@/components/gallery";
import { FaQuestionCircle as Question } from "react-icons/fa";
import NextLink from "next/link";

// Types
import type { MediaEvent } from "@/lib/types";
import type { Metadata } from "next";

// Utilities
import { fetchMedia } from "@/actions/fetchContent";

export const metadata: Metadata = {
  title: "Ryan Meetup - Gallery",
  description: "View photos from previous Ryan Meetups.",
  keywords: [
    "ryan meetup",
    "ryan meetup gallery",
    "ryan meetup photos",
    "ryan meetup media",
    "pictures of ryan meetup",
    "ryan photos",
    "ryans",
    "ryan meetup photo gallery",
    "ryan meetup event photos",
  ],
  openGraph: {
    url: "https://ryanmeetup.com/gallery",
    title: "Ryan Meetup - Gallery",
    description: "View photos from previous Ryan Meetups.",
    siteName: "Ryan Meetup",
    images: [
      {
        url: "https://ryanmeetup.com/meta/gallery.png",
        width: 3360,
        height: 1854,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const GalleryPage = async () => {
  const media = await fetchMedia();

  const tiles = media.sort(
    (a, b) =>
      new Date(b.fields.eventDate as string).getTime() -
      new Date(a.fields.eventDate as string).getTime(),
  );

  return (
    <Layout>
      <section className="space-y-4 text-center">
        <div className="flex justify-center">
          <Pill>Gallery</Pill>
        </div>
        <Heading className="text-4xl title sm:text-5xl lg:text-6xl" size="h1">
          Photo Gallery
        </Heading>
        <Text className="text-lg text-black/70 dark:text-white/70">
          A living archive of Ryan Meetup memories across cities, chapters, and
          unforgettable events.
        </Text>
      </section>

      <Card variant="soft" size="sm" className="mt-10">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 dark:border-white/15 dark:bg-white/10">
            <Question className="h-5 w-5 fill-yellow-500" />
          </div>
          <div>
            <Text className="text-base font-semibold text-black dark:text-white">
              Who is photographing all of these Ryan Meetups?
            </Text>
            <Text className="mt-1 text-sm text-black/70 dark:text-white/70">
              Ryan Rose is the official photographer for the Ryan Meetup. You
              can book a gig with her{" "}
              <NextLink
                className="font-semibold text-blue-700 dark:text-blue-500 underline"
                href="mailto:justryanrose@gmail.com"
              >
                here
              </NextLink>
              .
            </Text>
          </div>
        </div>
      </Card>

        <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3">
          {tiles?.map((content, index) => (
            <MediaTile
              key={index}
              id={content.sys.id}
              data={content.fields as unknown as MediaEvent}
            />
          ))}
        </div>
    </Layout>
  );
};

export default GalleryPage;
