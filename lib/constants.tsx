// Components
import {
  FaInstagram as Instagram,
  FaMeetup as Meetup,
  FaYoutube as YouTube,
  FaHandsHelping as Help,
  FaPhotoVideo as Gallery,
  FaTrophy as Trophy,
  FaRegNewspaper as News,
  FaMapMarkedAlt as Map,
  FaDollarSign as Dollar,
  // FaWhatsapp as Whatsapp,
  FaScroll as Scroll,
  FaTiktok as Tiktok,
  FaBasketballBall as Basketball
} from 'react-icons/fa';
import {
  FaPeopleGroup as Community,
  FaHandshakeSimple as Handshake,
  FaShirt as Shirt,
  FaThreads as Threads,
} from 'react-icons/fa6';
import {
  IoCalendarNumber as Calendar,
  IoPersonAdd as Socials
} from 'react-icons/io5';
import { RiFilePaper2Line as Flyer } from 'react-icons/ri';
import { HiOutlineMail as Email } from 'react-icons/hi';
import { PiHandHeartFill as Charity } from 'react-icons/pi';
// import { MdGroup as Group } from 'react-icons/md';

export const routes = [
  {
    icon: <Community />,
    text: 'Community',
    href: '',
    subroutes: [
      {
        icon: <Scroll />,
        text: 'About',
        href: '/about',
      },
      {
        icon: <Calendar />,
        text: 'Events',
        href: '/events',
      },
      // {
      //   icon: <Group />,
      //   text: 'Chapters',
      //   href: '/chapters',
      // },
      {
        icon: <Gallery />,
        text: 'Gallery',
        href: '/gallery',
      },
      {
        icon: <Trophy />,
        text: 'Awards',
        href: '/awards',
      },
      {
        icon: <Basketball />,
        text: 'Bracket',
        href: '/march-madness'
      }
    ],
  },
  {
    icon: <Shirt />,
    text: 'Merch',
    href: 'https://ryanmeetup.etsy.com',
  },
  {
    icon: <Handshake />,
    text: 'Support',
    href: '',
    subroutes: [
      {
        icon: <Flyer />,
        text: 'Posters',
        href: '/posters',
      },
      {
        icon: <Help />,
        text: 'Contribute',
        href: '/contribute',
      },
      {
        icon: <Dollar />,
        text: 'Donate',
        href: '/donate',
      },
      {
        icon: <Charity />,
        text: 'Charity',
        href: '/charity',
      }
    ],
  },
  {
    icon: <Map />,
    text: 'Map',
    href: '/map',
  },
  {
    icon: <News />,
    text: 'Press',
    href: '/press',
  },
  {
    icon: <Email />,
    text: 'Contact Us',
    href: '/contact',
  },
  {
    icon: <Socials />,
    text: 'Social Media',
    href: '',
    subroutes: [
      {
        icon: <Instagram />,
        text: 'Instagram',
        href: 'https://www.instagram.com/ryanmeetup/',
      },
      {
        icon: <Tiktok />,
        text: 'TikTok',
        href: 'https://www.tiktok.com/@ryanmeetup/',
      },
      {
        icon: <Threads />,
        text: 'Threads',
        href: 'https://www.threads.net/@ryanmeetup',
      },
      {
        icon: <Meetup />,
        text: 'Meetup',
        href: 'https://www.meetup.com/ryanmeetup/',
      },
      // {
      //   icon: <Whatsapp />,
      //   text: 'WhatsApp',
      //   href: 'https://chat.whatsapp.com/LeI37a2AlMk0OmMfhXPNvq',
      // },
      {
        icon: <YouTube />,
        text: 'YouTube',
        href: 'https://www.youtube.com/@ryanmeetup',
      },
    ],
  },
];

export const gallery = [
  {
    imageUrl: '/ryanroundup.png',
    title: 'Ryan Roundup, March 2023'
  },
  {
    imageUrl: '/rendez.webp',
    title: 'Ryan Rendezvous, May 2023',
  },
  {
    imageUrl: '/retreat.webp',
    title: 'Ryan Retreat, July 2023',
  },
  {
    imageUrl: '/rave.webp',
    title: 'Ryan Rave, September 2023',
  },
  {
    imageUrl: '/claus.webp',
    title: 'Photos with Ryan Claus, December 2023'
  },
  {
    imageUrl: '/rodeo.webp',
    title: 'Ryan Rodeo, February 2024',
  },
  {
    imageUrl: '/stryan.webp',
    title: 'St. Ryan\'s Day, March 2024'
  },
  {
    imageUrl: '/ryami.webp',
    title: 'Ryami Vice, May 2024',
  },
  {
    imageUrl: '/deadpoolgroup.webp',
    title: '150 Deadpools & Wolverine, July 2024',
  },
];