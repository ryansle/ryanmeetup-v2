// Components
import { Heading } from '@/components/global';

// Types
import type { NextPage } from 'next';

const GoodbyePage: NextPage = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center h-screen space-y-8 bg-white dark:bg-black'>
      <div className='block space-y-20 md:hidden'>
        <Heading size='xl'>
          Goodbye, Bryan.
        </Heading>

        <Heading>
          There are no Bryans allowed at the Ryan Meetup.
        </Heading>
      </div>
      <div className='hidden space-y-20 md:block'>
        <Heading size='3xl'>
          Goodbye, Bryan.
        </Heading>

        <Heading>
          There are no Bryans allowed at the Ryan Meetup.
        </Heading>
      </div>
    </div>
  );
};

export default GoodbyePage;
