import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";;
import { IColor } from "style/color";
import useStyles from "style/useStyles";
import { useAppDispatch, useAppSelector } from "redux/hooks.ts/hooks";
import { dark, light } from "redux/slice/darkMode";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Introduce() {
  const { colors, styles } = useStyles(createStyles);
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => (state.darkMode));
  console.log(colors);
  const onPress = () => {
    if (darkMode.status === "light") {
      dispatch(dark());
    } else {
      dispatch(light());
    }
  }
  return (
    <View
      style={styles.container}
    >
      <Text style={{ color: colors.textSecondary }}>abc</Text>
      <TouchableOpacity style={{ height: 40, width: 50, backgroundColor: colors.secondary }} onPress={onPress} >

      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: IColor) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 25,
      paddingVertical: height * 0.04,
    },
  });

export default Introduce;
