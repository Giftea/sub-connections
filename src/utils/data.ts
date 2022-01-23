import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://app.subsocial.network';

const createRequest = (url: string) => url;

export const fetchChainsApi = createApi({
  reducerPath: 'fetchChainsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getChains: builder.query({
      query: (value) => createRequest(`/subid/api/v1/chains/${value}`),
    }),
    getConnections: builder.query({
      query: (value) => createRequest(`/subid/api/v1/check/${value}`),
    }),
  }),
});

export const { useGetChainsQuery, useGetConnectionsQuery } = fetchChainsApi;
