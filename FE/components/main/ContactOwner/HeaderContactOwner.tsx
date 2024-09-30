import {
    Text,
    Dimensions,
    View,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { useAppSelector } from "redux/hooks.ts/hooks";
import { Close, Left } from "components/icons";
import { useNavigation } from "@react-navigation/native";
import { ChatNavigationProp, HomeProp } from "types/navigation";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
export default function HeaderContactOwner() {
    const colors = useAppSelector((state) => (state.darkMode.color));
    const navigation = useNavigation<HomeProp>();
    return (
        <View style={{
            position: 'absolute',
            height: height * 0.14,
            width: width,
            backgroundColor: colors.backgroundColor,
            borderBottomWidth: 0.5,
        }}>
            <View style={{ height: height * 0.04 }} />
            <View style={{
                height: height * 0.1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <TouchableOpacity
                    style={{
                        width: width * 0.12,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Left width={24} height={24} color={colors.primary} />
                </TouchableOpacity>
                <View
                    style={{
                        width: 0.75 * width,
                        flexDirection: 'column',
                    }}
                >
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 18,
                        color: colors.textPrimary,
                    }}>Floy Miles</Text>
                    <Text style={{
                        fontSize: 14,
                        color: colors.textSecondary,
                    }}
                    >Floy Miles</Text>
                </View>
            </View>
        </View>
    );
}


