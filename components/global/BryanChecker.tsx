'use client';

import { useState, useEffect } from 'react';

// Components
import { BryanModal } from '@/components/global';

// Utilities
import { usePathname } from 'next/navigation';

const BryanChecker = () => {
  const [bryanChecked, setBryanChecked] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('bryanCheck') as string);
    setBryanChecked(value);
  }, []);

  return (
    <>
      {pathname !== '/goodbye' && !bryanChecked && <BryanModal />}
    </>
  );
};

export { BryanChecker };
