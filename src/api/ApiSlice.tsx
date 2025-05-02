import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "next/headers";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: () => ({}),
});
