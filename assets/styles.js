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
          viewRouteContainer:{
            flex:1,
            position: 'absolute',
            backgroundColor:'#EFE0B5',
            width:"80%",
            alignSelf:'center',
            borderWidth:0,
            borderRadius:30,
          
          },
          viewRouteHeader:{
            borderRadius:30,
            borderBottomEndRadius:0,
            borderBottomLeftRadius:0,
            alignItems:'center',
            padding:10,
            backgroundColor:'#F2B749',
          },
          viewRouteTimeText:{
          
          },
          viewRouteLocationText:{},
          viewRouteHeaderText:{
          fontSize:20,
          color:'#fff'
          },
          mapContainer:{
            flex: 1 
          },
          map:{ 
            flex: 1
          },
})

export default GlobalStyles;