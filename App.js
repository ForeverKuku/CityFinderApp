import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import GetStarted from './src/screens/GetStarted';
import SignInScreen from './src/screens/SignInScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  <NavigationContainer>
  <Stack.Navigator initialRouteName='SplashScreen'>
    <Stack.Screen name="SplashScreen" component={SplashScreen}  options={{headerShown: false}}/>
    <Stack.Screen name="GetStarted" component={GetStarted}  options={{headerShown: false}}/>
    <Stack.Screen name="SignInScreen" component={SignInScreen}  options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
}

export default App;