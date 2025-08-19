'use client';

// Components
import { Heading, Text, Button } from '@/components/global';
import { FaDollarSign as Dollar } from 'react-icons/fa';

const CardInfo = () => {
  return (
     <div className='col-span-12 xl:col-span-6 text-black h-full border border-gray-400 bg-black rounded-xl w-full p-4 lg:p-8 text-left'>
      <Heading 
        className='text-2xl text-center lg:text-left lg:text-3xl font-semibold mb-4' 
        variant='normal'
      >
        Ryan Meetup Membership Cards
      </Heading>

      <section className='space-y-8 text-base xl:text-xl'>
        <Text>
          You&apos;ve always been a member, and now you can have the card to prove it.
        </Text>

        <Text>
          Each purchase includes a customized anodized aluminum card that was designed by a Ryan and produced by a Ryan—just for you, Ryan. 
        </Text>

        <Text>
          But it&apos;s more than just another flex on your non-Ryan &quot;friends.&quot; Your card comes with Ryan Pre-Check, letting you breeze past secu-Ry-ty at our events without having to show your Ry-D. 
        </Text>

        <div className='text-gray-400 tracking-wide font-medium mt-8'>
          Price:{' '}
          <span className='relative group text-white hover:underline'>
            $30 USD
            <span className='text-red-500'>*</span>

            <span className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-max rounded-lg bg-black p-2 text-xs text-white shadow-lg z-10 border'>
              <Heading className='text-base mb-2' size='h3'>
                Why this price?
              </Heading>

              <span className='text-sm text-gray-400'>
                This price allows us to cover the cost of production, <br />
                shipping, and handling, while also supporting the ongoing <br />
                development of the Ryan Meetup community. It also <br />
                supports Ryan&apos;s work at Transition Marketing.
              </span>
            </span>
          </span>
          ; includes free shipping.
        </div>
      </section>

      <Text className='mt-2 text-sm'>
        Please allow 2-3 weeks for delivery, as each card is made to order.
      </Text>

      <Button.Link 
        href='https://buy.stripe.com/3cIcN4fTP7BS0kzbXJ2kw0a'
        leftIcon={<Dollar className='w-5 h-5' />}
        className='mt-8'
      >
        BUY NOW
      </Button.Link>
    </div>
  );
};

export { CardInfo }