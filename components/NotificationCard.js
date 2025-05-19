import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const NotificationCard = ({ iconType, message, time }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        {/* Use emoji, image, or icon as per your need */}
        <Text style={styles.icon}>{iconType}</Text>
      </View>
      <View style={styles.messageWrapper}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fdbf00',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  messageWrapper: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
});

export default NotificationCard;
