import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import React, { useState } from "react";
import useStyles from "style/useStyles";
import { IColor } from "style/color";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function NoCar() {
    const { colors, styles } = useStyles(createStyles);
    return (
        <View style={styles.container}>
            <Image source={require("../../../image/nocar.png")}/>
            <Text style={styles.textNoCar}>You don't have trip yet</Text>
            <Text style={styles.textSeemLike}>Seems like you never rent in Pikbil. Try rent some car in your account.</Text>
        </View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            height: height * 0.65,
            alignItems: "center",
            justifyContent: "center",
        },
        textNoCar: {
            color: colors.textPrimary,
            fontSize: 24,
            fontFamily: "Montserrat-Bold",
            margin: 20,
        },
        textSeemLike: {
            color: colors.textSecondary,
            fontSize: 16,
            fontFamily: "Montserrat-Bold",
            textAlign: "center",
        }
    });

export default NoCar;
