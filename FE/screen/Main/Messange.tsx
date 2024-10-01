import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    Pressable,
    FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import SearchChat from "components/main/Messange/SearchChat";
import UserChatBox from "components/main/Messange/UserChatBox";
import useSocket from "socket/Socket";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { IBoxChat, IComment, IMessage } from "types/api";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { useGetMyRoomChatQuery } from "redux/api/chat";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { openAuth } from "redux/slice/routeApp";
import UserChatBoxskeleton from "components/main/Messange/UserChatBoxSkeleton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const updateDataChat = (arrayMessage: IBoxChat[], newMessage: IMessage) => {

    const roomId = newMessage.roomId;
    // Tìm đối tượng có roomId tương ứng
    const room = arrayMessage.find(message => message.roomId === roomId);

    if (room) {
        console.log("find room");
        // Thêm newMessage vào đầu mảng arrayMessage của room tìm được
        const newarrayMessage: IBoxChat = { roomId: roomId, arrayMessage: [newMessage, ...room.arrayMessage] };

        return [newarrayMessage, ...arrayMessage.filter(message => message.roomId !== roomId)];
    } else {
        console.log("not room");

        // Tạo room mới với newMessage và đẩy nó lên đầu mảng
        const newRoom: IBoxChat = { roomId: roomId, arrayMessage: [newMessage] };
        return [newRoom, ...arrayMessage];
    }
  };
function Messange() {
    const { colors, styles } = useStyles(createStyles);
    const user = useAppSelector((status) => status.user.data)
    const {data, isLoading, refetch} = useGetMyRoomChatQuery(null);
    const [dataChat, setDataChat] = useState<IBoxChat[]>([]);
    const socket = useSocket();
    const reloadChat = useAppSelector((status) => status.chat.reloading );
    const dispath = useDispatch();
    useEffect(() => {
        if (reloadChat) {
          // Khi reloadChat = true, gọi lại API trips
          refetch();
        }
      }, [reloadChat]);
    useEffect(() => {
        socket?.emit('joinRoom',{room : user?.id});
        if (!socket?.hasListeners('reviveMessage')) {
            socket?.on("reciveMessage", (data: {message: IMessage}) => {
                setDataChat(prevDataChat => updateDataChat(prevDataChat, data.message));
            }) 
        }
      }, []);
    useEffect(() => {
        if (!isLoading && data) {
          setDataChat(data);
        }
      }, [isLoading, data]);
    return (
        <View style={styles.container}>
            <Text style={styles.textMessange}>Messange</Text>
            <SearchChat />
            { isLoading ?
            (
                <>
                <UserChatBoxskeleton />
                <UserChatBoxskeleton />
                <UserChatBoxskeleton />
                <UserChatBoxskeleton />
                <UserChatBoxskeleton />
                <UserChatBoxskeleton />
                <UserChatBoxskeleton />
                </>
            )
            :
            <FlatList
            showsVerticalScrollIndicator={false}
            data={dataChat}
            renderItem={(item) => <UserChatBox boxChat={item.item} />}
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
        textMessange: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginTop: 20,
            color: colors.textPrimary,
        },
    });
export default Messange;