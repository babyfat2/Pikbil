import {
  Dimensions,
  StyleSheet,
} from "react-native";
import { IColor } from "style/color";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const createStyles = (colors: IColor) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      padding: width / 20,
    },
    textWelcome: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 32,
      fontWeight: 'bold',
      color: colors.textPrimary,
      marginTop: width / 5,
    },
    textUnderWelcome: {
      fontFamily: 'Montserrat-Light',
      fontSize: 16,
      color: colors.textSecondary,
      marginBottom: height / 15,
    },
    viewIncorrect: {
      height: height /40,
    },
    textIncorrect: {
      position: 'absolute',
      right: 0,
      fontFamily: 'Montserrat-Light',
        fontSize: 12,
        color: '#FF4423',
    },
    buttonLogin: {
      height: height / 15,
      width: width * 0.9,
      backgroundColor: colors.primary,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    textLogin: {
      fontFamily: 'Monstserrat-Bold',
      fontSize: 24,
      color: '#FFF',
    },
    buttonForget: {
      marginTop: height / 80,
      position: 'absolute',
      right: 0,
    },
    textForget: {
      fontFamily: 'Monstserrat-Bold',
      fontSize: 16,
      color: colors.textSecondary,
    },
    viewOrLogin: {
      marginTop: height / 15,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
    },
    textOrLogin: {
      fontFamily: 'Monstserrat-Bold',
      fontSize: 16,
      color: colors.textPrimary,
    },
    line: {
      height: 0.5,
      width: width * 0.3,
      backgroundColor: colors.secondary,
      margin: 10,
    },
    viewRegister: {
      marginTop: height / 15,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
    },
    textHaveAccount: {
      fontFamily: 'Monstserrat-Bold',
      fontSize: 16,
      color: colors.textSecondary,
    },
    textRegister: {
      fontFamily: 'Monstserrat-Bold',
      fontWeight: 'bold',
      fontSize: 16,
      color: colors.textPrimary,
    }
  });
