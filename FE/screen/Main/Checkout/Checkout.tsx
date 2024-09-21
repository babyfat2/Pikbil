import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { CheckoutNavigationProp, } from "types/navigation";
import { IColor } from "style/color";
import { LogBox } from 'react-native';
import { Left, Right } from "components/icons";
import CarDetailBox from "components/main/Checkout/CarDetail";
import RentInformation from "components/main/Checkout/RentInformation";
import AddDiscount from "components/main/Checkout/AddDiscount";
import InputDiscount from "components/main/Checkout/InputDiscount";
import PriceDetail from "components/main/Checkout/PriceDetail";
import { useAddCheckoutMutation } from "redux/api/action";
import { IDiscount } from "types/api";

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Checkout({ navigation, route }: CheckoutNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const car = route.params.car;
    const dateRent = route.params.date;
    const [useDiscount,setUseDiscount] = useState(false);
    const [discount, setDiscount] = useState<IDiscount>();
    const [priceProtection, setPriceProtection] = useState<number>(0);
    const [priceTotal, setPriceTotal] = useState<number>(0);
    const [addCheckout] = useAddCheckoutMutation();
    const buttonBooking = () => {
        addCheckout({carId: car.id, status: "Ongoing", price: priceTotal, dateRent: dateRent })
        .unwrap()
        .then((e) => {
            console.log(e);
            navigation.navigate("BookingSuccess");
        })
        .catch((e) => {
            console.log(e);
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Left height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.textCheckout}>Checkout</Text>
            </View>
            <ScrollView>
            <CarDetailBox name={car.name} price={car.price} address={car.address} image={car.imageUri[0]} dateRent={dateRent} />
            <RentInformation />
            <Text style={styles.textAdditional}>
                ADDITIONAL
            </Text>
            <View style={styles.boxAdditional}>
                <Text style={styles.nameAdditional}>Protection plans</Text>
                <Text style={styles.detailAdditional}>To protect you if accident  happens</Text>
                <TouchableOpacity style={styles.buttonRight}
                onPress={() => navigation.navigate("ProtectionPlan", {price: priceProtection, setPrice: setPriceProtection})}
                >
                    <Right width={24} height={24} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.boxAdditional}>
                <Text style={styles.nameAdditional}>Extra</Text>
                <Text style={styles.detailAdditional}>Extra service that we prove for you</Text>
                <TouchableOpacity style={styles.buttonRight}>
                    <Right width={24} height={24} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <AddDiscount useDiscount={useDiscount} setUseDiscount={setUseDiscount} />
            <PriceDetail 
            priceCar={car.price} 
            priceProtection={priceProtection} 
            setPriceTotal={setPriceTotal}
            dateRent={dateRent}
            />
            <TouchableOpacity
            style={styles.buttonPayment}
            onPress={buttonBooking}
            >
                <Text style={styles.textButtonCheckout}>Checkout</Text>
            </TouchableOpacity>
            </ScrollView>
            { useDiscount  &&
            <InputDiscount  useDiscount={useDiscount} setUseDiscount={setUseDiscount} />
            }
    
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
            marginLeft: 20,
            color: colors.textPrimary,
        },
        textAdditional: {
            fontFamily: "Montserrat-Bold",
            fontSize: 16,
            color: colors.textPrimary,
            marginTop: 20,
        },
        boxAdditional: {
            marginTop: 20,
        },
        nameAdditional: {
            fontFamily: "Montserrat-Bold",
            fontSize: 16,
            color: colors.textPrimary,
        },
        detailAdditional: {
            fontSize: 16,
            color: colors.textSecondary,
        },
        buttonRight: {
            position: 'absolute',
            right: 0,
            bottom: 0,
        },
        buttonPayment: {
            marginTop: 20,
            position: 'relative',
            padding: 15,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
            borderRadius: 20,
        },
        textButtonCheckout: {
            color: "#FFFF",
            fontSize: 18,
            fontFamily: "Montserrat-Bold",
        }
    });
export default Checkout;