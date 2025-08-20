'use client';

// Components
import { Heading, Text, Button } from '@/components/global';
import { FaHome as Home } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col space-y-8 min-h-[60vh]'>
      <Heading className='text-9xl title' size='h1'>
        404
      </Heading>

      <Heading className='text-center text-5xl title' size='h2'>
        Ryan Not Found
      </Heading>

      <Text className='text-center text-xl title'>
        Maybe you meant to access one of our other pages?
      </Text>

      <div className='w-1/2 flex items-center'>
        <Button.Link href='/' leftIcon={<Home />} newTab={false}>
          Go Home
        </Button.Link>
      </div>
    </div >
  );
};

export { PageNotFound };
