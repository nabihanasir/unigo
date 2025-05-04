import { StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const GlobalStyles = StyleSheet.create({
    LargeButton: {
        backgroundColor: '#F2B749',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
        alignItems: 'center',
        weight:'90%',
        marginTop: 73,
      },
      onboardingImage: {
            resizeMode:'cover',
            height:'340',
            width:'290'
      },
      onboardingImageContainer: {
     
        alignItems:'center',
        justifyContent:'center'

  },
        onboardingContainer: {
            backgroundColor: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
          },
          onboardingTitle: {
            fontSize: 35,
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#333333'
          },
          onboardingDescription: {
            fontSize: 18,
            textAlign: 'center',
            color: '#333333' ,
            marginTop: 5,
            columnGap:3,
            fontWeight: 20,
          },
          onboardingText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
          
          },
          NotificationContainer: {
            padding: 20,
            backgroundColor: '#fff',
            flex: 1,
          },
          NotificationHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          },
          NotificationHeaderText: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          NotificationSectionTitle: {
            fontSize: 16,
            fontWeight: '700',
            marginTop: 20,
            marginBottom: 10,
          },
          HelpScreenContainer: {
            padding: 20,
            flex: 1,
            backgroundColor: '#fff',
          },
          HelpScreenBackButton: {
            marginBottom: 10,
          },
          HelpScreenHeader: {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20,
          },
          HelpScreenSubHeader: {
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 10,
          },
          HelpScreenInput: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 20,
            paddingHorizontal: 15,
            paddingVertical: 10,
            marginBottom: 15,
          },
          HelpScreenFaqLink: {
            color: '#00BCD4',
            fontWeight: 'bold',
            marginBottom: 10,
          },
          HelpScreenSubmitButton: {
            backgroundColor: '#F9B233',
            paddingVertical: 15,
            borderRadius: 30,
            alignItems: 'center',
          },
          HelpScreenSubmitText: {
            color: '#fff',
            fontWeight: 'bold',
          },
          
            RouteCntainer: {
              flex: 1,
              padding: 20,
              backgroundColor: '#fff',
            },
            RouteTitle: {
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: 20,
            },
            RouteLabel: {
              fontSize: 16,
              fontWeight: '500',
              marginTop: 10,
              marginBottom: 5,
            },
            
              PrimaryButton: {
                backgroundColor: '#f7a900',
                paddingVertical: 15,
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 20,
              },
              PrimaryText: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
              },
              

  InputContainer: {
    marginVertical: 10,
  },
  Input: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
            
})

export default GlobalStyles;