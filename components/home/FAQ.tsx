'use client';

// Components
import { Heading, Text } from '@/components/global';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition
} from '@headlessui/react';
import { FaChevronDown as ChevronDown } from 'react-icons/fa';

// Types
import type { FrequentlyAskedQuestion } from '@/lib/types';

type FAQProps = {
  data: FrequentlyAskedQuestion[];
  toggleable?: boolean;
  showTitle?: boolean;
};

const FAQ = (props: FAQProps) => {
  const { data, toggleable = false, showTitle = false } = props;

  return (
    <div>
      {showTitle && <Heading className='mb-4'>Frequently Asked Questions</Heading>}

      <div>
        {data?.map((pair, index) => toggleable ? (
          <Disclosure
            as='div'
            className='w-full mb-8'
            key={index}
          >
            {({ open }) => (
              <>
                <DisclosureButton
                  className='grid grid-cols-10 gap-x-4 text-xl font-semibold tracking-wider mb-2 text-black text-left border-gray-700 w-full timing hover:underline hover:scale-102 dark:text-white'
                >
                  <span className='col-span-9'>
                    {pair.question}
                  </span>
                  <div className='col-span-1 flex justify-end'>
                    <ChevronDown className={`timing ${open && '-rotate-180'}`} />
                  </div>
                </DisclosureButton>
                <div className='overflow-hidden'>
                  <Transition
                    enter='duration-200 ease-in-out'
                    enterFrom='opacity-0 -translate-y-6'
                    enterTo='opacity-100 translate-y-0'
                    leave='duration-300 ease-in-out'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-6'
                  >
                    <DisclosurePanel className='origin-top transition'>
                      <Text>
                        {pair.answer}
                      </Text>
                    </DisclosurePanel>
                  </Transition>
                </div>
              </>
            )}
          </Disclosure>
        ) : (
          <div key={index}>
            <>
              <div className='text-xl font-semibold tracking-wider mb-2 text-black dark:text-white'>
                {pair.question}
              </div>
              <div className='text-lg mb-10 text-gray-600 dark:text-gray-400'>
                {pair.answer}
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FAQ };
