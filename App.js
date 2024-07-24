import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import DashboardScreen from './components/DashboardScreen';
import LandingScreen from './components/LandingScreen';
import RegisterScreen from './components/RegisterScreen';
import SuccessAttendanceInScreen from './components/SuccessAttendanceInScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {/* <Stack.Screen name="SuccessAttendanceIn" component={SuccessAttendanceInScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
