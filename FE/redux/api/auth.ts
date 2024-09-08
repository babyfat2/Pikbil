import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserData } from "../../types/api";

interface loginResult {
  msg: string;
  token: string;
  data: IUserData;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_API_URL}/api/auth`,
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    login: builder.mutation<
      loginResult,
      {
        email: string;
        password: string;
      }
    >({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    register: builder.mutation<
      loginResult,
      {
        email: string;
        password: string;
        fullname: string;
      }
    >({
      query: (payload) => ({
        url: "/register",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
