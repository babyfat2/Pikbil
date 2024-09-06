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

function Introduce() {
  const { colors, styles } = useStyles(createStyles);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const dispatch = useAppDispatch();
  const renderRoute = () => {
    if (pageNumber === 1) {
      return (
        <View style={{
          padding: 20,
          marginBottom: 40,
        }}>
          <Image style={styles.imageWelcome} source={require('../../image/welcome1.png')} />
          <Text style={styles.textHeaderWelcome}>Endless option</Text>
          <Text style={styles.textWelcome}>Choose of hundred of models you won't find anywhere else. Pick it up or get it delivered where you want it.</Text>
        </View>
      )
    }
    if (pageNumber === 2) {
      return (
        <View style={{
          padding: 20,
          marginBottom: 40,
        }}>
          <Image style={styles.imageWelcome} source={require('../../image/welcome2.png')} />
          <Text style={styles.textHeaderWelcome}>Drive Confidently</Text>
          <Text style={styles.textWelcome}>Choose of hundred of models you won't find anywhere else. Pick it up or get it delivered where you want it.</Text>
        </View>
      )
    }
    if (pageNumber === 3) {
      return (
        <View style={{
          padding: 20,
          marginBottom: 40,
        }}>
          <Image style={styles.imageWelcome} source={require('../../image/welcome3.png')} />
          <Text style={styles.textHeaderWelcome}>24/7 Support</Text>
          <Text style={styles.textWelcome}>Choose of hundred of models you won't find anywhere else. Pick it up or get it delivered where you want it.</Text>
        </View>
      )
    }
  }
  const onPressNext = () => {
    if(pageNumber <= 2) {
    setPageNumber(pageNumber + 1);
    } else {
      dispatch(openAuth());
    }
  };
  const onPressSkip = () => {
    dispatch(openAuth());
  }
  return (
    <View
      style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.backgroundColor,
        }}
    >
      {renderRoute()}
      <View style={styles.containerUnder}>
        <TouchableOpacity style={styles.buttonNext} onPress={onPressNext}>
          <Text style={{color: "#FFF", fontSize: 18,}}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSkip} onPress={onPressSkip}>
          <Text style={{color: colors.textSecondary, fontSize: 18,}}>Skip</Text>
        </TouchableOpacity>
      </View>
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
    imageWelcome: {
      height: height * 0.4,
      borderRadius: 40,
      marginBottom: height * 0.1,
    },
    textHeaderWelcome: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 24,
      color: colors.textPrimary,
      marginBottom: height * 0.03,
    },
    textWelcome: {
      fontFamily: 'Montserrat-light',
      fontSize: 18,
      color: colors.textSecondary,
    },
    containerUnder: {
      height: height * 0.06,
      width: width * 0.8,
    },
    buttonNext: {
      position: 'absolute',
      right: 0,
      height: height * 0.06,
      width: height * 0.1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: colors.primary,
    },
    buttonSkip: {
      position: 'absolute',
      right: width * 0.2,
      height: height * 0.06,
      width: height * 0.1,
      justifyContent: "center",
      alignItems: "center",
    }
  });

export default Introduce;