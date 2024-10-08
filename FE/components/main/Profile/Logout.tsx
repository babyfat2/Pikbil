import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import {  LogoutIcon, Setting } from "components/icons";
import { useNavigation } from "@react-navigation/native";
import { HomeProp } from "types/navigation";
import { useDispatch } from "react-redux";
import { openAuth } from "redux/slice/routeApp";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function Logout() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const navigation = useNavigation<HomeProp>();
    const dispatch = useDispatch();
    const onPress = () => {
        dispatch(openAuth());
    }
    return (
        <TouchableOpacity
            style={{
                marginLeft: width/15,
                marginRight: width/15,
                marginTop: 20,
                height: height / 10,
                alignItems: "center",
                flexDirection: 'row',
                borderBottomWidth: 0.3,
                borderColor: colors.secondary,
            }}
            onPress={onPress}
        >
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <LogoutIcon height={48} width={48} color={colors.secondary} />
            </View>
            <Text
                style={{
                    marginLeft: 20,
                    color: colors.secondary,
                    fontSize: 20,
                }}
            >
                Logout
            </Text>
        </TouchableOpacity>
    );
}
