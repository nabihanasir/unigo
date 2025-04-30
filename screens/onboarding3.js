import { View ,Image, Text} from "react-native";
import LargeButton from '../components/button';
import GlobalStyles from "../assets/styles";
export default function onboarding3(){
    return(
        <>
        <View style={GlobalStyles.onboardingContainer}>
            <Text style={GlobalStyles.onboardingTitle}>Welcome To Uni-Go</Text>
            <View style= { GlobalStyles.onboardingImageContainer}>
            <Image  style={GlobalStyles.onboardingImage} source = {require('./../assets/optional3.png')} ></Image>
            </View>
            <Text style={GlobalStyles.onboardingDescription}>
            Thank you for choosing UniGo for{"\n"}your family peace of mind.
            </Text>
              <LargeButton text = 'Get Started'></LargeButton>
        </View>
        
        </>
    )
}