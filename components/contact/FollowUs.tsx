
'use client';

// Components
import {
  FaInstagram as Instagram,
  FaMeetup as Meetup,
  FaYoutube as YouTube,
  FaWhatsapp as Whatsapp,
  FaTiktok as TikTok,
} from 'react-icons/fa';
import { FaThreads as Threads,} from 'react-icons/fa6';
import { HiOutlineMail as Email } from 'react-icons/hi';
import { Divider, Text, Button } from '@/components/global';
import { FaRegNewspaper as News } from 'react-icons/fa';
import NextLink from 'next/link';

// Utilities
import { socials } from '@/lib/constants';

const FollowUs = () => {
  const iconStyle = 'fill-white h-8 w-8';

  const renderIcon = (title: string) => {
    switch (title) {
      case 'Instagram':
        return <Instagram className={iconStyle} />;
      case 'Meetup':
        return <Meetup className={iconStyle} />;
      case 'YouTube':
        return <YouTube className={iconStyle} />;
      case 'TikTok':
        return <TikTok className={iconStyle} />;
      case 'Threads':
        return <Threads className={iconStyle} />;
      default:
        return;
    }
  };

  const renderWord = (title: string) => {
    switch (title) {
      case 'Instagram':
        return 'Follow'
      case 'Meetup':
        return 'Join';
      case 'YouTube':
        return 'Subscribe to';
      case 'TikTok':
        return 'Follow';
      case 'Threads':
        return 'Follow';
      default:
        return;
    }
  };

  return (
    <div className='col-span-2 md:col-span-1'>
      <div className='space-y-3'>
        {socials.map((outlet) => (
          <NextLink 
            href={outlet.href}
            key={outlet.text} 
            className='flex space-x-4 timing hover:scale-102'
          >
            {renderIcon(outlet.text)}

            <Text color='white'>
              {renderWord(outlet.text)} us on {outlet.text}
            </Text>
          </NextLink>
        ))}
        <NextLink 
          href='/whatsapp'
          className='flex space-x-4 timing hover:scale-102'
        >
          <Whatsapp className={iconStyle}/>

          <Text color='white'>
            Join the conversation on WhatsApp 
          </Text>
        </NextLink>
      </div>

      <Divider />

      <NextLink 
        href='mailto:ryan@ryanmeetup.com'
        className='flex space-x-4 timing hover:scale-102 mb-8'
      >
        <Email className='h-8 w-8' />

        <Text color='white'>
          ryan@ryanmeetup.com
        </Text>
      </NextLink>

      <Button.Link
        href='/newsletter'
        leftIcon={<News />}
      >
        Sign up for our newsletter
      </Button.Link>
    </div>
  );
};

export { FollowUs };