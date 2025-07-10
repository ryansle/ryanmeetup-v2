// Components
import NextLink from 'next/link';
import { Text } from '@/components/global';

// Types
import type { ReactNode } from 'react';

type BreadcrumbProps = {
  crumbs: {
    icon: ReactNode;
    href: string;
    title: string;
  }[];
  className?: string;
};

const Breadcrumbs = (props: BreadcrumbProps) => {
  const { crumbs, className } = props;

  return (
    <div className={`flex space-x-4 mb-2 ${className}`}>
      {crumbs.map((anchor, index) => (
        <div className='flex space-x-4 mb-2 text-lg' key={anchor.title}>
          <NextLink 
            href={anchor.href} 
            className='flex items-center timing hover:scale-102 hover:underline'
          >
            {anchor.icon} 
            <Text className={index === crumbs.length - 1 ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'}>
              {anchor.title}
            </Text>
          </NextLink>

          {index !== crumbs.length - 1 && <span className='text-gray-400'> / </span>}
        </div>
      ))}
    </div>
  );
};

export { Breadcrumbs };