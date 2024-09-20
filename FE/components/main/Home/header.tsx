import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { IDiscount } from "types/api";
import { Search, Notification } from "components/icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function HeaderHome() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    return (
        <View
            style={{
                marginTop: height * 0.05,
                height: height * 0.1,
                width: width * 0.9,
                flexDirection: "row",
            }}
        >
            <Image source={require('../../../assets/car.png')} />
            <Text style = {{
                marginLeft: 20,
                fontFamily: 'Montserrat-Bold',
                fontSize: 24,
                color: colors.textPrimary,
            }}>Pikbil</Text>
            <View style={{
                position: 'absolute',
                right: 0,
                flexDirection: "row",
            }}>
                <TouchableOpacity style={{
                    marginRight: 20,
                }}>
                    <Search height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Notification height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
