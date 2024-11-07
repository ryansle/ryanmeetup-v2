'use client';

// Components
import { Heading, Text, Button } from '@/components/global';

const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col space-y-5'>
      <Heading size='3xl'>
        404
      </Heading>

      <Heading size='xl' className='text-center'>
        Ryan Not Found
      </Heading>

      <Text size='lg' className='text-center'>
        Maybe you meant to access one of our other pages?
      </Text>

      <div className='w-1/2 flex items-center'>
        <Button.Link href='/' newTab={false}>
          Go Home
        </Button.Link>
      </div>
    </div >
  );
};

export { PageNotFound };
