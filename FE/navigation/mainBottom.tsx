import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'screen/Main/Home';
import Messange from 'screen/Main/Messange';
import Profile from 'screen/Main/Profile';
import Trip from 'screen/Main/Trip';
import { BottomRootStackParamList } from 'types/navigation';
import MainStack from './mainStack';

const Tab = createBottomTabNavigator<BottomRootStackParamList>();


export default function BottomMain() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Trip" component={Trip} />
      <Tab.Screen name="Messange" component={Messange} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
