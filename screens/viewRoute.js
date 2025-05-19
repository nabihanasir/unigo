import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import GlobalStyles from "../assets/styles";
import { getAllRoutes } from '../functionalities/routefunctions'
export default function ViewRoute() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRoutes = async () => {
    try {
      const data = await getAllRoutes();
      setRoutes(data);
    } catch (error) {
      console.error("Failed to fetch routes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <View style={GlobalStyles.viewRouteContainer}>
      <View style={GlobalStyles.viewRouteHeader}>
        <Text style={GlobalStyles.viewRouteHeaderText}>View Stops and Timings</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#F2B749" />
      ) : (
        <FlatList
          data={routes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text style={GlobalStyles.viewRouteSubHeader}>Route</Text>
              <FlatList
                data={item.pickupLocations}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={GlobalStyles.viewRouteItem}>
                    <Text style={GlobalStyles.viewRouteLocation}>{item.locationName}</Text>
                    <Text style={GlobalStyles.viewRouteTime}>Pickup: {item.pickupTime}</Text>
                  </View>
                )}
              />
            </View>
          )}
        />
      )}
    </View>
  );
}
