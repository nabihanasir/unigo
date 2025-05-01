
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './screens/login';
import LargeButton from './components/button';
import Onboarding1 from './screens/onboarding1';
import Onboarding2 from './screens/onboarding2';
import Onboarding3 from './screens/onboarding3';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator }from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator }from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import './gesture-handler';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();


  return (
    
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Onboarding1' screenOptions={{ headerShown: false }} >
      <Stack.Screen name ="Onboarding1" component ={Onboarding1}/>
      <Stack.Screen name ="Onboarding2" component ={Onboarding2}/>
      <Stack.Screen name ="Onboarding3" component ={Onboarding3}/>
     </Stack.Navigator>
    </NavigationContainer>

  );
}

