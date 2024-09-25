import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { SettingNavigationProp, } from "types/navigation";
import { IColor } from "style/color";
import { LogBox } from 'react-native';
import { Left, Off, On } from "components/icons";
import { useAppDispatch, useAppSelector } from "redux/hooks.ts/hooks";
import { dark, light } from "redux/slice/darkMode";
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Setting({ navigation, route }: SettingNavigationProp) {
    const { colors, styles } = useStyles(createStyles);
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector((state) => (state.darkMode));
    const onPressDarkMode = () => {
        if (darkMode.status === "light") {
          dispatch(dark());
        } else {
          dispatch(light());
        }
      }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Left height={32} width={32} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.textSetting}>Setting</Text>
            </View>
            <View style={styles.viewOptions}>
            <Text style={styles.textOptions}>Dark Mode</Text>
            <TouchableOpacity
            onPress={onPressDarkMode}
            >
            {darkMode.status === "light" ? 
            <Off height={40} width={80} color={colors.primary}/>
            :
            <On height={40} width={80} color={colors.primary}/>
            }
            </TouchableOpacity>
            </View>

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
        header: {
            marginTop: 25,
            height: height * 0.08,
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        textSetting: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 24,
            marginLeft: 20,
            color: colors.textPrimary,
        },
        viewOptions: {
            justifyContent: "space-between",
            alignItems: 'center',
            flexDirection: 'row',
        },
        textOptions: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: colors.textPrimary,
        }
    });
export default Setting;