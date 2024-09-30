import {
    Text,
    Dimensions,
    View,
    TextInput,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function ChangeFullName() {
    const colors = useAppSelector((state) => state.darkMode.color);
    const user = useAppSelector((state) => state.user.data);
    const [message, setMessage] = React.useState('');
    if (user)
        return (
            <View
                style={{
                    marginBottom: 20,
                    alignItems: 'flex-start',
                }}
            >
                <Text style={{
                    marginTop: 20,
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 20,
                    color: colors.textPrimary,
                }}>
                    Full name
                </Text>
                <TextInput
                autoFocus={true}
                cursorColor={colors.primary}
                placeholder={user.fullname}
                onChangeText={setMessage}
                value={message}
                placeholderTextColor={colors.textPrimary}
                style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: colors.primary,
                    borderRadius: 5,
                    paddingTop: 10,
                    paddingLeft: 20,
                    paddingBottom: 10,
                    marginTop: 10,
                }}
            />
            </View>
        );
}
