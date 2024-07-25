import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'; 
import ToDoListScreen from './components/ToDoListScreen';
import CreateToDoListScreen from './components/CreateToDoListScreen'
import DetailToDoList from './components/DetailToDoList';
import UpdateToDoList from './components/UpdateToDoList';
import ScanScreen from './components/ScanScreen';
import AttendanceScreen from './components/AttendanceScreen'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ToDoList" component={ToDoListScreen}/>
        <Stack.Screen name="CreateToDoList" component={CreateToDoListScreen}/>
        <Stack.Screen name="DetailToDoList" component={DetailToDoList}/>
        <Stack.Screen name="UpdateToDoList" component={UpdateToDoList}/>
        <Stack.Screen name='ScanScreen' component={ScanScreen}/>
        <Stack.Screen name='AttendanceScreen' component={AttendanceScreen}/>
        
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
