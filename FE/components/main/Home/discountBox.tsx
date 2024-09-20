import {
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { IDiscount } from "types/api";
import { useNavigation } from "@react-navigation/native";
import { HomeProp } from "types/navigation";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function DiscountBox({ discount }: { discount: IDiscount}) {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const navigation = useNavigation<HomeProp>();
    return (
        <TouchableOpacity
            style={{
                width: width * 0.9,
                height: height * 0.3,
            }}
            onPress={() => navigation.navigate("DiscountDetail", {discount : discount})}
            >
            <Image
                style={{
                    height: height * 0.28,
                    width: width * 0.9,
                    borderRadius: 20,
                    marginBottom: 10,
                }}
                source={{ uri: discount.imageUri }} />
            <Text style={{
                color: colors.textPrimary,
                fontFamily: 'Montserrat-Bold',
                fontSize: 20,
            }}>
                {discount.name}
            </Text>
        </TouchableOpacity>
    );
}
