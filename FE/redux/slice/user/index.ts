import { createSlice, } from "@reduxjs/toolkit";
import { authApi } from "redux/api/auth";
import Colors, { IColor } from "style/color";
import { IUserData } from "types/api";

export type UserState = {
    data: IUserData | null;
    error: any;
    token: string | null;
    loading: boolean;
};

const user = createSlice({
    name: "user",
    initialState: {
        data: null,
        error: null,
        token: null,
        loading: false,
    }  as UserState,
    reducers: {
        signOut: (state) => {
            state.data = null;
            state.error = null;
            state.token = null;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
          builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
              state.data = payload.data;
              state.error = null;
              state.loading = false;
              state.token = payload.token;
            }
          );
          builder.addMatcher(authApi.endpoints.login.matchPending, (state) => {
            state.data = null;
            state.error = null;
            state.loading = true;
            state.token = null;
          });
          builder.addMatcher(
            authApi.endpoints.login.matchRejected,
            (state, { error }) => {
              state.data = null;
              state.error = error;
              state.loading = true;
              state.token = null;
            }
          );
    },
})

export default user.reducer;
export const { signOut } = user.actions;