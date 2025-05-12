import React from "react";
import { View , StyleSheet} from "react-native";
import MapView , {Marker} from "react-native-maps";
import * as Location from 'expo-location';
import ViewRoute from "../components/viewRoute";
import { useState } from "react";
import GlobalStyles from "../assets/styles";

export default function HomeScreen()
{
    const [showRoutes,setShowRoute]=useState(true);
    
    return(
        <View style={GlobalStyles.mapContainer}>
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
            
            { showRoutes? <ViewRoute/>:null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },
    loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  });