import { TouchableOpacity,Text} from "react-native";
import GlobalStyles from "../assets/styles";
export default function LargeButton(props){
    return( <TouchableOpacity style={GlobalStyles.LargeButton} onPress={props.onPress}>
        <Text style={GlobalStyles.text}>{props.text}</Text>
     </TouchableOpacity>
     )
   
}
   


