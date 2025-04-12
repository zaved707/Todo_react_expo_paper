import { StyleSheet, Text, View,ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {React, useState} from "react"
import CheckedTask from './components/CheckedTask';
import UncheckedTask from './components/UnckeckedTask';
import {TextInput,PaperProvider, Divider,useTheme
} from 'react-native-paper';

import {Button, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { theme } from './assets/theme';
const theme2 = {
  
  // Specify custom property

  
    colors: {
      "primary": "rgb(255, 184, 101)",
      "onPrimary": "rgb(72, 42, 0)",
      "primaryContainer": "rgb(102, 61, 0)",
      "onPrimaryContainer": "rgb(255, 221, 186)",
      "secondary": "rgb(165, 200, 255)",
      "onSecondary": "rgb(0, 49, 95)",
      "secondaryContainer": "rgb(0, 71, 134)",
      "onSecondaryContainer": "rgb(212, 227, 255)",
      "tertiary": "rgb(255, 177, 194)",
      "onTertiary": "rgb(102, 0, 43)",
      "tertiaryContainer": "rgb(143, 0, 63)",
      "onTertiaryContainer": "rgb(255, 217, 223)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(31, 27, 22)",
      "onBackground": "rgb(235, 225, 217)",
      "surface": "rgb(31, 27, 22)",
      "onSurface": "rgb(235, 225, 217)",
      "surfaceVariant": "rgb(80, 69, 58)",
      "onSurfaceVariant": "rgb(212, 196, 181)",
      "outline": "rgb(157, 142, 129)",
      "outlineVariant": "rgb(80, 69, 58)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(235, 225, 217)",
      "inverseOnSurface": "rgb(53, 47, 42)",
      "inversePrimary": "rgb(135, 82, 0)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(42, 35, 26)",
        "level2": "rgb(49, 40, 28)",
        "level3": "rgb(56, 44, 31)",
        "level4": "rgb(58, 46, 32)",
        "level5": "rgb(62, 49, 33)"
      },
      "surfaceDisabled": "rgba(235, 225, 217, 0.12)",
      "onSurfaceDisabled": "rgba(235, 225, 217, 0.38)",
      "backdrop": "rgba(57, 47, 36, 0.4)"
    }
  }


export default function App() {
  const [tasks, setTasks]= useState([{
            task:'i have to bring rice today',
            uuid: 1,
            isCompleted: false
  }])
  
  const [text,setText]=useState("")
  const ttk= useTheme();
  return (
    <PaperProvider  theme={theme2}>
    <View style={  styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.text}> Today's Tasks</Text>
     
      </View>
      <ScrollView>
      {tasks.map((task, index) => (
         <UncheckedTask key={index.toString()} text={task.task} />
      ))}
      <UncheckedTask text='hello what are you who are you why do you exist my friend you should die and not ever come back here '/>
      <UncheckedTask text='hello what are you who are you why do you exist my friend you should die and not ever come back here '/>
      <UncheckedTask text='hello what are you who are you why do you exist my friend you should die and not ever come back here '/>
      <UncheckedTask text='hello what are you who are you why do you exist my friend you should die and not ever come back here '/>
      <UncheckedTask text='hello what are you who are you why do you exist my friend you should die and not ever come back here '/>
      <UncheckedTask text='hello what are you who are you why do you exist my friend you should die and not ever come back here '/>
      <UncheckedTask text='hello what are you who are you why do you exist my friend you should die and not ever come back here '/>
      </ScrollView>
      <View style={{display:'flex', flexDirection:'row'}}>
      <TextInput 
          style={{
            flex:2
           
          }} 
          label="task"
          value={text}
          onChangeText={text => setText(text)} />
      <Button labelStyle={{fontSize : 30}} mode='outlined' icon='send'style={{width:100,display: 'flex',paddingLeft: 35,alignItems:'flex-end' ,justifyContent:'space-evenly',fontSize: 20, borderRadius: 5}}></Button>
      </View>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: theme2.colors.background,
    padding: 10,
    overflow: 'hidden'
    
  },
  taskContainer:{
    backgroundColor: theme2.colors.primary
  }
  ,
  text:{
    color: theme2.colors.onBackground,
   
    
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    alignContent: 'center',
    borderRadius: 20,
    padding: 10,
    
  },
  button:{
    backgroundColor: theme.colors.tertiary,
    
    borderStyle: theme.colors.tertiary
  },
  textContainer: {
    backgroundColor:''
  }
});
