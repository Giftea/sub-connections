import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Stack = ({ children, ...props }: Props) => {
  return (
    <div {...props} className='storybook-stack'>
      {children}
    </div>
  );
};
