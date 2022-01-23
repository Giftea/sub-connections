import { Meta } from '@storybook/react';
import React from 'react';

import Loader from '../components/loader/Loader';

const meta: Meta = {
  title: 'Loader',
  component: Loader,
};

export default meta;

export const Default = () => <Loader />;
