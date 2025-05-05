import { StyleSheet } from "react-native";
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
          profilecontainer: {
            padding: 16,
            backgroundColor: '#fff',
            flex: 1,
          },
          profileheading: {
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 16,
            marginBottom: 8,
          },
       
})

export default GlobalStyles;