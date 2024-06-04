// Components
import { Text } from '@/components/global';
import { FaHandshake as Handshake } from 'react-icons/fa';

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
};

type ListItemProps = {
  main: string;
  sub?: string;
};

const ListItem = (props: ListItemProps) => {
  const { main, sub } = props;

  return (
    <li className='flex'>
      <Handshake className='fill-gray-600 dark:fill-white mt-1 mr-4 w-5 h-5 flex-shrink-0' />
      <Text>
        {main} <span className='font-light'>{sub}</span>
      </Text>
    </li>
  );
};

const List = (props: ListProps) => {
  const { content, className } = props;

  return (
    <ul className={`${className} space-y-2`}>
      {content.map((item: Content) => (
        <ListItem
          key={item.main}
          main={item.main}
          sub={item.sub}
        />
      ))}
    </ul>
  );
};

export { List };