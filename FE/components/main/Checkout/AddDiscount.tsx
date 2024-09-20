import React from "react";
import { View, Text, Dimensions, Image, Touchable, TouchableOpacity, } from "react-native";
import { useAppSelector } from "redux/hooks.ts/hooks";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default function AddDiscount(
    {
        useDiscount,
        setUseDiscount,
    }: {
        useDiscount: boolean,
        setUseDiscount: React.Dispatch<React.SetStateAction<boolean>>,
    }
) {
    const colors = useAppSelector((state) => state.darkMode.color);
    return (
        <View style={{
            marginTop: 20,
        }}>
            <Text style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 20,
            }}>
                DISCOUNT
            </Text>
            <TouchableOpacity style={{
                borderColor: colors.primary,
                borderWidth: 0.5,
                borderRadius: 10,
                height: height / 15,
                alignContent: "center",
                justifyContent: "center",
                padding: 15,
            }}
                onPress={() => setUseDiscount(!useDiscount)}
            >
                <Text style={{
                    fontSize: 16,
                    color: colors.textPrimary,
                }}>
                    Use a discount code
                </Text>
            </TouchableOpacity>
        </View>
    );
};
