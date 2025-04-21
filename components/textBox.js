import { View , TextInput, StyleSheet } from "react-native";
import React from "react";
export default function TextBox(props){
    return(
        <>
        <View style={styles.TextBox} >
        <TextInput  placeholder={props.text}></TextInput>
        </View>
        </>
    )
}
const styles=StyleSheet.create(
    {
        TextBox:
        {
           borderColor:"grey",
           borderWidth:1,
           borderRadius:20,
           padding:5,
           margin:10,
          
           

        }
    }
)