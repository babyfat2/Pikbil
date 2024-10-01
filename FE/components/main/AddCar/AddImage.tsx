import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { CameraIcon } from "components/icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function AddImage() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    return (
        <View
            style={{
                marginBottom: 20,
            }}
        >
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
                color: colors.textPrimary,
                marginBottom: 10,
            }}
            >
                Image
            </Text>
            <TouchableOpacity style={{
                borderRadius: 20,
                borderWidth: 0.5,
                borderColor: colors.primary,
                height: height * 0.22,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <CameraIcon height={48} width={48} color={colors.primary} />
                <Text style={{
                    color: colors.textSecondary,
                    fontSize: 18,
                    marginTop: 10,
                    fontFamily: 'Montserrat-Bold',
                }}>Add your photo here</Text>
            </TouchableOpacity>
        </View>
    );
}
