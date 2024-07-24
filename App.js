
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import DashboardScreen from './components/DashboardScreen';
import LandingScreen from './components/LandingScreen';
import RegisterScreen from './components/RegisterScreen';
import SuccessAttendanceInScreen from './components/SuccessAttendanceInScreen';
import HomeScreen from './components/HomeScreen'; 
import ToDoListScreen from './components/ToDoListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        {/* <Stack.Screen name="SuccessAttendanceIn" component={SuccessAttendanceInScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ToDoList" component={ToDoListScreen}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;