import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarDetail from "screen/Main/CarDetail/CarDetail";
import Messange from "screen/Main/Messange";
import Profile from "screen/Main/Profile";
import Trip from "screen/Main/Trip";
import { RootStackParamList } from "types/navigation";
import BottomMain from "./mainBottom";
import DiscountDetail from "screen/Main/DiscountDetail/DiscountDetail";
import Checkout from "screen/Main/Checkout/Checkout";
import ProtectionPlan from "screen/Main/Checkout/ProtectionPlan";
import Review from "screen/Main/Review/Review";
import BookingSuccess from "screen/Main/Checkout/BookingSuccess";
import Chat from "screen/Main/Chat/Chat";
import Setting from "screen/Main/Setting/Setting";
import ContactOwner from "screen/Main/Chat/ContactOwner";
import AllCar from "screen/Main/AllCar/AllCar";
import AccountProfile from "screen/Main/AccountProfile/AccountProfile";
import AddCar from "screen/Main/AddCar";
import ChangePassword from "screen/Main/ChangePassword/ChangePassword";
import SearchCar from "screen/Main/Search/SearchCar";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false,}}>
      <Stack.Screen name="Home" component={BottomMain} />
      <Stack.Screen name="Trip" component={Trip} />
      <Stack.Screen name="Messange" component={Messange} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CarDetail" component={CarDetail} />
      <Stack.Screen name="DiscountDetail" component={DiscountDetail} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="ProtectionPlan" component={ProtectionPlan} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="BookingSuccess" component={BookingSuccess} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="ContactOwner" component={ContactOwner} />
      <Stack.Screen name="AllCar" component={AllCar} />
      <Stack.Screen name="AccountProfile" component={AccountProfile} />
      <Stack.Screen name="AddCar" component={AddCar} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="SearchCar" component={SearchCar} />
    </Stack.Navigator>
  );
}