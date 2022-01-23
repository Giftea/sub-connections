import * as React from 'react';

import Loader from '@/components/loader/Loader';
import { Stack } from '@/components/stack/Stack';

import { Card } from '../components/card/Card';
import { Items } from '../types/types';

export const Home: React.FC<Items> = ({ filteredData, loading }) => {
  const [chains, setChains] = React.useState([{}]);

  React.useEffect(() => {
    return setChains(filteredData);
  }, [filteredData, loading]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Stack>
          {chains?.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </Stack>
      )}
    </div>
  );
};

export default Home;
