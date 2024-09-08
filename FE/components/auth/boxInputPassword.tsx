import {
    View,
    TextInput,
    TextInputProps,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { IconEye, IconEyeInvisible } from "components/icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function BoxInputPassword({
    props,
    error,
}: {
    props: TextInputProps,
    error: string,
}) {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const [show, setShow] = useState(false);
    const showPass = () => {
        setShow(!show);
    }
    return (
        <View
            style={{ marginBottom: height / 40 }}
        >
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
                color: colors.textPrimary,
                marginBottom: 10,
            }}
            >
                Password
            </Text>
            <TextInput
                style={{
                    borderColor: colors.secondary,
                    borderRadius: 10,
                    borderWidth: 2,
                    width: width * 0.9,
                    height: height / 15,
                    fontSize: 16,
                    fontFamily: "jakara",
                    includeFontPadding: false,
                    padding: 20,
                }}
                secureTextEntry={!show}
                {...props}
            />
            {show ? (
                <TouchableOpacity
                    style={{ position: 'absolute', right: 20, top: 48 }}
                    onPress={showPass}>
                    <IconEye width={32} height={32} color={colors.textSecondary} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={{ position: 'absolute', right: 20, top: 48 }}
                    onPress={showPass}>
                    <IconEyeInvisible width={32} height={32} color={colors.textSecondary} />
                </TouchableOpacity>
            )}
            <Text style={{
                fontFamily: 'Montserrat-Light',
                fontSize: 12,
                color: '#FF4423',
                marginBottom: 10,
            }}
            >
                {error}
            </Text>
        </View>
    );
}
