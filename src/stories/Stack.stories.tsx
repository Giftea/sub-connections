import { Meta } from '@storybook/react';
import React from 'react';

import { Stack } from '../components/stack/Stack';

const meta: Meta = {
  title: 'Stack',
  component: Stack,
};

export default meta;

export const Default = () => <Stack> </Stack>;
