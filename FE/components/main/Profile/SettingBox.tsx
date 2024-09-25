import {
    Image,
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { IconPerson, Setting } from "components/icons";
import { useNavigation } from "@react-navigation/native";
import { HomeProp } from "types/navigation";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function SettingBox() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const navigation = useNavigation<HomeProp>();
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
            onPress={() => navigation.navigate("Setting")}
        >
            <View
                style={{
                    borderWidth: 2,
                    borderColor: colors.secondary,
                    height: height / 16,
                    width: height / 16,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Setting height={28} width={28} color={colors.secondary} />
            </View>
            <Text
                style={{
                    marginLeft: 20,
                    color: colors.secondary,
                    fontSize: 20,
                }}
            >
                Setting
            </Text>
        </TouchableOpacity>
    );
}
