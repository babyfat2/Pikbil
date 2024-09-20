import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICar, IDiscount, IProtection } from "../../types/api";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_API_URL}/api/service`,
  }),
  tagTypes: ["service"],
  endpoints: (builder) => ({
    getAllCar: builder.query<
            ICar[],
            null
        >({
            query: () => `/getAllCar`,
            extraOptions: {maxRetries: 2}
        }),
        getAllDiscount: builder.query<
            IDiscount[],
            null
        >({
            query: () => `/getAllDiscount`,
            extraOptions: {maxRetries: 2}
        }),
        getAllProtectionPlans: builder.query<
            IProtection[],
            null
        >({
            query: () => `/getAllProtectionPlans`,
            extraOptions: {maxRetries: 2}
        }),
  }),
});

export const { useGetAllCarQuery, useGetAllDiscountQuery, useGetAllProtectionPlansQuery } = serviceApi;
