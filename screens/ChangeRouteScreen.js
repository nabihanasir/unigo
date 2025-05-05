import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import GlobalStyles from '../assets/styles';

const ChangeRoutesScreen = () => {
  const [boardingPoint, setBoardingPoint] = useState('');
  const [busNumber, setBusNumber] = useState('');
  const [busId, setBusId] = useState('');

  const handleSubmit = () => {
    console.log('Request Submitted', { boardingPoint, busNumber, busId });
  };

  return (
    <SafeAreaView style={GlobalStyles.RouteContainer}>
      <Text style={GlobalStyles.RouteTitle}>Change Routes</Text>

      <Text style={GlobalStyles.RouteLabel}>Your Boarding Point</Text>
      <InputField placeholder="Enter your boarding point" value={boardingPoint} onChangeText={setBoardingPoint} />

      <Text style={GlobalStyles.RouteLabel}>Bus Number</Text>
      <InputField placeholder="Enter bus number" value={busNumber} onChangeText={setBusNumber} />

      <Text style={GlobalStyles.RouteLabel}>Bus ID Number</Text>
      <InputField placeholder="Enter bus ID number" value={busId} onChangeText={setBusId} />

      <PrimaryButton title="REPORT REQUEST" onPress={handleSubmit} />
    </SafeAreaView>
  );
};



export default ChangeRoutesScreen;
