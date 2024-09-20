import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, } from "react-native";
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import DatePicker from 'react-native-date-picker';
import { useNavigation } from "@react-navigation/native";
import { CarDetailNavigationProp, HomeProp } from "types/navigation";
import { ICar } from "types/api";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const height = Dimensions.get("window").height * 0.3;
const width = Dimensions.get("window").width;

const RentCar = ({ car }: { car: ICar }) => {
    const { colors, styles } = useStyles(createStyles);
    const date = new Date();
    const [open, setOpen] = useState(false);
    const navigation = useNavigation<HomeProp>();
    return (
        <View style={styles.container}>
            <View style={styles.viewPrice}>
                <Text style={styles.textName}>{car.name}</Text>
                <Text style={styles.textprice}>$ {car.price} / day</Text>
            </View>
            <TouchableOpacity
                style={styles.buttonRentCar}
                onPress={() => setOpen(true)}
            >
                <Text style={styles.textRentCar}>Rent Car</Text>
            </TouchableOpacity>
            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(date1) => {
                    setOpen(false);
                    navigation.navigate("Checkout", {car: car, date: date1} );
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    );
};
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            paddingLeft: width * 0.05,
            paddingRight: width * 0.05,
            flexDirection: 'row',
            height: height * 0.25,
        },
        viewPrice: {
            width: width * 0.5,
            flexDirection: 'column',
        },
        textName: {
            fontFamily: "Montserrat-Bold",
            fontSize: 16,
            color: colors.textPrimary,
        },
        textprice: {
            fontFamily: "Montserrat-Bold",
            fontSize: 16,
            color: "#36E1F8",
        },
        buttonRentCar: {
            width: width * 0.4,
            height: height * 0.2,
            backgroundColor: colors.primary,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
        },
        textRentCar: {
            fontFamily: 'Montserrat-Light',
            fontWeight: 'bold',
            fontSize: 18,
            color: "#FFF",
        }
    });

export default RentCar;
