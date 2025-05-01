import { View ,Image, Text} from "react-native";
import LargeButton from '../components/button';
import GlobalStyles from "../assets/styles";
export default function onboarding2({navigation}){
    return(
        <>
        <View style={GlobalStyles.onboardingContainer}>
            <Text style={GlobalStyles.onboardingTitle}>Welcome To Uni-Go</Text>
            <View style= { GlobalStyles.onboardingImageContainer}>
            <Image  style={GlobalStyles.onboardingImage} source = {require('./../assets/optional2.png') }></Image>
         </View>
            <Text style={GlobalStyles.onboardingDescription}>
            Track your services in real-time{"\n"}for a safer, worry-free commute.
            </Text>
              <LargeButton text = 'Next' onPress={()=>navigation.navigate('Onboarding3')}></LargeButton>
        </View>
        </>
    )
}