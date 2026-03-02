// Components
import { Layout } from "@/components/navigation";
import { Calendar } from "@/components/chapters";

// Types
import { buildPageMetadata } from "@/utils/metadata";

export const metadata = buildPageMetadata({
  title: "Ryan Meetup - Calendar",
  description:
    "Check out the official calendar of Ryan Meetups around the world.",
  canonical: "https://ryanmeetup.com/calendar",
  image: {
    url: "https://ryanmeetup.com/group-photos/ryankickoff.png",
    width: 1600,
    height: 800,
  },
  keywords: [
    "ryan meetup near me",
    "ryan meetup calendar",
    "when is the next ryan meetup",
    "ryan meetup local chapters",
    "ryan meetup event calendar",
    "ryan meetup schedule",
  ],
});

const CalendarPage = async () => {
  return (
    <Layout fullscreen>
      <Calendar />
    </Layout>
  );
};

export default CalendarPage;
