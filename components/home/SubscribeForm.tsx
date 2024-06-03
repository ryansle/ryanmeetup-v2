'use client';

import { useState, useEffect } from 'react';

// Components
import { Input } from '@/components/global';

// Utilities
import { validateEmail } from '@/utils/validate';
import { subscribeToEmails } from '@/actions/subscribe';

type SubscribeFormProps = {
  handler: () => void;
};

const SubscribeForm = (props: SubscribeFormProps) => {
  const { handler } = props;

  const [email, setEmail] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);

  const checkEmail = (email: string) => {
    const valid = validateEmail(email);

    if (valid) setDisabled(false);
    else setDisabled(true);
  };

  const submit = async () => {
    subscribeToEmails(email);

    setEmail('');

    handler();
  };

  useEffect(() => {
    checkEmail(email);
  }, [email]);

  return (
    <div className='mt-[6px] w-full'>
      <div className='grid grid-cols-12 gap-x-2 mt-1 flex'>
        <div className='col-span-8'>
          <Input
            label='Subscribe for Ryan Meetup event emails'
            name='subscribe'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder='ryan@ryanmeetup.com'
          />
        </div>
        <div className='col-span-4 h-full justify-end flex flex-col'>
          <button
            className='text-white h-10 w-full border-gray-700 font-medium rounded-md border text-sm py-2.5 px-2 lg:px-4 tracking-wide disabled:text-gray-600 disabled:cursor-not-allowed uppercase font-cooper flex items-center justify-center gap-x-1 hover:scale-102 transition duration-300 ease-in-out'
            disabled={disabled}
            onClick={submit}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export { SubscribeForm };