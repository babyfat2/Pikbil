import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICar, IDiscount, ITrip } from "../../types/api";
import { RootState } from "redux/store";

export const actionApi = createApi({
  reducerPath: "actionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_API_URL}/api/user`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      // If we have a token, set it in the header
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["action"],
  endpoints: (builder) => ({
    addCheckout: builder.mutation<
      {},
      {
        carId: string,
        price: number,
        status: string,
        dateRent: Date,
      }
    >({
      query: (payload) => ({
        url: "/addCheckout",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    addReviewCar: builder.mutation<
      {},
      {
        star: number,
        carId: string,
        description: string,
      }
    >({
      query: (payload) => ({
        url: "/addReviewCar",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getMyTrip: builder.query<
      ITrip[],
      null
    >({
      query: () => `/getMyTrip`,
      extraOptions: { maxRetries: 2 }
    }),
  }),
});

export const { useAddCheckoutMutation, useAddReviewCarMutation ,useGetMyTripQuery } = actionApi;
