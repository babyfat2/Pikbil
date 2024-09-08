import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "screen/auth/Login/Login";
import Register from "screen/auth/Register/Register";
import { AuthRootStackParamList } from "types/navigation";

const Stack = createNativeStackNavigator<AuthRootStackParamList>();

export default function Auth() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false,}}>
      <Stack.Screen name="Login"  component={Login} options={{ animation:"slide_from_left"}}/>
      <Stack.Screen name="Register" component={Register} options={{ animation:"slide_from_right"}} />
    </Stack.Navigator>
  );
}
