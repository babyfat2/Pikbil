import {
    View,
    Dimensions,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";;
  import { IColor } from "style/color";
  import useStyles from "style/useStyles";
  import Animated, { FadeOut } from "react-native-reanimated";
  import { useAppDispatch } from "redux/hooks.ts/hooks";
  import { openAuth } from "redux/slice/routeApp";
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  
  function Login() {
    const { colors, styles } = useStyles(createStyles);
    return (
      <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.backgroundColor,
          }}
      >

      </View>
    );
  }
  
  const createStyles = (colors: IColor) =>
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backgroundColor,
        padding: width / 10,
      },
    });
  
  export default Login;