import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import GlobalStyles from "../assets/styles";
import { getAllRoutes } from '../functionalities/routefunctions';

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
    <SafeAreaView style={styles.screenContainer}>
      <View style={GlobalStyles.viewRouteHeader}>
        <Text style={GlobalStyles.viewRouteHeaderText}>View Stops and Timings</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#F2B749" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={routes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item, index }) => (
            <View style={styles.routeBlock}>
              <Text style={GlobalStyles.viewRouteSubHeader}>Route {index + 1}</Text>
              {item.pickupLocations?.map((stop, idx) => (
                <View key={idx} style={GlobalStyles.viewRouteItem}>
                  <Text style={GlobalStyles.viewRouteLocation}>{stop.locationName}</Text>
                  <Text style={GlobalStyles.viewRouteTime}>Pickup: {stop.pickupTime}</Text>
                </View>
              ))}
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  routeBlock: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
  },
});
