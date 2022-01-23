import { Meta } from '@storybook/react';
import React from 'react';

import { Card, Props } from '../components/card/Card';

const meta: Meta = {
  title: 'Card',
  component: Card,
  argTypes: {
    data: { control: 'color' },
  },
};

export default meta;

export const Default = (args: JSX.IntrinsicAttributes & Props) => <Card {...args} />;
