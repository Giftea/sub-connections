/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React, { HTMLAttributes } from 'react';

import { Item } from '@/types/types';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  data: Item;
}

export const Card = ({ data }: Props) => {
  const [connectedStatus, setConnected] = React.useState(true);
  const checkForConnected = async () => {
    try {
      const status = await axios.get(
        `https://app.subsocial.network/subid/api/v1/check/${data.name?.toLowerCase().split(' ', 1)}`
      );
      setConnected(status.data);
      return status.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const checkAfterFiveMins = () => {
    setInterval(() => {
      return checkForConnected();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 300000);
  };

  React.useEffect(() => {
    checkForConnected();
    checkAfterFiveMins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='storybook-card'>
      <img
        src={`https://sub.id/images/${data.icon}`}
        className='chain-icon'
        width='180'
        height='180'
        alt='Icon'
      />
      <div>
        <h3 className='chain-name'>{data.name}</h3>

        {data?.tokenSymbol?.map((symbol, index) => {
          return (
            <p className='chain-symbol' key={index}>
              {index === 0 && symbol}
            </p>
          );
        })}
      </div>
      <div
        className='chain-connection'
        style={{ backgroundColor: connectedStatus ? '#4BB543' : '#D0342C' }}
      ></div>
    </div>
  );
};
