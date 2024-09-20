import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import Animated from "react-native-reanimated";
import DiscountImage from "components/main/DiscountDetail/DiscountImage";
import { DiscountDetailNavigationProp } from "types/navigation";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function DiscountDetail({ navigation, route }: DiscountDetailNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const discount = route.params.discount;
    return (
        <Animated.View
            style={styles.container}
        >
            <DiscountImage image={discount.imageUri} />
            <View style={styles.viewDecription}>
                <Text style={styles.textName}>{discount.name}</Text>
                <View style={styles.boxPromoCode}>
                    <Text style={styles.textPromoCode}>Promo Code</Text>
                    <Text style={styles.promoCode}>{discount.promoCode}</Text>
                    <TouchableOpacity style={styles.buttonCopy}>
                        <Text style={styles.textCopy}>Copy</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.description}>{discount.description}</Text>
                <Text style={styles.termAndcondition}>Terms and Conditions</Text>
                <Text style={styles.textTermAndCondition}> - Minimum rent of ${discount.minimunRent} value.</Text>
                <Text style={styles.textTermAndCondition}> - All rent process only accepted in {discount.addressDiscount}.</Text>
            </View>
        </Animated.View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundColor,
        },
        viewDecription: {
            padding: width * 0.05,
        },
        textName: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            color: colors.textPrimary,
            marginBottom: 30,
        },
        boxPromoCode: {
            height: height / 12,
            borderRadius: 10,
            borderWidth: 0.5,
            borderBlockColor: colors.textSecondary,
            padding: 10,
            flexDirection: "column",
        },
        textPromoCode: {
            fontSize: 14,
            color: colors.textPrimary,
        },
        promoCode: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: colors.textPrimary,
        },
        buttonCopy: {
            position: 'absolute',
            right: 10,
            top: 10,
            height: height / 12 - 20,
            width: width / 5,
            backgroundColor: colors.primary,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        textCopy: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: '#FFF',
        },
        description: {
            marginTop: 30,
            fontSize: 16,
            color: colors.textSecondary,
        },
        termAndcondition: {
            marginTop: 30,
            marginBottom: 20,
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: colors.textPrimary,
        },
        textTermAndCondition: {
            marginBottom: 10,
            fontSize: 16,
            color: colors.textSecondary,
        }
    });
export default DiscountDetail;