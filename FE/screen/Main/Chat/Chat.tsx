import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import { ChatNavigationProp } from "types/navigation";
import HeaderChat from "components/main/Chat/HeaderChat";
import { useAppSelector } from "redux/hooks.ts/hooks";
import BoxMessage from "components/main/Chat/BoxMessange";
import InputChat from "components/main/Chat/InputChat";
import useSocket from "socket/Socket";
import { IMessage } from "types/api";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const updateDataChat = (arrayMessage: IMessage[], newMessage: IMessage) => {
    const updatedArray = [newMessage, ...arrayMessage];
    return updatedArray;
};
function Chat({ navigation, route }: ChatNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const user = useAppSelector((status) => status.user.data);
    const socket = useSocket();
    const [chatMessage, setChatMessange] = useState(route.params.boxChat.arrayMessage);
    useEffect(() => {
        socket?.emit('joinRoom', { room: user?.id });
        if (!socket?.hasListeners('reviveMessage')) {
            socket?.on("reciveMessage", (data: { message: IMessage }) => {
                setChatMessange(prevChatMessage => updateDataChat(prevChatMessage, data.message));
            })
        }
        return () => {
            socket?.off('reciveMessage'); // Removes the specific listener for 'reciveMessage'
            socket?.emit('leaveRoom', { room: user?.id }); // Optionally leave the room if needed
        };
    }, []);
    if (user && chatMessage)
        return (
            <View style={styles.container}>
                <View style={styles.detailChat}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        inverted={true}
                        data={chatMessage}
                        renderItem={({ item }) => <BoxMessage message={item} userId={user.id} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                <HeaderChat />
                <InputChat
                    receiverId={route.params.receiverId}
                    roomId={route.params.boxChat.roomId}
                />
            </View>
        );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundColor,
            padding: width / 15,
        },
        textMyTrip: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginTop: 20,
            color: colors.textPrimary,
        },
        detailChat: {
            position: 'absolute',
            bottom: height * 0.1 + 10,
            left: width / 15,
            width: width * 13/15,
            marginTop: height * 0.14,
        }
    });
export default Chat;