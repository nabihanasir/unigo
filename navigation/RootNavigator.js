import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingStack from './StackNavigator';
import DriverTabNavigator from './drivertabnav';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator'; // for student
import DriverDrawerNavigator from './DriverDrawerNavigator'; // for driver
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { ActivityIndicator, View } from 'react-native';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserType(docSnap.data().userType);
        }
      }
      setInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Onboarding" component={OnboardingStack} />
          <RootStack.Screen name="StudentApp" component={DrawerNavigator} />       
          <RootStack.Screen name="DriverApp" component={DriverDrawerNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
