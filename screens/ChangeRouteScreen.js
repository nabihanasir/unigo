import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import InputField from '../components/InputField';
import LargeButton from '../components/button';
import GlobalStyles from '../assets/styles';
import { createRoute } from '../functionalities/routefunctions';

const ChangeRoutesScreen = ({ navigation }) => {
  const [locationName, setLocationName] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const handleSubmit = async () => {
    if (!locationName || !pickupTime) {
      Alert.alert('Missing Fields', 'Please enter both location and time.');
      return;
    }

    const newRoute = {
      locationName,
      pickupTime
    };

    try {
      await createRoute(newRoute);
      Alert.alert('Success', 'Route submitted successfully!');
      setLocationName('');
      setPickupTime('');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.RouteContainer}>
      <Text style={GlobalStyles.RouteTitle}>Add Route Stop</Text>

      <Text style={GlobalStyles.RouteLabel}>Location Name</Text>
      <InputField
        placeholder="Enter pickup location"
        value={locationName}
        onChangeText={setLocationName}
      />

      <Text style={GlobalStyles.RouteLabel}>Pickup Time</Text>
      <InputField
        placeholder="Enter time (e.g. 20:10)"
        value={pickupTime}
        onChangeText={setPickupTime}
      />

      <LargeButton text="SUBMIT ROUTE" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default ChangeRoutesScreen;
