// Utilities
import clsx from 'clsx';

// Types
import type { ReactNode } from 'react';

type HeadingProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'display';
  variant?: 'ryan' | 'normal';
  className?: string;
  children: ReactNode;
  bold?: boolean;
  ignoreColorMode?: boolean;
};

const getVariantClasses = (variant: string, bold: boolean) => {
  const fontWeight = clsx([
    bold && 'font-bold',
    !bold && 'font-base',
  ]);

  const fontFace = clsx([
    variant === 'ryan' && 'font-cooper',
    variant === 'normal' && 'font-sans',
  ]);

  return clsx([fontWeight, fontFace]);
};

const Heading = (props: HeadingProps) => {
  const {
    size = 'lg',
    className,
    children,
    variant = 'ryan',
    bold = false,
    ignoreColorMode = false,
  } = props;

  const styles = `tracking-wider ${!ignoreColorMode && 'text-black dark:text-white'}`;

  const renderHeading = () => {
    switch (size) {
      case '3xl':
        return <h1 className={`${styles} text-9xl`}>{children}</h1>;
      case '2xl':
        return <h1 className={`${styles} text-7xl`}>{children}</h1>;
      case 'xl':
        return <h1 className={`${styles} text-5xl`}>{children}</h1>;
      case 'lg':
        return <h2 className={`${styles} text-4xl`}>{children}</h2>;
      case 'md':
        return <h3 className={`${styles} text-3xl`}>{children}</h3>;
      case 'sm':
        return <h4 className={`${styles} text-xl`}>{children}</h4>;
      case 'xs':
        return <h5 className={`${styles} text-lg`}>{children}</h5>;
      case 'display':
        return <h1 className={`${styles} text-display3`}>{children}</h1>;
      default:
        return <h4 className={`${styles} text-xl`}>{children}</h4>;
    }
  };

  return (
    <div className={clsx([className, getVariantClasses(variant, bold)])}>
      {renderHeading()}
    </div>
  );
};

export { Heading };
