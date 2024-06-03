'use client';

import { useState } from 'react';

// Components
import { Modal } from '@/components/global';

// Utilities
import { useRouter } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';

const BryanModal = () => {
  const localStorageKey = 'bryanCheck';

  const [isChecked, handleChange] = useLocalStorage(localStorageKey, false);
  const [showModal, setShowModal] = useState<boolean>(true);

  const router = useRouter();

  return (
    <Modal
      open={showModal}
      setIsOpen={setShowModal}
      title='Welcome to the Ryan Meetup.'
      closable={false}
      cancelButtonText='Leave'
      continueButtonText='Continue'
      isContinueDisabled={!isChecked}
      cancelAction={() => router.push('/goodbye')}
      continueAction={() => setShowModal(false)}
    >
      <div className='flex items-center' onClick={handleChange}>
        <input
          className='w-4 h-4 text-blue-600 rounded focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
        />
        <label className='font-medium ml-4'>
          I certify my name is not Bryan or Brian.
        </label>
      </div>
    </Modal>
  );
};

export { BryanModal };