import React,{Component} from "react";
import { View,Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Productos from "./Productos";
import Usuarios from "./Usuarios";
const Tab = createMaterialTopTabNavigator();
class GestionAdmin extends Component
{
    render()
    {
        return <Tab.Navigator 
        
        >
        <Tab.Screen name="Productos" component={Productos} />
        <Tab.Screen name="Usuarios" component={Usuarios} />
      </Tab.Navigator>
    }
}
export default GestionAdmin;