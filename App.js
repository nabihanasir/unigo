import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './screens/login';
import LargeButton from './components/button';
import Onboarding1 from './screens/onboarding1';
import Onboarding2 from './screens/onboarding2';
import Onboarding3 from './screens/onboarding3';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomDrawerNavigator }from '@react-navigation/bottom-Drawers';
import {createNativeStackNavigator }from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import './gesture-handler';
import HomeScreen from './screens/HomeScreen';
import ViewRoute from './components/viewRoute';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();


  return (
    
    <NavigationContainer>
     <Drawer.Navigator screenOptions={{headerShown:false , DrawerBarIcon:()=>{return(<Ionicons name='home'/>)}}} >
     <Drawer.Screen name= 'Home' component={HomeScreen}></Drawer.Screen>
     <Drawer.Screen name= 'Home' component={HomeScreen}></Drawer.Screen>
     <Drawer.Screen name= 'Home' component={HomeScreen}></Drawer.Screen>
     <Drawer.Screen name= 'Home' component={HomeScreen}></Drawer.Screen>
     </Drawer.Navigator>
    </NavigationContainer> 

  );
}