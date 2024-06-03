'use client';

// Components
import { Heading, Text, Button } from '@/components/global';

// Types
import type { ReactNode } from 'react';

type PageNotFoundProps = {
  children?: ReactNode;
};

const PageNotFound = (props: PageNotFoundProps) => {
  const { children } = props;

  return (
    <div className='flex items-center justify-center flex-col space-y-5'>
      <Heading size='3xl'>
        404
      </Heading>

      <Heading size='xl'>
        Ryan Not Found
      </Heading>

      <Text size='lg'>
        Maybe you meant to access one of our other pages?
      </Text>

      <div className='w-1/2 flex items-center'>
        <Button.Link href='/'>
          Go Home
        </Button.Link>
      </div>
    </div >
  );
};

export { PageNotFound };
