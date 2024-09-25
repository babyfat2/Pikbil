import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { Left } from "components/icons";
import { IMessage } from "types/api";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function BoxMessage({ message, userId }: { message: IMessage, userId: string }) {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const [status, setStatus] = useState<Boolean>(false);
    useEffect(() => {
        if (userId === message.sender.id) {
            setStatus(true);
        }
    }, [])
    return (
        <View style={status ? {
            marginTop: 10,
            alignItems: 'flex-end',
        } : {
            marginTop: 10,
            alignItems: 'flex-start',
        }}>
            <View style={{
                padding: 10,
                maxWidth: width * 0.4,
                backgroundColor: colors.secondary,
                borderRadius: 10,
            }}>
                <Text style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 16,
                    color: "#FFF",
                }}>
                    {message.message}
                </Text>
            </View>
        </View>
    );
}


