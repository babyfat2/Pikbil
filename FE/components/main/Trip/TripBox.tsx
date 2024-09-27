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
import { ITrip } from "types/api";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp, HomeProp } from "types/navigation";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function TripBox({
    tripInfor
}: {
    tripInfor: ITrip;
}) {
    console.log(tripInfor.car);
    const { colors, styles } = useStyles(createStyles);
    const navigation = useNavigation<HomeProp>();
    const date = new Date(tripInfor.createdAt);
    const dateRent = new Date(tripInfor.dateRent);
    const dateString = new String(date.toLocaleString().slice(0, 9) + " - " + dateRent.toLocaleString().slice(0, 9));
    if (tripInfor.status === "Ongoing") {
        return (
            <View style={styles.container}>
                {tripInfor.car.imageUri ?
                    <Image style={styles.imageCar} source={{ uri: tripInfor.car.imageUri[0] }} />
                    :
                    <Image style={styles.imageCar} source={require("../../../image/welcome1.png")} />}
                <View style={styles.viewStatus}>
                    <Text style={styles.textStatus}>{tripInfor.status}</Text>
                </View>
                <Text style={styles.nameCar}>{tripInfor.car.name}</Text>
                <Text style={styles.addressCar}>{tripInfor.car.address}, {dateString}</Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        style={styles.buttonReview}
                        onPress={() => navigation.navigate("ContactOwner", { owner: tripInfor.car.owner })}
                    >
                        <Text style={styles.textReview}>Contact owner</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonBookingAgain}
                    >
                        <Text style={styles.textBookingAgain}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else if (tripInfor.status === "Cancelled") {
        return (
        <View style={styles.container}>
            {tripInfor.car.imageUri ?
                <Image style={styles.imageCar} source={{ uri: tripInfor.car.imageUri[0] }} />
                :
                <Image style={styles.imageCar} source={require("../../../image/welcome1.png")} />}
            <View style={styles.viewStatus}>
                <Text style={styles.textStatus}>{tripInfor.status}</Text>
            </View>
            <Text style={styles.nameCar}>{tripInfor.car.name}</Text>
            <Text style={styles.addressCar}>{tripInfor.car.address}, {dateString}</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.buttonReview}
                    onPress={() => navigation.navigate("CarDetail", { car: tripInfor.car })}
                >
                    <Text style={styles.textReview}>Booking again</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    } else {
        return (
        <View style={styles.container}>
            {tripInfor.car.imageUri ?
                <Image style={styles.imageCar} source={{ uri: tripInfor.car.imageUri[0] }} />
                :
                <Image style={styles.imageCar} source={require("../../../image/welcome1.png")} />}
            <View style={styles.viewStatus}>
                <Text style={styles.textStatus}>{tripInfor.status}</Text>
            </View>
            <Text style={styles.nameCar}>{tripInfor.car.name}</Text>
            <Text style={styles.addressCar}>{tripInfor.car.address}, {dateString}</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity
                    style={styles.buttonReview}
                    onPress={() => navigation.navigate("CarDetail", { car: tripInfor.car })}
                >
                    <Text style={styles.textReview}>Booking again</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonBookingAgain}
                    onPress={() => navigation.navigate("Review", { car: tripInfor.car })}
                >
                    <Text style={styles.textBookingAgain}>Write review</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            marginBottom: 25,
            marginRight: 5,
        },
        imageCar: {
            width: width * 13 / 15 - 1,
            height: height * 0.20,
            borderRadius: 20,
            marginBottom: 10,
        },
        viewStatus: {
            position: 'absolute',
            left: 15,
            top: 10,
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: colors.backgroundColor,
            borderRadius: 20,
        },
        textStatus: {
            color: colors.textPrimary,
            fontSize: 14,
            fontFamily: "Montserrat-Bold",
        },
        nameCar: {
            fontFamily: "Montserrat-Bold",
            fontSize: 18,
            color: colors.textPrimary,
            marginBottom: 10,
        },
        addressCar: {
            fontSize: 14,
            color: colors.textSecondary,
            marginBottom: 10,
        },
        buttonView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        buttonReview: {
            height: height * 0.05,
            width: width * 0.42,
            backgroundColor: colors.primary,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
        },
        textReview: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: 14,
        },
        buttonBookingAgain: {
            height: height * 0.05,
            width: width * 0.42,
            backgroundColor: colors.backgroundColor,
            borderWidth: 0.8,
            borderColor: colors.primary,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
        },
        textBookingAgain: {
            fontFamily: "Montserrat-Bold",
            color: colors.textSecondary,
            fontSize: 14,
        },
    });

export default TripBox;