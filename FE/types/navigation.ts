import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthRootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type LoginScreen = NativeStackScreenProps<
  AuthRootStackParamList,
  "Login"
>;
export type RegisterScreen = NativeStackScreenProps<
  AuthRootStackParamList,
  "Register"
>;