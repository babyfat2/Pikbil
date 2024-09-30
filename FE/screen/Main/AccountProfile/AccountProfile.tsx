import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import { AccountProfileNavigationProp } from "types/navigation";
import { Left } from "components/icons";
import ChangeAvatar from "components/main/AccountProfile/ChangeAvatar";
import ChangeFullName from "components/main/AccountProfile/ChangeFullName";
import { useChangeAvatarMutation } from "redux/api/action";
import { useAppSelector } from "redux/hooks.ts/hooks";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function AccountProfile({ navigation, route }: AccountProfileNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const [updateProfile] = useChangeAvatarMutation();
    const [avatar, changeAvatar] = useState<{uri :string, mimeType: string}>();
    const onPressAvatar = () => {
        console.log(avatar);
        if(avatar)
        updateProfile({uri: avatar.uri, mimeType: avatar.mimeType})
    }
    return (

            <View
                style={styles.container}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Left height={32} width={32} color={colors.primary} />
                    </TouchableOpacity>
                    <Text style={styles.textAccountProfile}>ACCOUNT PROFILE</Text>
                </View>
                <ChangeAvatar changeAvatar={changeAvatar} />
                <ChangeFullName />
                <TouchableOpacity
                    style={styles.buttonUpdateProfile}
                    onPress={onPressAvatar}
                >
                    <Text style={styles.textUpdateProfile}>Update profile</Text>
                </TouchableOpacity>
            </View>
    );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: width / 15,
            backgroundColor: colors.backgroundColor,
        },
        header: {
            marginTop: 25,
            height: height * 0.08,
            justifyContent: 'flex-start',
        },
        textAccountProfile: {
            marginTop: 20,
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            color: colors.textPrimary,
        },
        buttonUpdateProfile: {
            marginTop: 40,
            borderRadius: 20,
            width: '100%',
            padding: 20,
            backgroundColor: colors.secondary,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textUpdateProfile: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            color: "#FFF",
        }
    });
export default AccountProfile;