import React, { HTMLAttributes, ReactNode } from 'react';
import { ImSpinner2 } from 'react-icons/im';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Loader = () => {
  return (
    <div className='loader'>
      <ImSpinner2 className='spinner' />
    </div>
  );
};

export default Loader;
