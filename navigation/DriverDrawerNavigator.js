import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HelpScreen from '../screens/HelpScreen';
import ChangeRoutesScreen from '../screens/ChangeRouteScreen';
import NotificationScreen from '../screens/Notification';
import DriverTabNavigator from './drivertabnav';

const Drawer = createDrawerNavigator();

export default function DriverDrawerNavigator() {
  return (
   <Drawer.Navigator >
      <Drawer.Screen name="DriverTabs" component={DriverTabNavigator}  />
      <Drawer.Screen name="ChangeRoute" component={ChangeRoutesScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name='HelpScreen' component={HelpScreen}/>
    </Drawer.Navigator>
  
  );
}
