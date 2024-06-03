// Components
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel
} from '@headlessui/react';
import NextLink from 'next/link';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';
import { FaChevronDown as ChevronDown } from 'react-icons/fa6';

// Types
import type { ReactNode } from 'react';
import type { Route } from '@/lib/types';

type MenuOption = {
  icon: ReactNode;
  text: string;
  href: string;
  subroutes?: Route[];
};

type MobileMenuProps = {
  content: MenuOption[];
};

const MobileMenu = (props: MobileMenuProps) => {
  const { content } = props;

  return (
    <div className='flex items-center justify-center'>
      <div className='relative inline-block text-left z-10'>
        <Popover className='relative'>
          <PopoverButton className='text-sm flex items-center font-semibold rounded-lg tracking-wide gap-x-2 p-2 shrink-0 border border-black transition duration-300 ease-in-out hover:border hover:border-gray-700 2xl:text-base'>
            <Hamburger />
          </PopoverButton>
          <Transition
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel
              className='z-50 bg-white w-48 rounded-lg border border-gray-700 p-2 mt-2'
              anchor='bottom end'
            >
              {content.map((row) => !row.subroutes ? (
                <NextLink
                  key={row.text}
                  className='text-gray-900 flex items-center w-full px-4 py-2 gap-x-2 text-sm leading-5 text-left'
                  href={row.href}
                >
                  {row.icon} {row.text}
                </NextLink>
              ) : (
                <Disclosure key={row.text}>
                  <DisclosureButton className='text-gray-900 flex items-center w-full px-4 py-2 gap-x-2 text-sm leading-5 text-left '>
                    {row.icon} {row.text} <ChevronDown className='h-3 w-3 fill-gray-600' />
                  </DisclosureButton>
                  <DisclosurePanel className='pl-6'>
                    {row.subroutes.map((route) => (
                      <NextLink
                        key={route.text}
                        className='text-gray-900 flex items-center w-full px-4 py-2 gap-x-2 text-sm leading-5 text-left'
                        href={row.href}
                      >
                        {route.icon} {route.text}
                      </NextLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </PopoverPanel>
          </Transition>
        </Popover>

        {/* <Menu>
          {({ open }) => (
            <>
              <span className='rounded-md shadow-sm'>
                <MenuButton className='p-2 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'>
                  <Hamburger />
                </MenuButton>
              </span>

              <Transition
                show={open}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <MenuItems
                  static
                  className='absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
                >
                  <div className='py-1'>
                    {content.map((row) => !row.subroutes ? (
                      <MenuItem key={row.text}>
                        {({ active }) => (
                          <NextLink
                            className={`${active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                              } flex items-center w-full px-4 py-2 gap-x-2 text-sm leading-5 text-left`}
                            href={row.href}
                          >
                            {row.icon} {row.text}
                          </NextLink>
                        )}
                      </MenuItem>
                    ) : (
                      <Disclosure key={row.text}>
                        <DisclosureButton className='text-gray-900 flex items-center w-full px-4 py-2 gap-x-2 text-sm leading-5 text-left '>
                          {row.icon} {row.text} <ChevronDown className='h-3 w-3 fill-gray-600' />
                        </DisclosureButton>
                        <DisclosurePanel className='pl-6'>
                          {row.subroutes.map((route) => (
                            <MenuItem >
                              {({ active }) => (
                                <NextLink
                                  className={`${active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700'
                                    } flex items-center w-full px-4 py-2 gap-x-2 text-sm leading-5 text-left`}
                                  href={row.href}
                                >
                                  {route.icon} {route.text}
                                </NextLink>
                              )}
                            </MenuItem>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </>
          )}
        </Menu> */}
      </div>
    </div>
  );
};

export { MobileMenu };