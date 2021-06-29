//import { Component } from "react";
import React,{Component} from "react";
import {View,Text,StyleSheet,TouchableHighlight} from "react-native"
import MyColors from "./src/color/MyColors";
import MySimpleButton from "./src/utilComponents/MySimpleButton";
import vectorIcons from "react-native-vector-icons/FontAwesome"
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./src/screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import Saludo from "./src/screens/Home";
const Stack = createStackNavigator();

class App extends Component<any,any>
{
  constructor(props:any)
  {
    super(props);
  }
  render(){
    return  <NavigationContainer >
                <Stack.Navigator 
                 screenOptions={{
                   /* cardStyle:{
                     backgroundColor:'red'
                   } */
                 }}
                >
                  
                  <Stack.Screen  name="LOGIN" component={Main}/>
                  <Stack.Screen name='HOME' component={Saludo}></Stack.Screen>
                  
                </Stack.Navigator>
                
              </NavigationContainer>
              
            
            

    {/* <View style={styles.mainContainter}>
      <MySimpleButton icoName="user" title="Vendedor" onPress={()=>{this.onClickButton()}}></MySimpleButton>
      <MySimpleButton icoName="user-md" title="Admin" onPress={()=>{this.onClickButton()}}></MySimpleButton>
      
    </View> */}
  }
}
const styles = StyleSheet.create({
  mainContainter:{
    alignItems:"center",
    backgroundColor:MyColors.backgroundScreens,
    flex:1,
    justifyContent:"center"
  },
  textContainer:{
    alignContent:"center",
    backgroundColor:MyColors.backgroundButtons,
    padding:10,
    borderRadius:10,
    elevation:10,
  },
  textStyle:{
    fontSize:20,
    textAlign:"center",
    alignContent:"center",
    color:MyColors.texts
  }
});
export default App;