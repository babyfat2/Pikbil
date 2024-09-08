import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";;
import useStyles from "style/useStyles";
import { StatusBar } from "expo-status-bar";
import BoxInput from "components/auth/boxInput";
import BoxInputPassword from "components/auth/boxInputPassword";
import { createStyles } from './RegisterCss';
import { RegisterScreen } from "types/navigation";
import { useRegisterMutation } from "redux/api/auth";
import { IError } from "types/api";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Register({ navigation }: RegisterScreen) {
  const { colors, styles } = useStyles(createStyles);
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullnameError, setFullnameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [register] = useRegisterMutation();
  const onPressLogin = () => {
    navigation.navigate("Login");
  }
  const onPressButtonRegister = () => {
    register({email: email, password: password, fullname: fullname})
    .unwrap()
    .then((e) => {
      navigation.navigate("Login");
    })
    .catch((e) => {
      if(e.status === 401) {
        setFullname("");
        setEmailError(e.data.msg);
        setPasswordError("");
      }
      if (e.data.errors) {
      e.data.errors.forEach(function(object: IError){
        if(object.path === "email") {
          setEmailError(object.msg);
        }
        if(object.path === "password") {
          setPasswordError(object.msg);
        }
        if(object.path === "fullname") {
          setFullnameError(object.msg);
        }
      })
    }
    });
  }
  return (
    <View
      style={styles.container}
    >
      <StatusBar animated={false} backgroundColor="transparent" />
      <Text style={styles.textNiceTo} >Nice to know you!</Text>
      <Text style={styles.textUnderNiceTo}>It's your first time to use pikbil.</Text>
      <BoxInput
        error={fullnameError}
        name="Full name"
        props={{
          placeholder: "Your full name",
          onChangeText: setFullname,
        }}
      />
      <BoxInput
        error={emailError}
        name="Email address"
        props={{
          placeholder: "Your email address",
          onChangeText: setEmail,
        }}
      />
      <BoxInputPassword
        error={passwordError}
        props={{
          placeholder: "Your password",
          onChangeText: setPassword,
        }}
      />
      <TouchableOpacity style={styles.buttonRegister} onPress={onPressButtonRegister}>
        <Text style={styles.textRegister}>Register</Text>
      </TouchableOpacity>
      <View style={styles.viewOrRegister}>
        <View style={styles.line} />
        <Text style={styles.textOrRegister}>or register with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.viewLogin}>
        <Text style={styles.textAlready}>Already have a pikbil account? </Text>
        <TouchableOpacity onPress={onPressLogin}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;