import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity
} from "react-native";
import React, { useEffect, useState } from "react";;
import useStyles from "style/useStyles";
import { IColor } from "style/color";
import { NotificationNavigationProp } from "types/navigation";
import { Left } from "components/icons";
import NotificationBox from "components/main/Notification/NotificationBox";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
function Notification({ navigation, route }: NotificationNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Left height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.textNotification}>Notification</Text>
            </View>
            <NotificationBox />
            <NotificationBox />
            </View>
        );
}
const createStyles = (colors: IColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.backgroundColor,
        },
        header: {
            marginLeft: width / 30,
            marginTop: 25 + width / 15,
            height: height * 0.05,
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        textNotification: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginLeft: 20,
            color: colors.textPrimary,
        },
    });
export default Notification;