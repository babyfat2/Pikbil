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
import { ChangePasswordNavigationProp } from "types/navigation";
import { Left } from "components/icons";
import ChangePasswordInput from "components/main/ChangePassword/ChangePasswordInput";
import { useChangePasswordMutation } from "redux/api/action";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function ChangePassword({ navigation, route }: ChangePasswordNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const [password, ChangePassword] = useState("");
    const [newPassword, ChangeNewPassword] = useState("");
    const [retypePassword, ChangeRetypePassword] = useState("");
    const [changePassword] = useChangePasswordMutation();
    const buttonChangePassowrd = () => {
        changePassword({oldPassword: password, newPassword: newPassword})
        .unwrap()
        .then((e) => {
            console.log(e);
        })
        .catch((e) => {
            console.log(e);
        })
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
                <Text style={styles.textChangePassword}>CHANGE PASSWORD</Text>
            </View>
            <View style={styles.viewButtonInput}>
            <ChangePasswordInput
            name="Old Password"
            props={{
                maxLength: 30,
                placeholder: "Old password",
                onChangeText: ChangePassword,
            }}
            />
            <ChangePasswordInput
            name="New Password"
            props={{
                maxLength: 30,
                placeholder: "New password",
                onChangeText: ChangeNewPassword,
            }}
            />
            <ChangePasswordInput
            name="Retype new password"
            props={{
                maxLength: 30,
                placeholder: "Retype new password",
                onChangeText: ChangeRetypePassword,
            }}
            />
            </View>
            <TouchableOpacity 
            style={styles.buttonChangePassowrd}
            onPress={buttonChangePassowrd}
            >
                <Text style={styles.textButtonChangePassword}>Change Password</Text>
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
            marginBottom: 40,
            height: height * 0.08,
            justifyContent: 'flex-start',
        },
        textChangePassword: {
            marginTop: 20,
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            color: colors.textPrimary,
        },
        viewButtonInput: {
            height: height * 0.7,
        },
        buttonChangePassowrd: {
            height:  height * 0.08,
            width: "100%",
            borderRadius: 20,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textButtonChangePassword: {
            color: '#FFF',
            fontFamily: "Monsterrat-Bold",
            fontSize: 24,
        }
    });
export default ChangePassword;