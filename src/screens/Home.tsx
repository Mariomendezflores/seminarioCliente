import React,{Component} from "react";
import { View,Text,StyleSheet,TouchableHighlight,Button } from "react-native";
import MySimpleButton from "../utilComponents/MySimpleButton";
import Icons from "react-native-vector-icons/FontAwesome"
import MyColors from "../color/MyColors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Clients from "./Clients";
import Order from "./Orders";
import Report from "./Reports";
import NavigationAdmin from "./NavegacionAdmin/NavigationAdmin";
import { NavigationContainer } from "@react-navigation/native";
import GestionAdmin from "./NavegacionAdmin/NavigationAdmin";
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
    goLogin()
    {   
      this.props.navigation.navigate("LOGIN");
    }
    render()
   {
        return <NavigationContainer independent={true}>
              <Tab.Navigator 
                screenOptions={({route})=>({
                  tabBarIcon:({focused,color,size})=>{
                      let iconName;
                      switch(route.name){
                          case'Clientes':{
                              if(focused)
                                return<Icons name="users" size={23}></Icons>
                              else
                                return<Icons name="users" size={23}></Icons>
                          }
                          case 'Pedidos':{
                            if(focused)
                              return<Icons name="list-ol" size={23}></Icons>
                            else
                              return<Icons name="list-ol" size={23}></Icons>
                          }
                          case 'Reportes':{
                            if(focused)
                              return<Icons name="table" size={23}></Icons>
                            else
                              return<Icons name="table" size={23}></Icons>
                          }
                          case 'Gestion':{
                            if(focused)
                              return<Icons name="table" size={23}></Icons>
                            else
                              return<Icons name="table" size={23}></Icons>
                          }
                      }
                  }
                })}
                  >
                  
                  <Tab.Screen name="Clientes" component={Clients} />
                  <Tab.Screen name="Pedidos" component={Order} />
                  <Tab.Screen name="Reportes" component={Report} />
                  <Tab.Screen name="Gestion" component={GestionAdmin} />
                </Tab.Navigator>
              </NavigationContainer>
              

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
    },
    container:
    {
      flex:1
    }
  });
export default Home;