'use client';

// Components
import { Heading, Text, Divider, Button } from '@/components/global';
import { FaWhatsapp as Whatsapp } from 'react-icons/fa';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Types
import type { ChapterLead, ContentfulImage } from '@/lib/types';

// Utilities
import { convertImageUrl, filterInstagram } from '@/utils/convert';

type ChapterInfoProps = {
  leaders: ChapterLead[];
  whatsapp: string;
  instagram: string;
  avatar: ContentfulImage;
  city: string;
};

const ChapterInfo = (props: ChapterInfoProps) => {
  const { 
    leaders, 
    whatsapp, 
    instagram,
    avatar,
    city,
  } = props;

  return (
    <div className='border rounded-3xl border-gray-400 p-4 dark:border-gray-700 bg-white dark:bg-black'>
      <div className='mb-8'>
        <div className='flex items-center justify-center'>
          <NextImage 
            src={(avatar && convertImageUrl(avatar)) ?? '/chapters/default.jpg'}
            width={200}
            height={200}
            alt={`Ryan Meetup ${city}`}
            className='rounded-full border shadow-xl'
          />
        </div>
      </div>

      <div className='grid grid-cols-9 gap-4'>
        <div className='col-span-4'>
          <Text className='font-bold text-black text-base lg:text-lg dark:text-white'>
            Chapter Lead{leaders.length > 1 && 's'}:
          </Text>
        </div>

        <div className='col-span-5'>
          {leaders.map((ryan, index) => (
            <Text key={index} className='-ml-1 text-base lg:text-lg'>
              {ryan.name}
            </Text>
          ))}

          {leaders.length === 0 && (
            <Text className='-ml-1 text-base lg:text-lg'>
              No active lead.
            </Text>
          )}
        </div>
      </div>

      <div className='grid grid-cols-7 gap-4'>
        <div className='col-span-3'>
          <Text className='font-bold text-base text-black lg:text-lg dark:text-white'>
            Instagram:
          </Text>
        </div>

        <div className='col-span-4'>
          <NextLink href={instagram} className='text-base lg:text-lg font-bold text-blue-700 dark:text-blue-500'>
            @{filterInstagram(instagram)}
          </NextLink>
        </div>
      </div>

      <div className='mt-8'>
        <Heading className='text-xl' size='h4'>
          Need to get in contact?
        </Heading>

        <Text className='text-base lg:text-lg'>
          Our Instagram inbox is open for all inquiries.
        </Text>
      </div>

      {whatsapp && (
        <div>
          <Divider margins='md' />

          <Button.Link
            leftIcon={<Whatsapp />}
            href={whatsapp as string}
          >
            Join the WhatsApp Group
          </Button.Link>
        </div>
      )}
    </div>
  );
};

export { ChapterInfo };