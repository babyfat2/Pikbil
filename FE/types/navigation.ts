import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IBoxChat, ICar, IDiscount, IUserData } from "./api";
import { NavigationProp } from "@react-navigation/native";

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

export type BottomRootStackParamList = {
  Home: undefined;
  Trip: undefined;
  AddCar: undefined;
  Messange: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  Trip: undefined;
  AddCar: undefined;
  Messange: undefined;
  Profile: undefined;
  CarDetail: {
    car: ICar;
  };
  DiscountDetail: {discount: IDiscount};
  Checkout: {
    car: ICar;
    date: Date;
  };
  ProtectionPlan: {
    price: number,
    setPrice: React.Dispatch<React.SetStateAction<number>>,
  };
  Review: {
    car: ICar,
  };
  BookingSuccess: undefined;
  Chat: {
    boxChat: IBoxChat;
    receiverId: IUserData;
  };
  Setting: undefined;
  ContactOwner: {
    owner: IUserData;
  },
  AllCar: undefined;
  AccountProfile: undefined;
}
export type HomeProp = NavigationProp<RootStackParamList, "Home">;

export type HomeNavigationProp = NativeStackScreenProps<RootStackParamList, "Home">;

export type TripNavigationProp = NativeStackScreenProps<RootStackParamList, "Trip">;

export type MessangeNavigationProp = NativeStackScreenProps<RootStackParamList, "Messange">;

export type ProfileNavigationProp = NativeStackScreenProps<RootStackParamList, "Profile">;

export type CarDetailNavigationProp = NativeStackScreenProps<RootStackParamList, "CarDetail">;

export type DiscountDetailNavigationProp = NativeStackScreenProps<RootStackParamList, "DiscountDetail">;

export type CheckoutNavigationProp = NativeStackScreenProps<RootStackParamList, "Checkout">;

export type ProtectionPlanNavigationProp = NativeStackScreenProps<RootStackParamList, "ProtectionPlan">;

export type ReviewNavigationProp = NativeStackScreenProps<RootStackParamList, "Review">;

export type BookingSuccessNavigationProp = NativeStackScreenProps<RootStackParamList, "BookingSuccess">;

export type ChatNavigationProp = NativeStackScreenProps<RootStackParamList, "Chat">;

export type SettingNavigationProp = NativeStackScreenProps<RootStackParamList, "Setting">;

export type ContactOwnerNavigationProp = NativeStackScreenProps<RootStackParamList, "ContactOwner">;

export type AllCarNavigationProp = NativeStackScreenProps<RootStackParamList, "AllCar">;

export type AccountProfileNavigationProp = NativeStackScreenProps<RootStackParamList, "AccountProfile">;

export type AddCarNavigationProp = NativeStackScreenProps<RootStackParamList, "AddCar">;