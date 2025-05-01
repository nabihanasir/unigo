import { View ,Image, Text} from "react-native";
import LargeButton from '../components/button';
import GlobalStyles from "../assets/styles";
import React from "react";


export default function onboarding1({navigation}){
    return(
        <>
        <View style={GlobalStyles.onboardingContainer}>
            <Text style={GlobalStyles.onboardingTitle}>Welcome To Uni-Go</Text>
            <View style= { GlobalStyles.onboardingImageContainer}>
            <Image  style={GlobalStyles.onboardingImage}  source={require('./../assets/optional1.png')}></Image>
            </View>
            <Text style={GlobalStyles.onboardingDescription}>
                Welcome to a new era of university {"\n"}services safety with UniGo. Let's embark {"\n"}on this journey together!
            </Text> 
            <LargeButton text = 'Next' onPress={()=>navigation.navigate('Onboarding2')}></LargeButton>
        </View>
        </>
    )
}