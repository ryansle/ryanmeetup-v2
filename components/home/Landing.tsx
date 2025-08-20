'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Button, Heading } from '@/components/global';
import { Transition } from '@headlessui/react';
import { FaRegNewspaper as Newsletter } from 'react-icons/fa6';


const Landing = () => {
  return (
    <div className='relative'>
      <div className='grid grid-cols-12 h-full flex items-center'>
        <div className='col-span-12 order-last xl:order-first xl:col-span-7'>
          <div className='space-y-2'>
            <Heading className='text-5xl title' size='h1'>
              If your name is Ryan,
            </Heading>
            <Heading className='text-3xl title' size='h2'>
              you&apos;re in the right place.
            </Heading>
          </div>

          <div className='my-4 text-xl text-gray-700 dark:text-gray-400 xl:mr-32'>
            <div className='space-y-4'>
              <p>
                Welcome to the Ryan Meetup — a non-profit organization run by Ryans, for Ryans, with the ultimate goal of assembling as many Ryans as possible.
              </p>
              <p>
                One day, we aim to host RyanCon, and break the world record for the{' '}
                <NextLink
                  href='https://www.guinnessworldrecords.com/world-records/largest-same-name-gathering-first-name'
                  className='font-medium text-blue-700 dark:text-blue-500 hover:underline'
                >
                  largest same name gathering
                </NextLink>
                {' '}in history.
              </p>
              <p>
                See you soon, Ryan.
              </p>
            </div>

            <div className='w-full my-4 timing hover:border-white hover:scale-102'>
              <Button.Link
                className='w-full font-cooper text-white'
                href='/newsletter'
                leftIcon={<Newsletter className='w-5 h-5' />}
              >
                Sign up for our newsletter
              </Button.Link>
            </div>
          </div>
        </div>
        <div className='col-span-12 order-first mb-4 xl:col-span-5 xl:order-last xl:mb-0'>
          <Transition
            appear={true}
            show={true}
            enter='transition-opacity ease-linear duration-1000'
            enterFrom='opacity-0'
            enterTo='opacity-100'
          >
            <div className='relative w-full h-56 xl:h-96'>
              <NextImage
                className='rounded-xl shadow'
                src='/nametags.jpeg'
                fill
                alt='Ryan Roundup, March 2023'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export { Landing };