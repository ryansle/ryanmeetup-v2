'use client';

// Components
import { Heading, Text, Divider, Button } from '@/components/global';
// Components
import { FaWhatsapp as Whatsapp } from 'react-icons/fa';

// Types
import type { ChapterLead } from '@/lib/types';

type ChapterInfoProps = {
  leaders: ChapterLead[];
  whatsapp: string;
};

const ChapterInfo = (props: ChapterInfoProps) => {
  const { leaders, whatsapp } = props;

  return (
    <div className='border rounded border-gray-400 p-4 dark:border-gray-700'>
      <Heading className='text-center mb-4'>
        Chapter Info
      </Heading>

      {leaders.map((ryan, index) => (
        <div className='grid grid-cols-3' key={index}>
          <div className='col-span-1'>
            <Text className='font-bold' color='white'>
              Chapter Lead:
            </Text>
          </div>

          <div className='col-span-2'>
            <Text>{ryan.name}</Text>
          </div>

          <div className='col-span-1'>
            <Text className='font-bold' color='white'>
              Email:
            </Text>
          </div>

          <div className='col-span-2'>
            <Text>{ryan.email}</Text>
          </div>
          {index !== leaders.length - 1 && <Divider margins='sm' className='col-span-3' />}
        </div>
      ))}

      <Divider margins='md' />

      <Button.Link
        leftIcon={<Whatsapp />}
        href={whatsapp as string}
      >
        Join the WhatsApp Group
      </Button.Link>
    </div>
  );
};

export { ChapterInfo };