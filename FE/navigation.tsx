import {
    Dimensions,
    StyleSheet,
} from "react-native";
import React from "react";;
import { IColor } from "style/color";
import useStyles from "style/useStyles";
import { useAppSelector } from "redux/hooks.ts/hooks";
import Auth from "navigation/auth";
import Introduce from "screen/Introduce/Introduce";
import BottomMain from "navigation/mainBottom";
import MainStack from "navigation/mainStack";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Navigation() {
    const { colors, styles } = useStyles(createStyles);
    const routeApp = useAppSelector((state) => (state.routeApp));
    if (routeApp.isFirst) {
        return (
            <Introduce />
        )
    } else if (routeApp.isAuth) {
        return (
            <Auth />
        )
    } else {
        return (
            <MainStack />
        )
    }

}

const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.backgroundColor,
            padding: width / 10,
        },
    });

export default Navigation;