// Components
import {
  FaInstagram as Instagram,
  FaYoutube as YouTube,
  FaHandsHelping as Help,
  FaPhotoVideo as Gallery,
  FaTrophy as Trophy,
  FaRegNewspaper as News,
  FaMapMarkedAlt as Map,
  FaDollarSign as Dollar,
  FaScroll as Scroll,
  FaTiktok as TikTok,
  // FaAddressCard as Card,
} from "react-icons/fa";
import {
  FaPeopleGroup as Community,
  FaHandshakeSimple as Handshake,
  FaShirt as Shirt,
  FaThreads as Threads,
  FaPiggyBank as Charity,
  FaRegFileLines as FileLines,
} from "react-icons/fa6";
import {
  IoCalendarNumber as Calendar,
  // IoPersonAdd as Socials,
} from "react-icons/io5";
import { RiFilePaper2Line as Flyer } from "react-icons/ri";
import { HiOutlineMail as Email } from "react-icons/hi";
import { 
  MdGroup as Group,
  MdHowToVote as Suggestion,
} from "react-icons/md";
import { GoSponsorTiers as Sponsor } from "react-icons/go";
import { PiLetterCirclePBold as Party } from "react-icons/pi";

export const layoutPaddingX =
  "px-4 lg:px-32 2xl:px-56 3xl:px-[320px]"

export const socials = [
  {
    href: "https://www.instagram.com/ryanmeetup/",
    icon: <Instagram className="title" />,
    text: "Instagram",
  },
  {
    href: 'https://partiful.com/u/sJG4HpH0wS3ZA3YkzaL5',
    icon: <Party className="title" />,
    text: 'Partiful',
  },
  {
    href: "https://www.youtube.com/@ryanmeetup",
    icon: <YouTube className="title" />,
    text: "YouTube",
  },
  {
    icon: <TikTok className="title" />,
    text: "TikTok",
    href: "https://www.tiktok.com/@ryanmeetup/",
  },
  {
    icon: <Threads className="title" />,
    text: "Threads",
    href: "https://www.threads.net/@ryanmeetup",
  },
  // {
  //   icon: <Whatsapp className="title" />,
  //   text: "WhatsApp",
  //   href: "/whatsapp",
  // },
];

export const routes = [
  {
    icon: <Community />,
    text: "Community",
    href: "",
    subroutes: [
      {
        icon: <Scroll />,
        text: "About",
        href: "/about",
      },
      {
        icon: <Calendar />,
        text: "Events",
        href: "/events",
      },
      {
        icon: <Group />,
        text: "Chapters",
        href: "/chapters",
      },
      {
        icon: <Gallery />,
        text: "Gallery",
        href: "/gallery",
      },
      {
        icon: <Trophy />,
        text: "Awards",
        href: "/awards",
      },
      {
        icon: <FileLines className="shrink-0" />,
        text: "Change Name",
        href: "/name-change",
      },
    ],
  },
  {
    icon: <Shirt />,
    text: "Merch",
    href: "https://ryanmeetup.etsy.com",
  },
  {
    icon: <Handshake />,
    text: "Get Involved",
    href: "",
    subroutes: [
      {
        icon: <Flyer />,
        text: "Flyers",
        href: "/flyers",
      },
      {
        icon: <Help />,
        text: "Contribute",
        href: "/contribute",
      },
      {
        icon: <Dollar />,
        text: "Donate",
        href: "/donate",
      },
      {
        icon: <Sponsor />,
        text: "Sponsors",
        href: "/sponsors",
      },
      {
        icon: <Charity />,
        text: "Charity",
        href: "/charity",
      },
      { 
        icon: <Suggestion className="shrink-0" />,
        text: "Submit Rycommendations",
        href: "https://forms.gle/FH4vSc3ngFgqziTg9"
      }
      // {
      //   icon: <Card />,
      //   text: "Buy Card",
      //   href: "/cards",
      // },
    ],
  },
  {
    icon: <Map />,
    text: "Map",
    href: "/map",
  },
  {
    icon: <News />,
    text: "Press",
    href: "/press",
  },
  {
    icon: <Email />,
    text: "Contact Us",
    href: "/contact",
  },
];

