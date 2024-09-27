import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React, {  useState } from "react";;
import useStyles from "style/useStyles";
import { StatusBar } from "expo-status-bar";
import BoxInput from "components/auth/boxInput";
import BoxInputPassword from "components/auth/boxInputPassword";
import {createStyles} from './LoginCss';
import { LoginScreen } from "types/navigation";
import { useLoginMutation } from "redux/api/auth";
import { IError } from "types/api";
import { useAppDispatch } from "redux/hooks.ts/hooks";
import { openHome } from "redux/slice/routeApp";
import { reloadTrip } from "redux/slice/trip";
import { reloadChat } from "redux/slice/chat";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Login({navigation} : LoginScreen) {
  const { colors, styles } = useStyles(createStyles);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const onPressRegister = () => {
    navigation.navigate("Register");
  }
  const onPressButtonLogin = () => {
    login({email: email, password: password})
    .unwrap()
    .then((e) => {
      dispatch(openHome());
      dispatch(reloadTrip());
      dispatch(reloadChat());
    })
    .catch((e) => {
      if(e.status === 401) {
        setError(e.data.msg);
        setEmailError("");
        setPasswordError("");
      }
      if (e.data.errors) {
      setError("");
      e.data.errors.forEach(function(object: IError){
        if(object.path === "email") {
          setEmailError(object.msg);
        }
        if(object.path === "password") {
          setPasswordError(object.msg);
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
      <Text style={styles.textWelcome} >Welcome to, Pikbil</Text>
      <Text style={styles.textUnderWelcome}>Enter your pikbil account to continue.</Text>
      <BoxInput
      error= {emailError}
      name = "Email address"
      props={{
        placeholder: "Your email address",
        onChangeText: setEmail,
      }}
      />
      <BoxInputPassword
      error= {passwordError}
      props={{
        placeholder: "Your password",
        onChangeText: setPassword,
      }}
      />
      <View style={styles.viewIncorrect}>
      <Text style={styles.textIncorrect}>{error}</Text>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={onPressButtonLogin}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity style={styles.buttonForget}>
        <Text style={styles.textForget}>Forget password</Text>
      </TouchableOpacity>
      </View>
      <View  style = {styles.viewOrLogin}>
      <View style = {styles.line} />
      <Text style={styles.textOrLogin}>or login with</Text>
      <View style = {styles.line} />
      </View>
      <View style = {styles.viewRegister}>
        <Text style={styles.textHaveAccount}>Didn't you have a pikbil account? </Text>
        <TouchableOpacity onPress={onPressRegister}>
          <Text style={styles.textRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;