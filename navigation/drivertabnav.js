import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import StudentDetailsScreen from '../screens/studentAttendance';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function DriverTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Student') iconName = 'people-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Student" component={StudentDetailsScreen} />
    </Tab.Navigator>
  );
}
