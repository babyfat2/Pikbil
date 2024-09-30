import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'screen/Main/Home';
import Messange from 'screen/Main/Messange';
import Profile from 'screen/Main/Profile';
import Trip from 'screen/Main/Trip';
import { BottomRootStackParamList, HomeProp } from 'types/navigation';
import { View, Text, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import { AddIcon, HomeIcon, MessageIcon, ProfileIcon, TripIcon } from 'components/icons';
import { useAppSelector } from 'redux/hooks.ts/hooks';
import AddCar from 'screen/Main/AddCar';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomRootStackParamList>();

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function BottomMain() {
  const colors = useAppSelector((status) => status.darkMode.color);
  const navigation = useNavigation<HomeProp>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.backgroundColor, height: height * 0.1 }
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

              <HomeIcon height={focused ? 32 : 24} width={focused ? 32 : 24} color={focused ? colors.primary : colors.secondary} />
              <Text style={{ marginTop: 5, color: focused ? colors.textPrimary : colors.textSecondary }}>Home</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Trip" component={Trip}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

              <TripIcon height={focused ? 32 : 24} width={focused ? 32 : 24} color={focused ? colors.primary : colors.secondary} />
              <Text style={{ marginTop: 5, color: focused ? colors.textPrimary : colors.textSecondary }}>My trip</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="AddCar" component={AddCar}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'absolute',
            top: -20,
            backgroundColor: colors.secondary,
            padding: 18,
            borderRadius: 20,
           }}>
            <AddIcon height={32} width={32} color={"#FFF"} />
          </View>
        ),
        tabBarButton: (props) => <TouchableOpacity {...props} onPress={() => navigation.navigate("AddCar") }  />
      }}
      />
      <Tab.Screen name="Messange" component={Messange}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

              <MessageIcon height={focused ? 32 : 24} width={focused ? 32 : 24} color={focused ? colors.primary : colors.secondary} />
              <Text style={{ marginTop: 5, color: focused ? colors.textPrimary : colors.textSecondary }}>Messange</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

              <ProfileIcon height={focused ? 32 : 24} width={focused ? 32 : 24} color={focused ? colors.primary : colors.secondary} />
              <Text style={{ marginTop: 5, color: focused ? colors.textPrimary : colors.textSecondary }}>Profile</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}
