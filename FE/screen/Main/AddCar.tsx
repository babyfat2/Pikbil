import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
    Pressable,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import { AddCarNavigationProp } from "types/navigation";
import { Left } from "components/icons";
import InputCarBox from "components/main/AddCar/InputCarBox";
import AddImage from "components/main/AddCar/AddImage";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function AddCar({ navigation, route }: AddCarNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const [step, changeStep] = useState(1);
    const [nameCar, changeNameCar] = useState<string>("");
    const [addressCar, changeAddressCar] = useState<string>("");
    const [descriptionCar, changeDesciptionCar] = useState<string>("");
    const [fuelCar, changeFuelCar] = useState<string>("");
    const [interiorColorCar, changeInteriorColorCar] = useState<string>("");
    const [kilometersCar, changeKilometersCar] = useState<string>("");
    const [seatsCar, changeSeatsCar] = useState<string>("");
    const [transmissionCar, changTransmissionCar] = useState<string>("");
    const [priceCar, changePriceCar] = useState<string>("");
    const buttonContinue = () => {
        changeStep(prevStep => prevStep + 1);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Left height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.textAddCar}>Add car</Text>
                <Text style={styles.textStep}>STEP {step} OF 4</Text>
            </View>
            {step === 1 &&
                <View style={styles.viewInputCarBox}>
                    <InputCarBox
                        name="Name car"
                        props={{
                            maxLength: 30,
                            placeholder: "Your name car",
                            onChangeText: changeNameCar,
                        }}
                    />
                    <InputCarBox
                        name="Address car"
                        props={{
                            maxLength: 30,
                            placeholder: "Your address car",
                            onChangeText: changeAddressCar,
                        }}
                    />
                    <InputCarBox
                        name="Description"
                        props={{
                            textAlignVertical: 'top',
                            multiline: true,
                            numberOfLines: 4,
                            placeholder: "Some description about your car",
                            onChangeText: changeDesciptionCar,
                        }}
                    />
                </View>
            }
            {step === 2 &&
                <View style={styles.viewInputCarBox}>
                    <InputCarBox
                        name="Interior color"
                        props={{
                            maxLength: 30,
                            placeholder: "Your color car",
                            onChangeText: changeInteriorColorCar,
                        }}
                    />
                    <InputCarBox
                        name="Kilometers"
                        props={{
                            maxLength: 30,
                            placeholder: "Kilometers",
                            onChangeText: changeKilometersCar,
                        }}
                    />
                    <InputCarBox
                        name="Seats"
                        props={{
                            placeholder: "Seats",
                            onChangeText: changeSeatsCar,
                        }}
                    />
                </View>
            }
            {step === 3 &&
                <View style={styles.viewInputCarBox}>
                    <InputCarBox
                        name="Transmission"
                        props={{
                            placeholder: "Trasmission",
                            onChangeText: changTransmissionCar,
                        }}
                    />
                    <InputCarBox
                        name="Price"
                        props={{
                            placeholder: "Price",
                            onChangeText: changePriceCar,
                        }}
                    />
                    <InputCarBox
                        name="Fuel"
                        props={{
                            placeholder: "Some description about your car",
                            onChangeText: changeFuelCar,
                        }}
                    />
                </View>
            }
            {step === 4 &&
                <View style={styles.viewInputCarBox}>
                    <AddImage />
                    <AddImage />
                </View>
            }
            <Pressable style={styles.buttonContinue} onPress={buttonContinue}>
                <Text style={styles.textContinue}>Continue</Text>
            </Pressable>
        </View>
    )
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
            justifyContent: 'flex-start',
        },
        textAddCar: {
            marginTop: 20,
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            color: colors.textPrimary,
        },
        textStep: {
            marginTop: 10,
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            color: colors.textSecondary,
        },
        viewInputCarBox: {
            marginTop: 30,
            width: '100%',
            height: 0.65 * height,
        },
        buttonContinue: {
            height: height * 0.08,
            borderRadius: 20,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textContinue: {
            fontSize: 24,
            fontFamily: 'Montserrat-Bold',
            color: "#FFF",
        }
    });
export default AddCar;