// Components
import { Text } from '@/components/global';

// Types
import type { ReactNode } from 'react';

type Content = {
  main: string;
  sub?: string;
};

type ListProps = {
  content: {
    main: string;
    sub?: string;
  }[];
  className?: string;
  icon: ReactNode;
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
};

type ListItemProps = {
  main: string;
  sub?: string;
  icon: ReactNode;
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
};

const ListItem = (props: ListItemProps) => {
  const { main, sub, icon, fontSize } = props;

  return (
    <li className='flex'>
      {icon}
      <Text size={fontSize}>
        {main} {sub}
      </Text>
    </li>
  );
};

const List = (props: ListProps) => {
  const { content, className, icon, fontSize } = props;

  return (
    <ul className={`${className} space-y-2`}>
      {content.map((item: Content) => (
        <ListItem
          key={item.main}
          main={item.main}
          sub={item.sub}
          icon={icon}
          fontSize={fontSize}
        />
      ))}
    </ul>
  );
};

export { List };