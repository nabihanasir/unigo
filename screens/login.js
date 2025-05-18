import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Stylesheet } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Alert } from "react-native";
import GlobalStyles from '../assets/styles';
import LargeButton from '../components/button';

export default function LoginScreen ({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function LoginButtonPress() {
        try {
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert("Success", "Logged in!");
        navigation.replace("Home");
        } catch (e) {
        Alert.alert("Error", e.message);
        }
    };

   return (
    <View style={GlobalStyles.loginComponentContainer}>
        <Text style={GlobalStyles.loginComponentTitle}>Login</Text>
        <TextInput
            style={GlobalStyles.loginComponentInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={GlobalStyles.loginComponentInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <LargeButton text ='Login' onPress={LoginButtonPress} />
        <LargeButton text ='Signup' onPress={()=>navigation.navigate('Signup')} />
    </View>
);

};
