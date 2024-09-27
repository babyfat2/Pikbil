import { createSlice, } from "@reduxjs/toolkit";
import { actionApi } from "redux/api/action";
import { authApi } from "redux/api/auth";
import { chatApi } from "redux/api/chat";


const chat = createSlice({
    name: "chat",
    initialState: {
        reloading: false,
    },
    reducers: {
        reloadChat: (state) => {
            state.reloading = true;
        }
    },
    extraReducers: (builder) => {
          builder.addMatcher(
            chatApi.endpoints.getMyRoomChat.matchFulfilled,
            (state) => {
              state.reloading = false;
            }
          );
          builder.addMatcher(
            chatApi.endpoints.getMyRoomChat.matchPending, 
            (state) => {
            state.reloading = false;
          });
          builder.addMatcher(
            chatApi.endpoints.getMyRoomChat.matchRejected,
            (state) => {
              state.reloading = false;
            }
          );
    },
})

export default chat.reducer;
export const { reloadChat } = chat.actions;