import {
    Dimensions,
    Image,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { useNavigation } from "@react-navigation/native";
import { HomeProp } from "types/navigation";
import { IBoxChat, IUserData } from "types/api";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function UserChatBox({ boxChat }: { boxChat: IBoxChat | undefined }) {
    const user = useAppSelector((state) => state.user.data)
    const colors = useAppSelector((state) => (state.darkMode.color));
    const [statusUser, setStatusUser] = useState("sender");
    const [receiver, setReceiver] = useState<IUserData>();
    const navigation = useNavigation<HomeProp>();
    useEffect(() => {
        if (boxChat?.arrayMessage[0].sender.id === user?.id) {
            setStatusUser("sender");
            setReceiver(boxChat?.arrayMessage[0].receiver);
        } else {
            setStatusUser("receiver");
            setReceiver(boxChat?.arrayMessage[0].sender);
        }
    }, []);
    if (user && boxChat && receiver) {
        return (
            <TouchableOpacity
                style={{
                    marginBottom: 10,
                    marginTop: 10,
                    height: height * 0.08,
                    flexDirection: 'row',
                    borderBottomWidth: 0.5,
                }}
                onPress={() => navigation.navigate("Chat", {boxChat: boxChat, receiverId: receiver})}
            >
                <Image
                    style={{
                        height: height * 0.075,
                        width: height * 0.075,
                        borderRadius: 40,
                        marginRight: 10,
                    }}
                    source={
                        statusUser === "sender" && boxChat.arrayMessage[0].receiver.avatar
                            ?
                            { uri: boxChat.arrayMessage[0].receiver.avatar }
                            : (
                                statusUser === "receiver" && boxChat.arrayMessage[0].sender.avatar
                                    ?
                                    { uri: boxChat.arrayMessage[0].sender.avatar }
                                    :
                                    require("../../../image/avatar.png")
                            )
                    } />
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

                            {statusUser === "receiver" ? boxChat?.arrayMessage[0].sender.fullname : boxChat?.arrayMessage[0].receiver.fullname}
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                color: colors.textSecondary,
                            }}>
                            { }
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        color: colors.textSecondary,
                    }}>{boxChat?.arrayMessage[0].message}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
