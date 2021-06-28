import React,{Component} from "react";
import { View,Text,StyleSheet,TouchableHighlight,Button } from "react-native";
import MySimpleButton from "../utilComponents/MySimpleButton";
import vectorIcons from "react-native-vector-icons/FontAwesome"
import MyColors from "../color/MyColors";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationScreenProp} from 'react-navigation'
const Stack = createStackNavigator();
/* interface myProps{
    navigation:NavigationScreenProp<any,any>
} */
class Main extends Component<any,any>
{
    constructor(props:any)
    {
        super(props);
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
                <MySimpleButton icoName="user" title="Vendedor" inClick={()=>{this.onClickButton()}}></MySimpleButton>
                <MySimpleButton icoName="user-md" title="Admin" inClick={()=>{this.goToHome()}}></MySimpleButton>
            </View> 
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
export default Main;