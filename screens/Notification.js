import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import NotificationCard from '../components/NotificationCard.js';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles from "../assets/styles";

const NotificationScreen = () => {
  const todayNotifications = [
    { icon: '📍', message: 'End of Route: "Route completed. Thank you for your service today."', time: '6:30 PM' },
    { icon: '🛣️', message: 'New Route Assigned: "A new route has been assigned. Please check your app for details."', time: '6:20 AM' },
    { icon: '🔄', message: 'Route Change: "Your route has been updated. Please review the new route details."', time: '6:15 PM' },
    { icon: '🚨', message: 'Delay Notification: "Expect delays due to traffic. Please inform passengers accordingly."', time: '4:25 PM' },
    { icon: '🧍', message: 'Passenger Boarded: "Student has boarded the bus. Continue to the next stop."', time: '8:00 AM' },
    { icon: '✅', message: 'Route Confirmation: "Your route has been confirmed. Please start your journey."', time: '7:30 AM' },
  ];

  const yesterdayNotifications = [
    { icon: '📍', message: 'End of Route: "Route completed. Thank you for your service today."', time: '6:30 PM' },
    { icon: '🛣️', message: 'New Route Assigned: "A new route has been assigned. Please check your app for details."', time: '6:20 AM' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Today</Text>
      {todayNotifications.map((item, index) => (
        <NotificationCard
          key={`today-${index}`}
          iconType={item.icon}
          message={item.message}
          time={item.time}
        />
      ))}

      <Text style={styles.sectionTitle}>Yesterday</Text>
      {yesterdayNotifications.map((item, index) => (
        <NotificationCard
          key={`yesterday-${index}`}
          iconType={item.icon}
          message={item.message}
          time={item.time}
        />
      ))}
    </ScrollView>
  );
};
export default Notification;