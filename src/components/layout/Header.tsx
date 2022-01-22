import * as React from 'react';

import NextImage from '@/components/NextImage';


export default function Header() {
  return (
    <header className='sticky bg-light top-0 z-50 bg-white py-5'>
      <div className='layout flex justify-between items-center h-14'>
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/favicon/logo.svg'
              width='100'
              height='40'
              alt='Icon'
            />
        <nav>
        </nav>
      </div>
    </header>
  );
}
