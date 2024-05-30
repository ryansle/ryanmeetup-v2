// Components
import NextLink from 'next/link';

// Types
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  href: string;
}

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
};

const ButtonLink = (props: ButtonLinkProps) => {
  const { children, className, leftIcon, rightIcon, disabled = false, href } = props;

  return (
    <NextLink className={`${className} w-full`} href={href} >
      <Button
        className={className}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        onClick={() => console.log('')}
      >
        {children}
      </Button>
    </NextLink >
  );
};

const Button = (props: ButtonProps) => {
  const { children, className, onClick, leftIcon, rightIcon, disabled = false } = props;

  return (
    <button
      className={`${className} w-full rounded-lg p-3 bg-black uppercase overflow-hidden rounded-lg bg-black py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2 disabled:border-gray-400 disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className='absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-white font-semibold'>
        <div className='flex items-center justify-center'>
          {leftIcon && <span className='mr-2'>{leftIcon}</span>}
          {children}
          {rightIcon && <span className='ml-2'>{rightIcon}</span>}
        </div>
      </span>

      {!disabled && (
        <span aria-hidden className='absolute inset-0 z-0 scale-x-[7] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400' />
      )}
    </button>
  );
};

Button.Link = ButtonLink;

export { Button };
