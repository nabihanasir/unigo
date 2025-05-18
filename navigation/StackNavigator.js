import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from '../screens/onboarding1';
import Onboarding2 from '../screens/onboarding2';
import Onboarding3 from '../screens/onboarding3';
import LoginScreen from '../screens/login';
import SignUp from '../screens/signup';

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
      <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
}
