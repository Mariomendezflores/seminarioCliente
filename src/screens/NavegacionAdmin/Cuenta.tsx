import React, { useEffect,Component } from "react";
import { useContext } from "react";
import { View,StyleSheet,Button,Text } from "react-native";
import MyColors from "../../color/MyColors";
import { AuthContext } from "../../context/AuthContext";
import MySimpleButton from "../../utilComponents/MySimpleButton";
import {StackScreenProps} from '@react-navigation/stack'
import Login from '../Login'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerProps } from "@react-navigation/native";
import { AuthState } from "../../context/AuthReducer";
interface Props extends StackScreenProps<any,any>
{

}
export class Cuenta extends Component<any,any>{
  constructor(props:any)
  {
    super(props);
    //const {user,logout,authState,token}=useContext(AuthContext);
  }
  render()
  { 
    return(
      <View style={style.container}>
          <Text>
            este es la data
           {/*  {JSON.stringify(user,null,10)}
            {}
            {console.log(user)} */}
          </Text>
          <MySimpleButton
          icoName='log-out'
          title='Cerrar Cesion'
          inClick={()=>{}}
          >

          </MySimpleButton>
      </View>  
    );

  }
}
const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:MyColors.backgroundScreens,
        
    },
});