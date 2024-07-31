
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './components/UserContext';

import DashboardScreen from './components/DashboardScreen';
import LandingScreen from './components/LandingScreen';
import RegisterScreen from './components/RegisterScreen';
import SuccessAttendanceInScreen from './components/SuccessAttendanceInScreen';
import HomeScreen from './components/HomeScreen';
import ToDoListScreen from './components/ToDoListScreen';
import CreateToDoListScreen from './components/CreateToDoListScreen'
import DetailToDoList from './components/DetailToDoList';
import UpdateToDoList from './components/UpdateToDoList';
import ScanScreen from './components/ScanScreen';
import AttendanceScreen from './components/AttendanceScreen'
import SuccessAttendanceLate from './components/SuccessAttendanceLateScreen';
import ProfileScreen from './components/ProfileScreen';
import AboutAccountScreen from './components/AboutAccountScreen';
import PasswordOneScreen from './components/PasswordOneScreen';
import PasswordTwoScreen from './components/PasswordTwoScreen';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ToDoList" component={ToDoListScreen} />
          <Stack.Screen name="CreateToDoList" component={CreateToDoListScreen} />
          <Stack.Screen name="DetailToDoList" component={DetailToDoList} />
          <Stack.Screen name="UpdateToDoList" component={UpdateToDoList} />
          <Stack.Screen name='ScanScreen' component={ScanScreen} />
          <Stack.Screen name='AttendanceScreen' component={AttendanceScreen} />
          {/* <Stack.Screen name="SuccessAttendanceIn" component={SuccessAttendanceInScreen} /> */}
          {/* <Stack.Screen name="SuccessAttendanceLate" component={SuccessAttendanceLate} /> */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="AboutAcc" component={AboutAccountScreen} />
          <Stack.Screen name="Password1" component={PasswordOneScreen} />
          <Stack.Screen name="Password2" component={PasswordTwoScreen} />
           <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
