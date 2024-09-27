import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBoxChat, ICar, IDiscount, IMessage, ITrip } from "../../types/api";
import { RootState } from "redux/store";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.EXPO_PUBLIC_API_URL}/api/chat`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      // If we have a token, set it in the header
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["chat"],
  endpoints: (builder) => ({
    getMyRoomChat: builder.query<
      IBoxChat[],
      null
    >({
      query: () => `/getMyRoomChat`,
      extraOptions: { maxRetries: 2 }
    }),
    getChatById: builder.query<
      IMessage[],
      string
    >({
            query: (ownerId) => `/getChatByID?ownerId=${ownerId}`,
      extraOptions: { maxRetries: 2 }
    }),
    firstMessage: builder.mutation<
      { id: string},
      {}
    >({
      query: (payload) => ({
        url: "/firstMessage",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),
});

export const { 
  useGetMyRoomChatQuery,
  useGetChatByIdQuery,
  useFirstMessageMutation,
 } = chatApi;