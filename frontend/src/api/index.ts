import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const soccerApi = createApi({
  reducerPath: 'soccerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', `application/json`);
      return headers;
    },

  }),
  endpoints: builder => ({
  Fixtures: builder.query({
      query: () => ({
        url: `/today`,
      }),
    }),
  }),
});

export const { useFixturesQuery } = soccerApi;
