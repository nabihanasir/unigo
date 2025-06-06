import React from "react";
import { View , Button ,StyleSheet} from "react-native";
import  MapView , {Marker} from "react-native-maps";


export default function HomeScreen({navigation})
{
    
    return(
        <View style={styles.container}>
            <MapView
            style={styles.map}
            initialRegion={{
                latitude: 33.7215,
                longitude: 73.0433,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,}}
            >
            <Marker coordinate={{ 
                latitude: 33.7215,
                longitude: 73.0433,
                }} 
                title="Current location"/>
            </MapView>
             
        </View>

    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },
    loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  });