import { View,Image } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../my-logo/assets/images.png')} 
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}