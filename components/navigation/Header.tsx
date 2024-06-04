'use client';

// Components
import { Heading } from '@/components/global';
import {
  FaInstagram as Instagram,
  FaMeetup as Meetup,
  FaDiscord as Discord,
  FaYoutube as YouTube,
  FaMoneyBillWave as Donate,
  FaPhotoVideo as Gallery,
  FaTrophy as Trophy,
  FaRegNewspaper as News,
  FaMapMarkedAlt as Map
} from 'react-icons/fa';
import {
  FaPeopleGroup as Community,
  FaHandshakeSimple as Handshake,
  FaShirt as Shirt,
} from 'react-icons/fa6';
import {
  IoCalendarNumber as Calendar,
  IoPersonAdd as Socials
} from 'react-icons/io5';
import { RiFilePaper2Line as Flyer } from 'react-icons/ri';
import { HiOutlineMail as Email } from 'react-icons/hi';
import { RouteMenu } from '@/components/navigation';
import NextLink from 'next/link';
import { MobileMenu } from '@/components/navigation';

// Utilities
import { usePathname } from 'next/navigation';

const routes = [
  {
    icon: <Community />,
    text: 'Community',
    href: '',
    subroutes: [
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
        icon: <Donate />,
        text: 'Donate',
        href: '/donate',
      },
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

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='flex justify-between items-center py-5 px-4 border-b border-gray-400 dark:border-gray-700 bg-white dark:bg-black sticky relative top-0 right-0 left-0 z-20 lg:px-32 2xl:px-56 3xl:px-[400px] 4xl:px-[500px]'>
      <div className='relative w-[128px] h-[33px] text-black dark:text-white transition ease-in-out duration-300 hover:scale-105'>
        <NextLink href='/'>
          <Heading>RYAN</Heading>
        </NextLink>
      </div>

      <div className='hidden xl:flex space-x-4 overflow-y-scroll'>
        {routes.map((route) => !route.subroutes ? (
          <NextLink
            key={route.text}
            className={`${route.href.includes(pathname) && pathname !== '/' && 'bg-gray-900'} text-sm flex items-center font-semibold rounded-lg tracking-wide gap-x-2 px-2 py-1 border border-black transition duration-300 ease-in-out hover:border hover:border-gray-700 2xl:text-base`}
            href={route.href}
          >
            {route.icon} {route.text}
          </NextLink>
        ) : (
          <RouteMenu
            key={route.text}
            icon={route.icon}
            title={route.text}
            routes={route.subroutes}
            pathname={pathname}
          />
        ))}
      </div>

      <div className='block xl:hidden'>
        <MobileMenu content={routes} />
      </div>
    </header>
  );
};

export { Header };
