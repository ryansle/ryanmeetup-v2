'use client';

// Components
import { Button } from '@/components/global';
import { FaGift as Gift } from 'react-icons/fa';

const JoinButton = () => (
  <div className='mt-6'>
    <Button.Link
      className='hidden lg:block'
      leftIcon={<Gift />}
      href='https://www.elfster.com/gift-exchanges/bb979ea9-b37b-4a70-b14f-16c66474ca26/rsvp/?join=ymi5'
      disabled
    >
      Registration closed
    </Button.Link>
  </div>
);

export { JoinButton };