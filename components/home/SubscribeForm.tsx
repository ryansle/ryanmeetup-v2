'use client';

import { useState, useEffect } from 'react';

// Components
import { Input } from '@/components/global';
import toast, { Toaster } from 'react-hot-toast';
import { IoCloseSharp as Close } from 'react-icons/io5';
import { FaCheckCircle as Check } from 'react-icons/fa';
import { HiOutlineMail as Email } from 'react-icons/hi';

// Utilities
import { validateEmail } from '@/utils/validate';
import { subscribeToEmails } from '@/actions/subscribe';

type SubscribeFormProps = {
  label: string;
  name: string;
};

const SubscribeForm = (props: SubscribeFormProps) => {
  const { label, name } = props;

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
    sendSuccessAlert();
  };

  useEffect(() => {
    checkEmail(email);
  }, [email]);

  const sendSuccessAlert = () => toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 text-black grid grid-cols-12 p-4 -pb-1`}
    >
      <div className='col-span-1 flex items-center justify-center'>
        <Check className='h-8 w-8 fill-green-500 shrink-0' />
      </div>
      <div className='col-span-10 pl-4 pr-6'>
        <h1 className='text-lg text-semibold font-cooper'>Thanks for subscribing!</h1>
        <p className='text-sm tracking-wide'>
          We promise we&apos;ll only ever send you Ryan Meetup news and information.
        </p>
      </div>
      <div className='col-span-1 flex items-center'>
        <button onClick={() => toast.dismiss(t.id)}>
          <span className='sr-only'>Close</span>
          <Close className='w-8 h-8 shrink-0' />
        </button>
      </div>
    </div>
  ));

  return (
    <div className='mt-[6px] w-full'>
      <Toaster position='bottom-center' />
      <div className='grid grid-cols-12 gap-x-2 mt-1 flex'>
        <div className='col-span-8'>
          <Input
            label={label}
            name={name}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='ryan@ryanmeetup.com'
            ignoreColorMode
          />
        </div>
        <div className='col-span-4 h-full justify-end flex flex-col'>
          <button
            className='text-black dark:text-white h-10 w-full border-gray-700 font-medium rounded-md border text-sm py-2.5 px-2 lg:px-4 tracking-wide disabled:text-gray-400 dark:disabled:text-gray-700 disabled:cursor-not-allowed uppercase font-cooper flex items-center justify-center gap-x-1 hover:scale-102 transition duration-300 ease-in-out space-x-2'
            disabled={disabled}
            onClick={submit}
          >
            <Email className='hidden md:block' /> Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export { SubscribeForm };