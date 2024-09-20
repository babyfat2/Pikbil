import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import SearchChat from "components/main/Messange/SearchChat";
import UserChatBox from "components/main/Messange/UserChatBox";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Messange() {
    const { colors, styles } = useStyles(createStyles);
    const [star, setStar] = useState<number>(1);
    const [number, onChangeNumber] = useState<string>("");
    return (
        <View style={styles.container}>
            <Text style={styles.textMessange}>Messange</Text>
            <SearchChat />
            <UserChatBox />
            <UserChatBox />
            <UserChatBox />
            <UserChatBox />
            <TouchableOpacity
            style={styles.buttonAddChat}
            >
                <Text style={styles.textAddChat}>Add new Chat</Text>
            </TouchableOpacity>
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
        buttonAddChat: {
            width: width * 13/15,
            position: 'absolute',
            bottom: 20,
            left: width/15,
            padding: 15,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.primary,
            borderRadius: 20,
        },
        textAddChat: {
            color: "#FFFF",
            fontSize: 18,
            fontFamily: "Montserrat-Bold",
        }
    });
export default Messange;