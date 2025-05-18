import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import HelpScreen from '../screens/HelpScreen';
import ChangeRoutesScreen from '../screens/ChangeRouteScreen';
import NotificationScreen from '../screens/Notification';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={TabNavigator}  />
      <Drawer.Screen name="ChangeRoute" component={ChangeRoutesScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name='HelpScreen' component={HelpScreen}/>
    </Drawer.Navigator>
  );
}
