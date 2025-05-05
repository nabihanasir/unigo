import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import GlobalStyles from '../assets/styles';

const InputField = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={GlobalStyles.InputContainer}>
      <TextInput
        style={GlobalStyles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default InputField;
