import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../assets/styles';

const PrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={GlobalStyles.PrimaryButton} onPress={onPress}>
      <Text style={GlobalStyles.PrimaryText}>{title}</Text>
    </TouchableOpacity>
  );
};


export default PrimaryButton;
