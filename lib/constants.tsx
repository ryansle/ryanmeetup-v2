// Components
import {
  FaInstagram as Instagram,
  FaMeetup as Meetup,
  FaDiscord as Discord,
  FaYoutube as YouTube,
  FaHandsHelping as Help,
  FaPhotoVideo as Gallery,
  FaTrophy as Trophy,
  FaRegNewspaper as News,
  FaMapMarkedAlt as Map,
  FaDollarSign as Dollar,
} from 'react-icons/fa';
import {
  FaPeopleGroup as Community,
  FaHandshakeSimple as Handshake,
  FaShirt as Shirt,
  FaTicket as Ticket,
} from 'react-icons/fa6';
import {
  IoCalendarNumber as Calendar,
  IoPersonAdd as Socials
} from 'react-icons/io5';
import { RiFilePaper2Line as Flyer } from 'react-icons/ri';
import { HiOutlineMail as Email } from 'react-icons/hi';

export const routes = [
  {
    icon: <Community />,
    text: 'Community',
    href: '',
    subroutes: [
      {
        icon: <Ticket />,
        text: 'Buy Tickets',
        href: '/tickets'
      },
      {
        icon: <Calendar />,
        text: 'Events',
        href: '/events',
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
        icon: <Meetup />,
        text: 'Meetup',
        href: 'https://www.meetup.com/ryanmeetup/',
      },
      {
        icon: <Discord />,
        text: 'Discord',
        href: 'https://discord.gg/HDugzYSHKC',
      },
      {
        icon: <YouTube />,
        text: 'YouTube',
        href: 'https://www.youtube.com/@ryanmeetup',
      },
    ],
  },
];