import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import AvatarBox from "components/main/Profile/AvatarBox";
import ChooseBox from "components/main/Profile/ChooseBox";
import { useDispatch } from "react-redux";
import useSecondSocket from "socket/SecondSocket";
import SettingBox from "components/main/Profile/SettingBox";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { openAuth } from "redux/slice/routeApp";
import Logout from "components/main/Profile/Logout";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Profile() {
    const { colors, styles } = useStyles(createStyles);
    const user = useAppSelector((status) => status.user.data);
    const dispatch = useDispatch();
    const onPress = () => {
        dispatch(openAuth());
    }
    return (
        <View style={styles.container}>
            <AvatarBox />
            <ChooseBox />
            <ChooseBox />
            <SettingBox />
            <Logout />
        </View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundColor,
        },
        textLogout: {
            fontFamily: 'Montserrat-Light',
            fontWeight: '700',
            fontSize: 24,
            color: "#FFF",
        },
        buttonLogin: {
            position: 'absolute',
            bottom: 20,
            left: width / 15,
            height: height / 12,
            width: width * 13 / 15,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
        }
    });
export default Profile;