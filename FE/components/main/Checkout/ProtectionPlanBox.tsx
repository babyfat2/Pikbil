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
import { IProtection } from "types/api";
import { Check } from "components/icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function ProtectionPlan({
    price,
    setPrice,
    protection
}: {
    price: number,
    setPrice: React.Dispatch<React.SetStateAction<number>>,
    protection: IProtection,
}) {
    const { colors, styles } = useStyles(createStyles);
    const [choose, setChoose] = useState<Boolean>(false);
    const chooseBox = () => {
        if(choose) {
        setPrice(price - protection.price);
        setChoose(!choose);
        } else {
            setPrice(price + protection.price);
            setChoose(!choose);
        }
    }
    return (
        <TouchableOpacity
                style={ !choose ? styles.viewBox : styles.viewBoxTrue}
                onPress={() => chooseBox()}>
                    <View style={!choose ? styles.viewBoxLeft : styles.viewBoxLeftTrue}>
                        {choose && <Check height={24} width={24} color={"#FFF"} />}
                    </View>
                    <View style={styles.viewBoxRight}>
                    <Text style={styles.textName}>{protection.name} - ${protection.price}</Text>
                    <Text style={styles.textDescription}>{protection.description}</Text>
                    </View>
        </TouchableOpacity>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        viewBox: {
            width: width * 13/15,
            backgroundColor: colors.backgroundColor,
            borderRadius: 20,
            borderWidth: 0.5,
            padding: 15,
            paddingTop: 20,
            paddingBottom: 25,
            flexDirection: "row",
            marginBottom: 25,
        },
        viewBoxTrue: {
            width: width * 13/15,
            backgroundColor: colors.backgroundColor,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: colors.primary,
            padding: 15,
            paddingTop: 20,
            paddingBottom: 25,
            flexDirection: "row",
            marginBottom: 25,
        },
        textName: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: colors.textPrimary,
        },
        textDescription: {
            fontSize: 14,
            color: colors.textSecondary,
        },
        viewBoxLeft: {
            height: width * 0.05,
            width: width * 0.05,
            marginRight: 10,
            borderWidth: 0.5,
            borderRadius: 5,
        },
        viewBoxLeftTrue: {
            height: width * 0.06,
            width: width * 0.06,
            marginRight: 10,
            borderRadius: 5,
            backgroundColor: colors.primary,
        },
        viewBoxRight: {
            width: width * 13/15 - width * 0.05 - 40,
        }
    });

export default ProtectionPlan;
