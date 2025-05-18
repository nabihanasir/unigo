import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import GlobalStyles from "../assets/styles";
const HelpScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    
    console.log('Feedback:', feedback);
    console.log('Question:', question);
    
  };

  const openFAQ = () => {
    Linking.openURL('https://your-faq-link.com');
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

      <TouchableOpacity onPress={openFAQ}>
        <Text style={GlobalStyles.HelpScreenFaqLink}>Browse FAQ</Text>
      </TouchableOpacity>

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
