import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const welcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Trackspot</Text>
      <Image
        source={require('../assets/image.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>
        Thank you for being a part of Trackspot Driver. Let’s hit the road safely!
      </Text>

      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('nextScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
const {width}=Dimensions.get('window');
const styles=StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff',

    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    Image:{
        width:width*0.7,
        height: 200,
        marginBottom: 20,
    },
    description:{
            fontSize: 14,
            textAlign:'center',
            marginBottom:30,
            color: '#333',
        },
    pagination:{
        flexDirection:'row',
        marginBottom: 30,
    },
    dot:{
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        backgroundColor:'#ccc',
    },
    activeDot:{
        backgroundColor: '#f4c10f',
    },
    button:{
        backgroundColor:'#f4c10f',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    buttonText:{
        color:'#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    }
);
export default welcomeScreen;