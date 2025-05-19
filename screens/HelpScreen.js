import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity,  Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import GlobalStyles from "../assets/styles";
const HelpScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [question, setQuestion] = useState('');
  const BASE_URL = 'https://madassigmentnabihanasir-default-rtdb.firebaseio.com';

  const handleSubmit = async () => {
    if (!feedback.trim() && !question.trim()) {
      alert('Please enter feedback or a question.');
      return;
    }
    try {
      await axios.post(`${BASE_URL}/feedback.json`, {
        feedback,
        question,
      });
      alert('Thank you for your feedback!');
      setFeedback('');
      setQuestion('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback, please try again.');
    }
  };
  return (
    <View style={GlobalStyles.HelpScreenContainer}>
      <TouchableOpacity style={GlobalStyles.HelpScreenBackButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={GlobalStyles.HelpScreenHeader}>Help & Support</Text>

      <Text style={GlobalStyles.HelpScreenSubHeader}>Submit Feedback</Text>

      <TextInput
        style={GlobalStyles.HelpScreenInput}
        placeholder="Write Your Feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />


      <TextInput
        placeholder="Enter Your Question"
        value={question}
        onChangeText={setQuestion}
      />

      <TouchableOpacity style={GlobalStyles.HelpScreenSubmitButton} onPress={handleSubmit}>
        <Text style={GlobalStyles.HelpScreenSubmitText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};


export default HelpScreen;
