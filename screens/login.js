import TextBox from './../components/textBox';
import { View , Text } from 'react-native';
export default function Login(text){
    return(
    <>
    <Text>Username</Text>
    <TextBox text= 'Enter your username' ></TextBox>
    <Text>Password</Text>
    <TextBox text= 'Enter your password' ></TextBox>
    </>
    )
}