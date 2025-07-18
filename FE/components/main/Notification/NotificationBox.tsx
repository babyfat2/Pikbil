import {
    Image,
    Text,
    Dimensions,
    View,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function NotificationBox() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    return (
        <View
            style={{
                height: height * 0.12,
                backgroundColor: colors.backgroundColor,
                borderBottomWidth: 0.5,
                borderColor: colors.secondary,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: width / 30,
            }}
        >
            <Image
                style={{
                    width: height * 0.08,
                    height: height * 0.08,
                    borderRadius: 80,
                }}
                source={require('../../../image/avatar.png')} 
            />
            <View 
            style={{
                width: width * 0.72,
                height: height * 0.08,
            }}
            >
                <Text style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 18,
                    color: colors.textPrimary,
                }}>abcccccccccccabcccccccccccabcccccccccccabcccc</Text>

                <Text  style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 12,
                    color: colors.textSecondary,
                }}>10/03/2024</Text>
            </View>
        </View>
    );
}
