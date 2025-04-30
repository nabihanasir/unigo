import { View ,Image, Text} from "react-native";
import LargeButton from '../components/button';
import GlobalStyles from "../assets/styles";

export default function onboarding1(){
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
            <LargeButton text = 'Next'></LargeButton>
        </View>
        </>
    )
}