import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/NotificationScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import ConfromationScreen from '../Screens/ConfromationScreen';
import Email from '../Screens/Email';
import Phone from '../Screens/Phone';
import Main from '../Screens/Main';
import OneTap from '../Screens/OneTap';
import LastScreen from '../Screens/LastScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Notification" options={{headerShown:false}} component={NotificationScreen} />
      <Stack.Screen name="Conformation" options={{headerShown:false}} component={ConfromationScreen} />
      <Stack.Screen name="Mail" options={{headerShown:false}} component={Email} />
      <Stack.Screen name="Call" options={{headerShown:false}} component={Phone} />
      <Stack.Screen name="Main" options={{headerShown:false}} component={Main} />
      <Stack.Screen name="Tap" options={{headerShown:false}} component={OneTap} />
      <Stack.Screen name="Last" options={{headerShown:false}} component={LastScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}