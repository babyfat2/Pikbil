import { createSlice, } from "@reduxjs/toolkit";
import { actionApi } from "redux/api/action";
import { authApi } from "redux/api/auth";


const trip = createSlice({
    name: "trip",
    initialState: {
        reloading: false,
    },
    reducers: {
        reloadTrip: (state) => {
            state.reloading = true;
        }
    },
    extraReducers: (builder) => {
          builder.addMatcher(
            actionApi.endpoints.getMyTrip.matchFulfilled,
            (state) => {
              state.reloading = false;
            }
          );
          builder.addMatcher(
            actionApi.endpoints.getMyTrip.matchPending, 
            (state) => {
            state.reloading = false;
          });
          builder.addMatcher(
            actionApi.endpoints.getMyTrip.matchRejected,
            (state) => {
              state.reloading = false;
            }
          );
    },
})

export default trip.reducer;
export const { reloadTrip } = trip.actions;