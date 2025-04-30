// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Login from './screens/login';
// import LargeButton from './components/button';
// import Onboarding1 from './screens/onboarding1';
// import Onboarding2 from './screens/onboarding2';
// import Onboarding3 from './screens/onboarding3';

// export default function App() {
//   return (
//     <View style={styles.container}>
//      <Login></Login>
//      <LargeButton text ="next"></LargeButton>
//      <onboarding1 />
//       <onboarding2 />
//       <onboarding3 />
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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './screens/login';
import LargeButton from './components/button';
import Onboarding1 from './screens/onboarding1';
import Onboarding2 from './screens/onboarding2';
import Onboarding3 from './screens/onboarding3';

export default function App() {
  return (
    <View style={styles.container}>
    {/* ./ <Login />
      <LargeButton text="next" />
      <Onboarding1 />
      <Onboarding2 /> */}
      <Onboarding1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
