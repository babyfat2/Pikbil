import {
    View,
    Dimensions,
    StyleSheet,
    FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import { ContactOwnerNavigationProp } from "types/navigation";
import { useAppSelector } from "redux/hooks.ts/hooks";
import HeaderContactOwner from "components/main/ContactOwner/HeaderContactOwner";
import useSocket from "socket/Socket";
import { useGetChatByIdQuery } from "redux/api/chat";
import BoxMessage from "components/main/Chat/BoxMessange";
import InputContactOwner from "components/main/ContactOwner/InputContactOwner";
import InputFirst from "components/main/ContactOwner/InputFirst";
import { IMessage } from "types/api";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const updateDataChat = (arrayMessage: IMessage[] | undefined, newMessage: IMessage) => {
    if(arrayMessage) {
    const updatedArray = [newMessage, ...arrayMessage];
    return updatedArray;
    } else {
        return [newMessage];
    }
};
function ContactOwner({ navigation, route }: ContactOwnerNavigationProp) {
    const { styles } = useStyles(createStyles);
    const user = useAppSelector((status) => status.user.data);
    const owner = route.params.owner;
    const chat = useGetChatByIdQuery(owner.id);
    const [isFirst, setIsFirst] = useState(true);
    const [roomId, setRoomId] = useState<string>("");
    const socket = useSocket();
    const [chatMessage, setChatMessange] = useState<IMessage[]>([]);
    useEffect(() => {
        chat.refetch(); // Gọi lại API khi render lại
      }, []);
    useEffect(() => {
        if(chat.data?.length !== 0 && chat.data !== undefined) {
            setIsFirst(false);
            setChatMessange(chat.data);
            setRoomId(chat.data[0].roomId);
        }
    }, [chat.isLoading])
    useEffect(() => {
        socket?.emit('joinRoom',{room : user?.id});
        if (!socket?.hasListeners('reviveMessage')) {
            socket?.on("reciveMessage", (data: {message: IMessage}) => {
                setChatMessange(prevChatMessage => updateDataChat(prevChatMessage, data.message));
            }) 
        }
        return () => {
            socket?.off('reciveMessage'); 
            socket?.emit('leaveRoom', { room: user?.id }); 
        };
      }, []);
    if(user)
        return (
            <View style={styles.container}>
                <HeaderContactOwner />
                <View style={styles.detailChat}>
                    <FlatList
                        inverted={true}
                        data={chatMessage}
                        renderItem={({ item }) => <BoxMessage message={item} userId={user.id} />}
                        keyExtractor={item => item.id}
                    />
                </View>
                {isFirst ? 
                <InputFirst
                receiverId={owner}
                setIsFirst={setIsFirst}
                setRoom={setRoomId}
                /> 
                :
                <InputContactOwner
                receiverId={owner}
                roomId={roomId}
                />
                }
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
            marginTop: height * 0.14,
            height: height * 0.75,
        }
    });
export default ContactOwner;