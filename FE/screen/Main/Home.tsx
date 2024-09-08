import {
    View,
    Dimensions,
    Text,
    StyleSheet,
} from "react-native";
import React from "react";;
import useStyles from "style/useStyles";
import { LoginScreen } from "types/navigation";
import { IColor } from "style/color";
import { useAppSelector } from "redux/hooks.ts/hooks";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Home() {
    const { colors, styles } = useStyles(createStyles);
    const user = useAppSelector((state) => (state.user.data));
    return (
        <View style={{
            flex: 1,
        }}
        >
            <Text>Home</Text>
        </View>
    );
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
export default Home;