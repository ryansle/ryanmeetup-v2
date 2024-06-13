'use client';

// Components
import { Heading, Text } from '@/components/global';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition
} from '@headlessui/react';
import {
  FaChevronDown as ChevronDown,
  FaChevronUp as ChevronUp
} from 'react-icons/fa';

// Types
import type { FrequentlyAskedQuestion } from '@/lib/types';

type FAQProps = {
  data: FrequentlyAskedQuestion[];
  toggleable?: boolean;
};

const FAQ = (props: FAQProps) => {
  const { data, toggleable = false } = props;

  return (
    <div>
      <Heading className='mb-4'>Frequently Asked Questions</Heading>

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
                  className='grid grid-cols-10 gap-x-4 text-xl font-semibold tracking-wider mb-2 text-black text-left border-gray-700 w-full transition duration-300 ease-in-out hover:underline hover:scale-102 dark:text-white'
                >
                  <span className='col-span-9'>
                    {pair.question}
                  </span>
                  <div className='col-span-1 flex justify-end'>
                    {open ? <ChevronUp /> : <ChevronDown />}
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

{/* <div className="h-screen w-full pt-32 px-4">
  <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
    <Disclosure as="div" className="p-6" defaultOpen={true}>
      <DisclosureButton className="group flex w-full items-center justify-between">
        <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
          What is your refund policy?
        </span>
        <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
        If you're unhappy with your purchase, we'll refund you in full.
      </DisclosurePanel>
    </Disclosure>
    <Disclosure as="div" className="p-6">
      <DisclosureButton className="group flex w-full items-center justify-between">
        <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
          Do you offer technical support?
        </span>
        <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 text-sm/5 text-white/50">No.</DisclosurePanel>
    </Disclosure>
  </div>
</div> */}

export { FAQ };
