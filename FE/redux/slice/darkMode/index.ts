import { createSlice, } from "@reduxjs/toolkit";
import Colors, { IColor } from "style/color";

export type darkMode = {
    color: IColor,
    status: "dark" | "light"
};

const darkMode = createSlice({
    name: "darkMode",
    initialState: {
        color: Colors.light,
        status: "light",
    }  as darkMode,
    reducers: {
        dark: (state) => {
            state.color = Colors.dark;
            state.status = "dark"; 
        },
        light: (state) => {
            state.color = Colors.light;
            state.status = "light";
        },
    },
})

export default darkMode.reducer;
export const { dark, light } = darkMode.actions;