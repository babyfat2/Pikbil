import { createSlice, } from "@reduxjs/toolkit";

export type RouteApp = {
    isFirst: boolean;
    isAuth: boolean;
    isMain: boolean;
};

const routeApp = createSlice({
    name: "RouteApp",
    initialState: {
        isFirst: true,
        isAuth: false,
        isMain: false,
    }  as RouteApp,
    reducers: {
        openAuth: (state) => {
            state.isFirst = false;
            state.isAuth = true; 
            state.isMain = false;
        },
        openHome: (state) => {
            state.isFirst = false;
            state.isAuth = false;
            state.isMain = true;
        },
    },
})

export default routeApp.reducer;
export const { openAuth, openHome } = routeApp.actions;