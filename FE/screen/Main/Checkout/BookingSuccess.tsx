import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { BookingSuccessNavigationProp, CheckoutNavigationProp, } from "types/navigation";
import { IColor } from "style/color";
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function BookingSuccess({ navigation, route }: BookingSuccessNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textCheckout}>Checkout</Text>
            </View>
            <View style={styles.containerUnder}>
                <Image style={styles.imageBooking} source={require("../../../image/BookingSuccess.png")} />
                <Text style={styles.textBooking}>Your booking success!</Text>
                <Text style={styles.textUnder}>Congratulation your booking has been made.</Text>
                <Text style={styles.textUnder}>Thanks for trusting us!</Text>
            </View>
            <TouchableOpacity
            style={styles.buttonBackHome}
            onPress={() => navigation.popToTop()}
            >
                <Text style={styles.textBackHome}>Back to homepage</Text>
            </TouchableOpacity>
            </View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundColor,
            padding: width / 15,
        },
        header: {
            marginTop: 25,
            height: height * 0.08,
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        textCheckout: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            color: colors.textPrimary,
        },
        containerUnder: {
            height: height * 0.73,
            justifyContent: "center",
            alignItems: "center",
        },
        imageBooking: {
            width: width * 0.5,
            height: width * 0.5,
        },
        textBooking: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            marginBottom: 20,
            color: colors.textPrimary,
        },
        textUnder: {
            fontSize: 14,
            marginTop: 5,
            color: colors.textSecondary,
        },
        buttonBackHome: {
            height: height * 0.075,
            backgroundColor: colors.primary,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
        },
        textBackHome: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: '#FFF',
        }
    });
export default BookingSuccess;