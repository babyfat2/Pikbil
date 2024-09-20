import {
    Dimensions,
    Image,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function UserChatBox() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const [number, onChangeNumber] = React.useState('');
    return (
        <TouchableOpacity
            style={{
                marginBottom: 10,
                marginTop: 10,
                height: height * 0.08,
                flexDirection: 'row',
                borderBottomWidth: 0.5,
            }}>
            <Image
                style={{
                    height: height * 0.075,
                    width: height * 0.075,
                    borderRadius: 10,
                    marginRight: 10,
                }}
                source={require('../../../image/welcome1.png')} />
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: width * 13 / 15 - height * 0.08 - 20,
                        justifyContent: 'space-between',
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Montserrat-Bold",
                            fontSize: 20,
                            color: colors.textPrimary,
                        }}
                    >
                        Floy Ema
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: colors.textSecondary,
                        }}>
                        12:23pm
                    </Text>
                </View>
                <Text style={{
                    fontSize: 16,
                    color: colors.textSecondary,
                }}>Are you ok ?</Text>
            </View>
        </TouchableOpacity>
    );
}

