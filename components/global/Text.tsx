// Utilities
import clsx from 'clsx';

// Types
import type { ReactNode } from 'react';

type TextProps = {
  className?: string;
  children: ReactNode;
  color?: 'black' | 'white' | 'primary' | 'secondary';
  ignoreColorMode?: boolean;
};

const getVariantClasses = (color: string, ignoreColorMode: boolean) => {
  const styles = 'tracking-wide font-medium';

  const fontColor = clsx([
    color === 'black' && 'text-black dark:text-white',
    color === 'white' && 'text-black dark:text-white',
    color === 'primary' && 'text-gray-700',
    color === 'secondary' && `${ignoreColorMode ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'}`,
  ]);

  return clsx([styles, fontColor]);
};

const Text = (props: TextProps) => {
  const {
    className,
    children,
    color = 'secondary',
    ignoreColorMode = false,
  } = props;

  return (
    <p className={`${className} ${getVariantClasses(color, ignoreColorMode)}`}>
      {children}
    </p>
  );
};

export { Text };