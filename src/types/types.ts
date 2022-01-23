import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

export type Items = {
  filteredData: Array<{
    icon: string;
    name: string;
    ss58Format: number;
    tokenDecimals: number[];
    tokenSymbol: string[];
  }>;
  loading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export type filteredDataType = {
  icon: string;
  name: string;
  ss58Format: number;
  tokenDecimals: number[];
  tokenSymbol: string[];
}[];

export type Item = {
  icon?: string;
  name?: string;
  ss58Format?: number;
  tokenDecimals?: number[];
  tokenSymbol?: string[];
};
