import { Close } from "components/icons";
import React from "react";
import { View, Text, Dimensions, Image, Touchable, TouchableOpacity, TextInput, } from "react-native";
import { useAppSelector } from "redux/hooks.ts/hooks";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default function InputDiscount(
    {
        useDiscount,
        setUseDiscount,
    } : {
        useDiscount: boolean,
        setUseDiscount: React.Dispatch<React.SetStateAction<boolean>>,
    }
) {
    const colors = useAppSelector((state) => state.darkMode.color);
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: height,
            width: width,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}>
            <View
                style={{
                    position: 'absolute',
                    left: width / 15,
                    bottom: height / 20,
                    width: width * 13 / 15,
                    backgroundColor: colors.backgroundColor,
                    borderRadius: 20,
                    padding: 20,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 24,
                        color: colors.textPrimary,
                        marginBottom: 20,
                    }}
                >
                    DISCOUNT
                </Text>
                <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,                    
                }}
                onPress={() => setUseDiscount(!useDiscount)}
                >
                <Close color={colors.primary} height={28} width={28}/>
                </TouchableOpacity>
                <TextInput
                    style={{
                        height: 60,
                        borderWidth: 0.8,
                        borderRadius: 10,
                        paddingLeft: 20,
                        padding: 10,
                        borderColor: colors.primary,
                        fontSize: 16,
                    }}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Input your discount code here"
                />
                <TouchableOpacity
                style={{
                    backgroundColor: colors.primary,
                    height: 60,
                    marginTop: 20,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                    <Text
                    style={{
                        color: "#FFFF",
                        fontFamily: "Montserrat-Bold",
                        fontSize: 20,
                    }}
                    >
                        Redeem
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
