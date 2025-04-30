// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import welcomeScreen from './screens/welcomeScreen';
// export default function App() {
//   return (
//     <View style={styles.container}>
//      <Login></Login>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './components/WelcomeScreen';
import NextScreen from './components/NextScreen'; // Replace with your real screen

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="nextScreen" component={NextScreen} /> {/* Dummy for navigation */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;