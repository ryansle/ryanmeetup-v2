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
  FaWhatsapp as Whatsapp,
  FaScroll as Scroll,
  FaTiktok as TikTok,
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
import { MdGroup as Group } from 'react-icons/md';
import { GoSponsorTiers as Sponsor } from 'react-icons/go';

export const socials = [
  {
    href: 'https://www.instagram.com/ryanmeetup/',
    icon: <Instagram />,
    text: 'Instagram',
  },
  // { 
  //   href: 'https://partiful.com/u/sJG4HpH0wS3ZA3YkzaL5',
  //   icon: <NextImage src='/icons/partiful-black.png' alt='Partiful Icon' width={16} height={16} />,
  //   text: 'Partiful',
  // },
  {
    href: 'https://www.youtube.com/@ryanmeetup',
    icon: <YouTube />,
    text: 'YouTube',
  },
  {
    icon: <TikTok />,
    text: 'TikTok',
    href: 'https://www.tiktok.com/@ryanmeetup/',
  },
  {
    icon: <Threads />,
    text: 'Threads',
    href: 'https://www.threads.net/@ryanmeetup',
  },
  {
    icon: <Whatsapp />,
    text: 'WhatsApp',
    href: '/whatsapp',
  },
];

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
      {
        icon: <Group />,
        text: 'Chapters',
        href: '/chapters',
      },
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
        text: 'Flyers',
        href: '/flyers',
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
        icon: <Sponsor />,
        text: 'Sponsors',
        href: '/sponsors'
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
    subroutes: socials,
  },
];

export const gallery = [
  {
    imageUrl: '/group-photos/ryanroundup.png',
    title: 'Ryan Roundup, March 2023'
  },
  {
    imageUrl: '/group-photos/rendez.webp',
    title: 'Ryan Rendezvous, May 2023',
  },
  {
    imageUrl: '/group-photos/retreat.webp',
    title: 'Ryan Retreat, July 2023',
  },
  {
    imageUrl: '/group-photos/rave.webp',
    title: 'Ryan Rave, September 2023',
  },
  {
    imageUrl: '/group-photos/claus.webp',
    title: 'Ryan Claus, December 2023'
  },
  {
    imageUrl: '/group-photos/rodeo.webp',
    title: 'Ryan Rodeo, February 2024',
  },
  {
    imageUrl: '/group-photos/stryan.webp',
    title: 'St. Ryan\'s Day, March 2024'
  },
  {
    imageUrl: '/group-photos/ryami.webp',
    title: 'Ryami Vice, May 2024',
  },
  {
    imageUrl: '/group-photos/deadpoolgroup.webp',
    title: '150 Deadpools & Wolverine, July 2024',
  },
  {
    imageUrl: '/group-photos/royale.jpg',
    title: 'Ryan Royale, September 2024',
  },
  {
    imageUrl: '/group-photos/comedy.jpeg',
    title: 'Last Ryan Standing, January 2025',
  },
  {
    imageUrl: '/group-photos/gameshow.jpg',
    title: 'Ryan\'s Game Show, January 2025',
  },
];