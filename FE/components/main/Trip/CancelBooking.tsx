import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { Close } from "components/icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function CancelBooking() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    return (
        <View style={{
            position: 'absolute',
            height: height,
            width: width,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.2)"
        }}>
            <View style={{
                position: 'absolute',
                bottom: height * 0.1,
                left: width / 15,
                width: width * 13 / 15,
                backgroundColor: colors.backgroundColor,
                borderRadius: 20,
                padding: 20,
            }}>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row"
                }}>
                    <Text style={{
                        fontFamily: "Montserrat-Bold",
                        fontSize: 24,
                        color: colors.textPrimary,
                    }}>
                        Cancel booking
                    </Text>
                    <TouchableOpacity>
                        <Close height={32} width={32} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    marginTop: 20,
                    marginBottom: 20,
                    fontSize: 16,
                    color: colors.textSecondary,
                }}>
                    Are you sure want to cancel your booking?
                    if you cancel booking will charge 50% of trip price.
                </Text>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor: colors.primary,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Montserrat-Bold",
                            fontSize: 16,
                            color: "#FFF",
                        }}
                    >Cancel booking
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

