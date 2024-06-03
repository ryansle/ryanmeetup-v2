// Types
import type { ReactNode } from 'react';

type ZoomButtonProps = {
  children: ReactNode;
  onClick: () => void;
  rightIcon: ReactNode;
  disabled: boolean;
};

const ZoomButton = (props: ZoomButtonProps) => {
  const { children, onClick, rightIcon, disabled } = props;

  return (
    <button
      className='rounded-lg p-3 bg-white dark:bg-black uppercase text-neutral-400 font-semibold border border-gray-700 transition duration-300 ease-in hover:text-white disabled:text-gray-700'
      onClick={onClick}
      disabled={disabled}
    >
      <div className='flex items-center justify-center'>
        {children} <span className='ml-2'>{rightIcon}</span>
      </div>
    </button>
  );
};

export { ZoomButton };