import { View, FlatList, Text ,ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import GlobalStyles from "../assets/styles";
export default function ViewRoute()
{ 
   
    const route={
    "pickupLocations": [
      {
        "locationName": "House No. 123, Street 4, Soan Garden, Islamabad",
        "coordinates": {
          "latitude": 33.6012,
          "longitude": 73.1170
        },
        "pickupTime": "20:10"
      },
      {
        "locationName": "House No. 45, Street 9, Jinnah Garden, Islamabad",
        "coordinates": {
          "latitude": 33.5675,
          "longitude": 73.1105
        },
        "pickupTime": "20:12"
      },
      {
        "locationName": "House No. 77, Street 2, PWD Housing Society, Islamabad",
        "coordinates": {
          "latitude": 33.5829,
          "longitude": 73.1023
        },
        "pickupTime": "20:15"
      },
      {
        "locationName": "House No. 301, Block A, Gulberg Greens, Islamabad",
        "coordinates": {
          "latitude": 33.6294,
          "longitude": 73.1585
        },
        "pickupTime": "20:18"
      },
      {
        "locationName": "House No. 89, Street 11, Naval Anchorage, Islamabad",
        "coordinates": {
          "latitude": 33.5417,
          "longitude": 73.0947
        },
        "pickupTime": "20:20"
      }
    ]
  }
  

    return(
       <>
        <View style={GlobalStyles.viewRouteContainer}>
        <View style={GlobalStyles.viewRouteHeader}>
        <Text style={GlobalStyles.viewRouteHeaderText}>View Stops and Timings</Text>
        </View>
        <Text>Bus Stops</Text>
        <FlatList data={route.pickupLocations}
            renderItem={
                ({item})=>{
                    return(<><Text>{item.locationName}</Text><Text>{item.pickupTime}</Text></>)
                    }}/>
        </View>

       </>
    )
}