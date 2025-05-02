import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.header}>Help & Support</Text>

      <Text style={styles.subHeader}>Submit Feedback</Text>

      <TextInput
        style={styles.input}
        placeholder="Write Your Feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      <TouchableOpacity onPress={openFAQ}>
        <Text style={styles.faqLink}>Browse FAQ</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Question"
        value={question}
        onChangeText={setQuestion}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};


export default HelpScreen;
