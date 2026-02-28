// Components
import { Layout } from "@/components/navigation";
import { Landing, FAQ, TestimonyContainer } from "@/components/home";
import { Divider, Heading } from "@/components/global";
import { SponsorCarousel } from "@/components/sponsors";
import { UpcomingEventsList } from "@/components/events";
import { 
  FaCommentDollar as Dollar,
  FaRegNewspaper as Press,
} from "react-icons/fa6";
import { BiParty as Party } from "react-icons/bi";
import { MdGroups as Community, MdVolunteerActivism as Heart } from "react-icons/md";
import { Button } from "@/components/global";
import { GoSponsorTiers as SponsorIcon } from "react-icons/go";
import { layoutPaddingX } from "@/lib/constants";
import { toEndOfDayTime } from "@/utils/date";

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
  const mainEvents = events.filter((event) => event.chapter.includes("Main"));
  const now = Date.now();
  const upcomingEvents = events
    .filter((event) => toEndOfDayTime(event.date) >= now)
    .sort((a, b) => toEndOfDayTime(a.date) - toEndOfDayTime(b.date));

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

  const formatCountNoPlus = (value: number) =>
    formatCount(value).replace(/\+$/, "");

  const stats = [
    { 
      value: formatCountNoPlus(activeChapters.length), 
      label: "Active chapters",
      icon: <Community className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:h-4 lg:w-4 xl:w-7 xl:h-7" />,
      href: "/chapters",
    },
    { 
      value: formatCount(mainEvents.length), 
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
        <div className={`py-8 ${layoutPaddingX}`}>
          <Landing stats={stats} />

        <Divider margins="xl" />

        {upcomingEvents.length !== 0 && (
          <>
            <UpcomingEventsList events={upcomingEvents} />
            <Divider margins="xl" />
          </>
        )}

        <TestimonyContainer testimonies={testimonies} />

        <Divider margins="xl" />

        <Heading className="text-center text-4xl title" size="h4">
          We&apos;re supported by Ryans at:
        </Heading>
        </div>

        <SponsorCarousel sponsors={sponsors} />
        <div className={`flex flex-col items-center justify-center gap-3 sm:flex-row mt-12 ${layoutPaddingX}`}>
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

        <div className={`${layoutPaddingX}`}>
          <Divider margins="xl" />

          {/* <TestimonyContainer testimonies={testimonies} /> */}

          <Divider margins="xl" />

          <FAQ showTitle data={homeFaqs} />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
