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
      textNiceTo: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginTop: width / 5,
      },
      textUnderNiceTo: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        color: colors.textSecondary,
        marginBottom: height / 15,
      },
      buttonRegister: {
        height: height / 15,
        width: width * 0.9,
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      textRegister: {
        fontFamily: 'Monstserrat-Bold',
        fontSize: 24,
        color: '#FFF',
      },
        viewOrRegister: {
        marginTop: height / 30,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
      },
      textOrRegister: {
        fontFamily: 'Monstserrat-Bold',
        fontSize: 16,
        color: colors.textPrimary,
      },
      line: {
        height: 0.4,
        width: width * 0.28,
        backgroundColor: colors.secondary,
        margin: 10,
      },
      viewLogin: {
        marginTop: height / 15,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
      },
      textAlready: {
        fontFamily: 'Monstserrat-Bold',
        fontSize: 16,
        color: colors.textSecondary,
      },
      textLogin: {
        fontFamily: 'Monstserrat-Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.textPrimary,
      }
    });
  