'use client';

// Components
import NextImage from 'next/image';
import { Button, Heading, Text, List } from '@/components/global';
import { FaTicket as Ticket } from 'react-icons/fa6';

// Types
import type { ReactNode } from 'react';

type TicketSaleProps = {
  name: string;
  price: string;
  href: string;
  remaining: number;
  inclusions: {
    main: string;
    sub?: string;
  }[];
  icon: ReactNode;
  flashSale?: boolean;
  flashSalePrice?: string;
  disabled: boolean;
};

const TicketSale = (props: TicketSaleProps) => {
  const {
    name,
    price,
    href,
    remaining,
    inclusions,
    icon,
    flashSale = false,
    flashSalePrice = '',
    disabled,
  } = props;

  const supportedPaymentMethods = [
    {
      name: 'Amex',
      image: 'https://js.stripe.com/v3/fingerprinted/img/amex-b933c9009eeaf8cfd07e789c549b8c57.svg',
    },
    {
      name: 'Mastercard',
      image: 'https://js.stripe.com/v3/fingerprinted/img/mastercard-86e9a2b929496a34918767093c470935.svg',
    },
    {
      name: 'Visa',
      image: 'https://js.stripe.com/v3/fingerprinted/img/visa-fb36094822f73d7bc581f6c0bad1c201.svg',
    },
    {
      name: 'Cashapp',
      image: 'https://js.stripe.com/v3/fingerprinted/img/cashapp-7d18c6569a64a205d8cb64c9309358b5.svg',
    },
  ];

  return (
    <div>
      <Heading
        className='text-center mb-2'
        size='md'
      >
        Tickets for {name}s
      </Heading>

      <div className='border rounded-lg w-full p-4 border-gray-700 relative overflow-hidden shadow-xl'>
        {flashSale && (
          <div className='absolute -rotate-45 z-10 -left-[60px] top-[45px]'>
            <div className='px-2 text-md text-center rounded-lg font-semibold uppercase w-[240px] h-6 flex items-center justify-center bg-red-500 text-sm'>
              SOLD OUT
            </div>
          </div>
        )}

        <div className='my-2'>
          {flashSalePrice && (
            <div className='flex justify-center items-end space-x-4'>
              <Heading size='md' className='line-through'>
                {price}
              </Heading>

              <Heading className='text-center uppercase' size='xl'>
                {flashSalePrice}
              </Heading>
            </div>
          )}

          {flashSalePrice === '' && (
            <Heading className='text-center uppercase' size='xl'>
              {price}
            </Heading>
          )}
        </div>

        {/* <div className='mt-4 sm:min-h-80 md:min-h-[500px] lg:min-h-[400px]'> */}
        <div className='mt-4 min-h-44'>
          <Heading size='sm' className='mb-4 text-center'>
            What&apos;s Included:
          </Heading>
          <List
            content={inclusions}
            icon={icon}
            fontSize='sm'
          />
        </div>

        <Button.Link
          className='mt-4'
          href={href}
          leftIcon={<Ticket />}
          disabled={disabled}
        >
          {disabled ? 'Sold out' : 'Buy Ticket'}
        </Button.Link>

        <div className='mt-2 space-y-1'>
          <Text size='xxs' className='text-center'>
            Supported payment methods:
          </Text>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              {supportedPaymentMethods.map((method) => (
                <NextImage
                  key={method.name}
                  src={method.image}
                  height={16}
                  width={24}
                  alt={method.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Text className='text-center mt-4'>
        {remaining} Ticket{remaining !== 1 && 's'} Remaining
      </Text>
    </div>
  );
};

export { TicketSale };