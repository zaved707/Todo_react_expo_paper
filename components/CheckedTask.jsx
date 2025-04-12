import { View ,Text,TouchableOpacity} from "react-native"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react'
import { useTheme } from "react-native-paper"
const CheckedTask=(props)=>{
   theme=useTheme();
    return (
       <TouchableOpacity activeOpacity={0.8}>
        <View style={{display:'flex' , alignItems: 'center',flexDirection:'row', backgroundColor: theme.colors.onBackground, margin: 10, padding: 10,  borderRadius: 10}}>
        <MaterialIcons name="check-circle" size={24} color="black" />
          <Text style={{fontSize: 20, marginLeft:10, width:'80%'}}>{props.text}</Text>
          
         
  
        </View>
        </TouchableOpacity>
    )
}
export default CheckedTask;