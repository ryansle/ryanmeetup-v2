// Components
import { Layout } from "@/components/navigation";
import { Landing, FAQ, TestimonyContainer } from "@/components/home";
import { Divider, Heading } from "@/components/global";
import { SponsorCarousel } from "@/components/sponsors";
import { 
  FaUserGroup as Group,
  FaCommentDollar as Dollar,
  FaRegNewspaper as Press,
  FaHandHoldingHeart as Heart
} from "react-icons/fa6";
import { BiParty as Party } from "react-icons/bi";
import { Button } from "@/components/global";
import { GoSponsorTiers as SponsorIcon } from "react-icons/go";

// Types
import type {
  FrequentlyAskedQuestion,
  RyanChapter,
  RyanEvent,
  Sponsor,
  Testimonial,
  Charity,
} from "@/lib/types";

// Utilities
import {
  fetchFAQs,
  fetchSponsors,
  fetchTestimonies,
  fetchChapters,
  fetchEvents,
  fetchArticles,
  fetchDonations,
} from "@/actions/fetchContent";
import { formatCount } from "@/utils/stats";

const HomePage = async () => {
  const faqs = (await fetchFAQs()) as FrequentlyAskedQuestion[];
  const sponsors = (await fetchSponsors()) as Sponsor[];
  const testimonies = (await fetchTestimonies()) as Testimonial[];
  const chapters = (await fetchChapters()) as (RyanChapter & { active?: boolean })[];
  const events = (await fetchEvents()) as RyanEvent[];
  const articles = await fetchArticles();
  const donations = (await fetchDonations()) as Charity[];

  const homeFaqs = faqs.filter((faq) => faq.type === "home");
  const activeChapters = chapters.filter((chapter) => chapter.active);

  const totalRaised = donations.reduce((sum, item) => {
    const amount = parseFloat(item.amount.replace(/[^0-9.-]+/g, ""));
    return sum + amount;
  }, 0);

  const formatDollars = (value: number) => {
    if (value >= 1000) {
      return `$${Math.floor(value / 1000)}k+`;
    }
    if (value >= 100) {
      return `$${Math.floor(value / 10) * 10}+`;
    }
    if (value >= 20) {
      return `$${Math.floor(value / 5) * 5}+`;
    }
    return `$${Math.floor(value)}+`;
  };

  const stats = [
    { 
      value: formatCount(activeChapters.length), 
      label: "Active chapters",
      icon: <Group className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:h-4 lg:w-4 xl:w-7 xl:h-7" />,
      href: "/chapters",
    },
    { 
      value: formatCount(events.length), 
      label: "Events hosted",
      icon: <Party className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:h-4 lg:w-4 xl:w-7 xl:h-7" />,
      href: "/events",
    },
    { 
      value: formatCount(articles.length), 
      label: "Press features",
      icon: <Press className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:h-4 lg:w-4 xl:w-7 xl:h-7" />,
      href: "/press",
    },
    { 
      value: formatDollars(totalRaised),
      label: "Raised for charity",
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:h-4 lg:w-4 xl:w-7 xl:h-7" />,
      href: "/charity",
    },
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
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row px-4 lg:px-32 2xl:px-56 3xl:px-[350px] 4xl:px-[500px] mt-12">
        <Button.Link 
          href="/sponsors" 
          variant="secondary" 
          size="sm" 
          className="w-full" 
          newTab={false}
          leftIcon={<SponsorIcon className="w-4 h-4"/>}
        >
          View all sponsors
        </Button.Link>
        <Button.Link 
          href="/contact" 
          variant="primary" 
          size="sm" 
          className="w-full"
          newTab={false}
          leftIcon={<Dollar className="w-4 h-4"/>}
        >
          Become a sponsor
        </Button.Link>
      </div>

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
