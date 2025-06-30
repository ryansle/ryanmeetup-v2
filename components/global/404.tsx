'use client';

// Components
import { Heading, Text, Button } from '@/components/global';

const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col space-y-5'>
      <Heading className='text-9xl' size='h1'>
        404
      </Heading>

      <Heading className='text-center text-5xl' size='h2'>
        Ryan Not Found
      </Heading>

      <Text className='text-center text-xl'>
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
