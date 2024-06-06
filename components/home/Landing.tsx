'use client';

// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Button, Heading, BryanChecker } from '@/components/global';
import { FaMeetup as Meetup } from 'react-icons/fa';
import { Transition } from '@headlessui/react';
import { SubscribeForm } from '@/components/home';

const Landing = () => {
  return (
    <div className='relative'>
      <div className='grid grid-cols-12 h-full flex items-center'>
        <div className='col-span-12 order-last xl:order-first xl:col-span-7'>
          <div className='space-y-2'>
            <Heading size='xl'>
              If your name is Ryan,
            </Heading>
            <Heading size='md'>
              you&apos;re in the right place.
            </Heading>
          </div>

          <div className='my-4 text-xl text-gray-600 dark:text-gray-400 xl:mr-32'>
            <div className='space-y-4'>
              <p>
                Welcome to the Ryan Meetup — a non-profit organization run by Ryans, for Ryans, with the ultimate goal of assembling as many Ryans as possible.
              </p>
              <p>
                One day, we aim to host RyanCon, and break the world record for the{' '}
                <NextLink
                  href='https://www.guinnessworldrecords.com/world-records/largest-same-name-gathering-first-name'
                  className='font-medium text-blue-500 hover:underline'
                >
                  largest same name gathering
                </NextLink>
                {' '}in history.
              </p>
              <p>
                See you soon, Ryan.
              </p>
            </div>

            <div className='w-full my-4 transition ease-in-out duration-300 hover:border-white hover:scale-102'>
              <Button.Link
                leftIcon={<Meetup />}
                className='w-full font-cooper text-white'
                href='https://www.meetup.com/ryanmeetup/'
              >
                Join the Ryan Meetup
              </Button.Link>
            </div>
            <p className='font-medium -mb-2 text-base text-black dark:text-white'>
              Sign up for Ryan Meetup event emails
            </p>
            <SubscribeForm label='' name='subscribe-home-page' />
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