import React,{Component} from "react";
import { View,Text,StyleSheet,TouchableHighlight } from "react-native";
import MySimpleButton from "../utilComponents/MySimpleButton";
import vectorIcons from "react-native-vector-icons/FontAwesome"
import MyColors from "../color/MyColors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Clients from "./Clients";
import Order from "./Orders";
import Report from "./Reports";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
class Home extends Component<any,any>
{
    constructor(props:any)
    {
        super(props);
    }
    componentDidMount()
    {
        console.log(this.props);
    }
    render()
   {
        return <Tab.Navigator>
                  <Tab.Screen name="CLIENTES" component={Clients} />
                  <Tab.Screen name="PEDIDOS" component={Order} />
                  <Tab.Screen name="REPORTES" component={Report} />
                </Tab.Navigator>

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
export default Home;