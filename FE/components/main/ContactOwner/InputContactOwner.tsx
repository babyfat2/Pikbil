import {
    Dimensions,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { Camera, Send } from "components/icons";
import { IMessage, IUserData } from "types/api";
import useSocket from "socket/Socket";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function InputContactOwner(
    {
        receiverId, 
        roomId,
    }
    : 
    {
        receiverId: IUserData , 
        roomId: string,
    }) {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const [message, setMessage] = React.useState('');
    const socket = useSocket();
    const send = () => {
        setMessage("");
        socket?.emit("sendMessage", { receiverId: receiverId.id, message: message, roomId: roomId});
    };
    return (
        <View
        style={{
            position: 'absolute',
            bottom: 0,
            height: height * 0.1,
            width: width,
            borderTopWidth: 0.5,
            borderColor: colors.primary,
            backgroundColor: colors.backgroundColor,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
        }}>
            <TextInput
                cursorColor={colors.primary}
                placeholder="Type message here"
                onChangeText={setMessage}
                value={message}
                placeholderTextColor={colors.textPrimary}
                style={{
                    marginLeft: width/15,
                    height: 50,
                    width: width * 11.5/15,
                    borderWidth: 0.5,
                    borderColor: colors.primary,
                    borderRadius: 5,
                    paddingTop: 10,
                    paddingLeft: 20,
                    paddingBottom: 10,
                    fontSize: 16,
                    fontWeight: '300',
                }}
            />
            <TouchableOpacity 
            onPress={send}
            style={{position: 'absolute', right: width * 3/15}}
            >
            <Send height={24} width={24}  color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={{
                marginLeft: width/20,
                backgroundColor: colors.backgroundColor,
                borderRadius: 10,
            }}>
            <Camera height={32} width={32} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    );
}