export const gallery = [
  {
    imageUrl: "/group-photos/ryanroundup.png",
    title: "Ryan Roundup, March 2023",
  },
  {
    imageUrl: "/group-photos/rendez.webp",
    title: "Ryan Rendezvous, May 2023",
  },
  {
    imageUrl: "/group-photos/retreat.webp",
    title: "Ryan Retreat, July 2023",
  },
  {
    imageUrl: "/group-photos/rave.webp",
    title: "Ryan Rave, September 2023",
  },
  {
    imageUrl: "/group-photos/claus.webp",
    title: "Ryan Claus, December 2023",
  },
  {
    imageUrl: "/group-photos/rodeo.webp",
    title: "Ryan Rodeo, February 2024",
  },
  {
    imageUrl: "/group-photos/stryan.webp",
    title: "St. Ryan's Day, March 2024",
  },
  {
    imageUrl: "/group-photos/ryami.webp",
    title: "Ryami Vice, May 2024",
  },
  {
    imageUrl: "/group-photos/deadpoolgroup.webp",
    title: "150 Deadpools & Wolverine, July 2024",
  },
  {
    imageUrl: "/group-photos/royale.jpg",
    title: "Ryan Royale, September 2024",
  },
  {
    imageUrl: "/group-photos/comedy.jpeg",
    title: "Last Ryan Standing, January 2025",
  },
  {
    imageUrl: "/group-photos/gameshow.jpg",
    title: "Ryan's Game Show, January 2025",
  },
  {
    imageUrl: "/group-photos/stryan2.jpg",
    title: "St. Ryans Day II, March 2025",
  },
  {
    imageUrl: "/group-photos/rockies.jpg",
    title: "Ryans @ Rockies, June 2025",
  },
  {
    imageUrl: "/group-photos/summit.jpg",
    title: "Ryan Summit, June 2025",
  },
  {
    imageUrl: "/group-photos/rytober.jpg",
    title: "Rytoberfest II, September 2025",
  },
  {
    imageUrl: "/group-photos/serhant.jpg",
    title: "Ryans Own Manhattan, December 2025",
  },
];

export const landingGallery = [
  {
    imageUrl: "/group-photos/rockies.jpg",
    title: "Ryans @ Rockies, June 2025",
    city: "Denver, CO",
  },
  {
    imageUrl: "/group-photos/ryanroundup.png",
    title: "Ryan Roundup, March 2023",
    city: "New York, NY",
  },
  {
    imageUrl: "/group-photos/rave.webp",
    title: "Ryan Rave, September 2023",
    city: "Los Angeles, CA",
  },
  {
    imageUrl: "/group-photos/serhant.jpg",
    title: "Ryans Own Manhattan, December 2025",
    city: "New York, NY",
  },
  {
    imageUrl: "/group-photos/comedy.jpeg",
    title: "Last Ryan Standing, January 2025",
    city: "San Diego, CA",
  },
  {
    imageUrl: "/group-photos/gameshow.jpg",
    title: "Ryan's Game Show, January 2025",
    city: "San Diego, CA",
  },
  {
    imageUrl: "/group-photos/stryan.webp",
    title: "St. Ryan's Day, March 2024",
    city: "Chicago, IL",
  },
  {
    imageUrl: "/group-photos/deadpoolgroup.webp",
    title: "150 Deadpools & Wolverine, July 2024",
    city: "New York, NY",
  },
  {
    imageUrl: "/group-photos/royale.jpg",
    title: "Ryan Royale, September 2024",
    city: "Toronto, ON",
  },
  {
    imageUrl: "/group-photos/rytober.jpg",
    title: "Rytoberfest II, September 2025",
    city: "New York, NY",
  },
  {
    imageUrl: "/group-photos/rodeo.webp",
    title: "Ryan Rodeo, February 2024",
    city: "Austin, TX",
  },
  {
    imageUrl: "/group-photos/ryami.webp",
    title: "Ryami Vice, May 2024",
    city: "Miami, FL",
  },
];
