import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./app/screens/HomeScreen.js";
import BookingScreen from "./app/screens/BookingScreen.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DatePicker from 'react-native-date-picker';
import 'react-native-gesture-handler';
import ConfirmationScreen from './app/screens/ConfirmationScreen.js';
import LottieView from 'lottie-react-native';

var Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen"  component={HomeScreen} options={{headerShown:false}}>
        </Stack.Screen>
        <Stack.Screen name="BookingScreen" component={BookingScreen} options={{headerTitleStyle: {color:"white"}}}>
        </Stack.Screen>
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{headerTitleStyle: {color:"white"}}}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
