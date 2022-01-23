import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useGetChainsQuery } from '@/utils/data';

import Home from './Home';

import { filteredDataType } from '@/types/types';

export default function HomePage() {
  const { data, error, isLoading } = useGetChainsQuery('properties');
  const filteredData: filteredDataType = [];
  for (const property in data) {
    data[property].tokenSymbol && data[property].tokenDecimals && filteredData.push(data[property]);
  }

  return (
    <Layout>
      <Seo />
      <main className='main-body'>
        <Home filteredData={filteredData} loading={isLoading} error={error} />
      </main>
    </Layout>
  );
}
