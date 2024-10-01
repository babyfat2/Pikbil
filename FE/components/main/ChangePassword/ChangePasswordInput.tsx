import {
    Text,
    Dimensions,
    View,
    TextInput,
    TextInputProps,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { IconEye, IconEyeInvisible } from "components/icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function ChangePasswordInput(
    {
        props,
        name,
    }: {
        props: TextInputProps,
        name: string,
    }
) {
    const colors = useAppSelector((state) => state.darkMode.color);
    const [show, setShow] = useState(false);
    const showPass = () => {
        setShow(!show);
    }
    return (
        <View>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
                color: colors.textPrimary,
                marginTop: 20,
                marginBottom: 10,
            }}
            >
                {name}
            </Text>
            <TextInput
                style={{
                    borderColor: colors.secondary,
                    borderRadius: 10,
                    borderWidth: 2,
                    width: width * 0.9,
                    color: colors.textPrimary,
                    fontSize: 16,
                    fontFamily: "jakara",
                    includeFontPadding: false,
                    padding: 10,
                    paddingLeft: 20,
                }}
                secureTextEntry={!show}
                {...props}
            />
            {show ? (
                <TouchableOpacity
                    style={{ position: 'absolute', right: 0, top: 64}}
                    onPress={showPass}>
                    <IconEye width={32} height={32} color={colors.textSecondary} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={{ position: 'absolute', right: 0, top: 64 }}
                    onPress={showPass}>
                    <IconEyeInvisible width={32} height={32} color={colors.textSecondary} />
                </TouchableOpacity>
            )}
        </View>
    );
}
