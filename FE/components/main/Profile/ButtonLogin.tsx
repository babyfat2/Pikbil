import {
    Image,
    Text,
    Dimensions,
    View,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function ButtonLogin() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const user = useAppSelector((state) => (state.user.data));
    if (user === null) {

    } else {
        return (
            <View
                style={{
                    marginTop: 20,
                    height: height / 6,
                    backgroundColor: colors.secondary,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: 'row',
                }}
            >
                
            </View>
        );
    }
}
