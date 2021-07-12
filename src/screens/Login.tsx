import React,{Component} from "react";
import { View,Text,StyleSheet,TouchableHighlight,TextInput } from "react-native";
import MySimpleButton from "../utilComponents/MySimpleButton";
import vectorIcons from "react-native-vector-icons/Entypo"
import MyColors from "../color/MyColors";
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import {NavigationScreenProp} from 'react-navigation'
import FormTextComponent from "../utilComponents/FormTextComponent";
import { resolvePreset } from "@babel/core";
import axios from 'axios';

import { onChange, Value } from "react-native-reanimated";
import { Keyboard } from "react-native";
import { ScreenStackProps } from "react-native-screens";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { Alert } from "react-native";
import { LoadingScreen } from "./LoadingScreen";
const Stack = createStackNavigator();
/* interface myProps{
    navigation:NavigationScreenProp<any,any>
} */
interface Roles{
  _id:string,
  name:string,
  urn?:string,
  method:string
}
interface credenciales{
  email:string,
  username:string,
  userId:string,
  userRol:Array<Roles>,
  token:string
};
interface Props extends StackScreenProps<any,any>
{

}
     
class Login extends Component<any,any>
{
  
    constructor(props:any)
    {
        super(props);
        
    }
    async login()
    {
      
      //let result= await    
    }
    onClickButton()
    {
        this.props.navigation.navigate('LOGIN');
    }
    goToHome()
    {
        this.props.navigation.navigate('HOME',{msn:"entrando como admin"});
    }
    render()
   {
    
        return <View style={styles.mainContainter}>
                
                <TextInput style={styles.inputStyle} placeholder="Usuario"/>
                <TextInput style={styles.inputStyle} placeholder="Contraseña"/>
                <MySimpleButton icoName="login" title="Login" inClick={()=>{this.goToHome()}}></MySimpleButton>
            </View> 
    }
}

const styles = StyleSheet.create({
    mainContainter:{
      alignItems:"center",
      backgroundColor:MyColors.backgroundScreens,
      flex:1,
      justifyContent:"center",
      flexDirection:"column"
      
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
    },
    inputStyle:{
      borderWidth:4,
      borderColor:MyColors.backgroundButtons,
      height:50,
      paddingHorizontal:10,
      borderRadius:10,
      width:200,
      marginBottom:10
    }
  });
  
export default Login;