import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import ChooseStar from "components/main/Review/ChooseStar";
import { ReviewNavigationProp } from "types/navigation";
import { useAddReviewCarMutation } from "redux/api/action";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Review({navigation, route}: ReviewNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const [star, setStar] = useState<number>(1);
    const car = route.params.car;
    const [number, onChangeNumber] = useState<string>("");
    const [sendReview] = useAddReviewCarMutation();
    const buttonSend = () => {
        sendReview({star: star, description: number, carId: car.id})
        .unwrap()
        .then((e) => {
            console.log("secess " + e);
        })
        .catch((e) => {
            console.log(e);
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textMyTrip}>Review</Text>
            <View style={styles.boxInforCar}>
                <Image style={styles.imageCar} source={require("../../../image/welcome1.png")} />
                <Text style={styles.nameCar}>{car.name}</Text>
                <Text style={styles.addressCar}>{car.address}</Text>
            </View>
            <ChooseStar star={star} setStar={setStar} />
            <Text style={styles.writeReview}>Write review (optional)</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Tell us about the service"
                placeholderTextColor={colors.textSecondary}
            />
            <TouchableOpacity
            style={styles.buttonSend}
            onPress={buttonSend}
            >
                <Text style={styles.textSend}>Send</Text>
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
        textMyTrip: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginTop: 20,
            color: colors.textPrimary,
        },
        boxInforCar: {
            height: height * 0.3,
            justifyContent: "center",
            alignItems: "center",
        },
        imageCar: {
            height: height * 0.15,
            width: height * 0.15,
            borderRadius: 20,
        },
        nameCar: {
            marginTop: 20,
            color: colors.textPrimary,
            fontSize: 18,
            fontFamily: "Montserrat-Bold",
        },
        addressCar: {
            marginTop: 10,
            color: colors.textSecondary,
            fontSize: 18,
            fontFamily: "Montserrat-Bold",
        },
        writeReview: {
            color: colors.textPrimary,
            fontSize: 18,
            fontFamily: "Montserrat-Bold",
        },
        input: {
            marginTop: 20,
            height: height * 0.25,
            borderWidth: 0.5,
            borderRadius: 10,
            padding: 20,
            textAlignVertical: "top",
            fontSize: 16,
        },
        buttonSend: {
            width: width * 13/15,
            position: 'absolute',
            bottom: 20,
            left: width/15,
            padding: 15,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
            borderRadius: 20,
        },
        textSend: {
            color: "#FFFF",
            fontSize: 18,
            fontFamily: "Montserrat-Bold",
        }
    });
export default Review;