import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Button } from 'react-native';
import { logOut } from '../functionalities/authfunctions';

const CustomDrawerContent = (props) => {
  const handleSignOut = async () => {
    try {
      await logOut();
      props.navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }], 
      });
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
        <Button title="Sign Out" onPress={handleSignOut} color="#f44336" />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
