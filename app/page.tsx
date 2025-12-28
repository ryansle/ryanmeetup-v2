// Components
import { Layout } from "@/components/navigation";
import { Landing, FAQ, TestimonyContainer } from "@/components/home";
import { Divider, Heading } from "@/components/global";

// Types
import type {
  FrequentlyAskedQuestion,
  Location,
  RyanChapter,
  RyanEvent,
  Sponsor,
  Testimonial,
} from "@/lib/types";

// Utilities
import {
  fetchFAQs,
  fetchSponsors,
  fetchTestimonies,
  fetchChapters,
  fetchEvents,
  fetchLocations,
} from "@/actions/fetchContent";
import { SponsorCarousel } from "@/components/sponsors";
import { formatCount, getLocationStats } from "@/utils/stats";

const HomePage = async () => {
  const faqs = (await fetchFAQs()) as FrequentlyAskedQuestion[];
  const sponsors = (await fetchSponsors()) as Sponsor[];
  const testimonies = (await fetchTestimonies()) as Testimonial[];
  const chapters = (await fetchChapters()) as (RyanChapter & { active?: boolean })[];
  const events = (await fetchEvents()) as RyanEvent[];
  const locations = (await fetchLocations()) as unknown as Location[];

  const homeFaqs = faqs.filter((faq) => faq.type === "home");
  const activeChapters = chapters.filter((chapter) => chapter.active);

  const { cityCount, countryCount } = getLocationStats(locations);

  const stats = [
    { value: formatCount(activeChapters.length), label: "Chapters" },
    { value: formatCount(cityCount), label: "Cities" },
    { value: formatCount(countryCount), label: "Countries" },
    { value: formatCount(events.length), label: "Events hosted" },
  ];

  return (
    <Layout fullscreen>
      <section className="mb-12">
      <div className="py-8 px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]">
        <Landing stats={stats} />

        <Divider margins="xl" />

        <Heading className="text-center text-4xl title" size="h4">
          We&apos;re supported by Ryans at:
        </Heading>
      </div>

      <SponsorCarousel sponsors={sponsors} />

      <div className="px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px]">
        <Divider margins="xl" />

        <TestimonyContainer testimonies={testimonies} />

        <Divider margins="xl" />

        <FAQ showTitle data={homeFaqs} />
      </div>
      </section>
    </Layout>
  );
};

export default HomePage;
