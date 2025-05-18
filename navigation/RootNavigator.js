import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingStack from './StackNavigator';
import DrawerNavigator from './DrawerNavigator';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Onboarding" component={OnboardingStack} />
        <RootStack.Screen name="MainApp" component={DrawerNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
