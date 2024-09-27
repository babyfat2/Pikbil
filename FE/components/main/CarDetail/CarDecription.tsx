import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, Pressable, Touchable, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "redux/hooks.ts/hooks";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default function CarDecription (
    {
        name,
        description,
        fuel,
        interiorColor,
        kilometers,
        seats,
        transmission,
        address,
    }: {
        name: string,
        description: string,
        fuel: string,
        interiorColor: string,
        kilometers: number,
        seats: string,
        transmission: string,
        address: string,
    }
)  {
    const colors = useAppSelector((state) => state.darkMode.color);
    const RenderInfor = ({name, name2}:{name: string, name2: string | number}) =>  {
        return (
            <View style={{
                height: 20, 
                width: width * 0.9,
                marginTop: 5,
            }}>
                <Text style={{
                    fontFamily: "Montserrat-Light",
                    fontSize: 14,
                    color: colors.textSecondary,
                }}
                >{name}
                </Text>
                <Text style={{
                    position: 'absolute',
                    right: 0,
                    fontFamily: "Montserrat-Bold",
                    fontSize: 14,
                    color: colors.textPrimary,
                }}
                >{name2}</Text>
            </View>
        )
    }
    return (
        <View
        style={{
            paddingLeft: width * 0.05,
            paddingRight: width * 0.05,
            marginBottom: 10,
        }}
        >
            <Text style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 24,
                color: colors.textPrimary,
                marginBottom: 20,
            }}>
                {name}
            </Text>
            <Text style={{
                fontFamily: "Montserrat-Light",
                fontSize: 14,
                color: colors.textSecondary,
            }}>
                {description}
            </Text>
            <Text style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 18,
                color: colors.textPrimary,
                marginTop: 20,
                marginBottom: 15,
            }}>
                CAR DETAIL
            </Text>
            <RenderInfor name="Fuel"  name2={fuel}/>
            <RenderInfor name="InteriorColor"  name2={interiorColor}/>
            <RenderInfor name="Kilometers"  name2={kilometers}/>
            <RenderInfor name="Seats"  name2={seats}/>
            <RenderInfor name="Transmission"  name2={transmission}/>
            <RenderInfor name="Address"  name2={address}/>
        </View>
    );
};
