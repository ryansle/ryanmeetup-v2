'use client';

import { useState, useEffect } from 'react';

// Types
import type { MailerParams } from '@/lib/types';

// Utilities
import { validateEmail } from '@/utils/validate';
import { postEmail } from '@/data/post';

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

  const submit = () => {
    let date = new Date();
    date = new Date(date.getTime() - 3000000);
    // @ts-ignore
    const dateString = date.getFullYear().toString() + '-' + ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1).toString()) + '-' + (date.getDate().toString().length == 2 ? date.getDate().toString() : '0' + date.getDate().toString()) + ' ' + (date.getHours().toString().length == 2 ? date.getHours().toString() : '0' + date.getHours().toString()) + ':' + ((parseInt(date.getMinutes() / 5) * 5).toString().length == 2 ? (parseInt(date.getMinutes() / 5) * 5).toString() : '0' + (parseInt(date.getMinutes() / 5) * 5).toString()) + ':00';

    const params = {
      email,
      groups: [process.env.NEXT_PUBLIC_MAILER_GROUP_ID],
      status: 'active',
      subscribed_at: dateString,
    };

    postEmail(params as MailerParams);

    setEmail('');

    handler();
  };

  useEffect(() => {
    checkEmail(email);
  }, [email]);

  return (
    <div className='mt-[6px] w-full'>
      <label
        htmlFor='subscribe'
        className='text-gray-600 dark:text-gray-400 tracking-wide font-medium text-lg'
      >
        Subscribe for Ryan Meetup event emails
      </label>
      <div className='grid grid-cols-12 gap-x-2 mt-1'>
        <input
          type='email'
          id='subscribe'
          className='col-span-8 border bg-white dark:bg-black border-gray-700 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ring-inset placeholder-gray-700'
          placeholder='ryan@ryanmeetup.com'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          className='col-span-4 text-white h-10 w-full border-gray-700 font-medium rounded-md border text-sm py-2.5 px-2 lg:px-4 tracking-wide disabled:text-gray-600 disabled:cursor-not-allowed uppercase font-cooper flex items-center justify-center gap-x-1 hover:scale-102 transition duration-300 ease-in-out'
          disabled={disabled}
          onClick={submit}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export { SubscribeForm };