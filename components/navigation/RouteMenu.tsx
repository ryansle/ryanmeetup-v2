'use client';

// Components
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { FaChevronDown as ChevronDown } from 'react-icons/fa6';
import NextLink from 'next/link';

// Types
import type { Route } from '@/lib/types';
import type { ReactNode } from 'react';

type RouteMenuProps = {
  icon: ReactNode;
  title: string;
  routes: Route[];
};

const RouteMenu = (props: RouteMenuProps) => {
  const { icon, title, routes } = props;

  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className='overflow-y-auto flex items-center font-semibold rounded tracking-wide gap-x-2 px-2 py-1 border border-black transition duration-300 ease-in-out hover:border hover:border-gray-700'>
            {icon} {title} <ChevronDown className='h-3 w-3 fill-gray-600' />
          </MenuButton>

          <Transition
            show={open}
            enter='transition ease-out duration-160'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <MenuItems
              anchor='bottom'
              className='z-50 bg-black w-40 rounded-lg border border-gray-700 p-2 mt-2'
            >
              {routes.map((route) => (
                <MenuItem key={route.text}>
                  <NextLink
                    className='flex items-center font-semibold tracking-wide gap-x-2 px-2 py-1'
                    href={route.href}
                  >
                    {route.icon} {route.text}
                  </NextLink>
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export { RouteMenu };
