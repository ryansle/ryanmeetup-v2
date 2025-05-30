'use client';

// Components
import { Heading, Button } from '@/components/global';

// Types
import type { ReactNode } from 'react';

type BlurbProps = {
  fullHeadline: string;
  smallHeadline?: string;
  children: ReactNode;
  href: string;
  icon: ReactNode;
  hrefText: string;
};

const Blurb = (props: BlurbProps) => {
  const {
    fullHeadline,
    smallHeadline = fullHeadline,
    children,
    href,
    icon,
    hrefText,
  } = props;

  return (
    <div>
      <div className='hidden xl:block'>
        <Heading
          className='mb-6 text-center'
          size='2xl'
        >
          {fullHeadline}
        </Heading>
      </div>

      <div className='block xl:hidden'>
        <Heading className='mb-6 text-center'>
          {smallHeadline}
        </Heading>
      </div>

      <div className='text-center'>
        {children}

        <div className='grid grid-cols-12'>
          <div className='col-span-0 xl:col-span-1' />
          <Button.Link
            className='col-span-12 xl:col-span-10'
            href={href}
            leftIcon={icon}
          >
            {hrefText}
          </Button.Link>
          <div className='col-span-0 xl:col-span-1' />
        </div>
      </div>
    </div>
  );
};

export { Blurb };