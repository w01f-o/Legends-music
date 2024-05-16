import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tracksAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `http://${import.meta.env.VITE_BASE_URL}/api`,
  }),
  reducerPath: "tracksAPI",
  endpoints: (build) => ({
    fetchAllTracks: build.query<Track[], void>({
      query: () => ({
        url: "/tracks",
      }),
    }),
  }),
});
