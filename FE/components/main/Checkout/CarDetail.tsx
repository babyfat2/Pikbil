import React from "react";
import { View, Text, Dimensions, Image,} from "react-native";
import { useAppSelector } from "redux/hooks.ts/hooks";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default function CarDetailBox(
    {
        name,
        price,
        address,
        image,
        dateRent,
    }: {
        name: string;
        price: number;
        address: string;
        image: string;
        dateRent: Date;
    }
) {
    const colors = useAppSelector((state) => state.darkMode.color);
    const datenow = new Date().toLocaleString();
    const dateString = new String(datenow.slice(0, 9) + " - " + dateRent.toLocaleDateString().slice(0, 9));
    return (
        <View style={{
            marginBottom: 20,
        }}>
            <Text style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 16,
                color: colors.textPrimary,
                marginBottom: 5,
            }}>
                CAR DETAIL
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <View
                style={{
                    flexDirection: "column",
                    width: width * 0.6,
                }}
                >
                    <Text style={{
                        fontFamily: "Montserrat-Bold",
                        fontSize: 16,
                        color: colors.textPrimary,
                    }}>
                        {name}
                    </Text>
                    <Text style={{
                        fontFamily: "Montserrat-Bold",
                        fontSize: 16,
                        color: "#36E1F8",
                    }}>
                        $ {price} / day
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: colors.textSecondary,
                    }}>
                        {address}
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: colors.textSecondary,
                    }}>
                        {dateString}
                    </Text>
                </View>
                <Image style={{
                    position: 'absolute',
                    right: 0,
                    width: width * 0.2,
                    height: width * 0.2,
                    borderRadius: 20,
                }} 
                source={{uri: image}}/>
            </View>
        </View>
    );
};
