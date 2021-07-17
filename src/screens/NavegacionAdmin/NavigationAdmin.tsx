import React,{Component} from "react";
import { View,Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Productos from "./Productos";
import Usuarios from "./Usuarios";
import { Cuenta } from "./Cuenta";
import ListaProductos from "../Productos/listaProductos";
const Tab = createMaterialTopTabNavigator();
class GestionAdmin extends Component
{
    render()
    {
        return <Tab.Navigator 
        
        >
        <Tab.Screen name="Productos" component={ListaProductos} />
        <Tab.Screen name="Usuarios" component={Usuarios} />
        <Tab.Screen name="Cuenta" component={Cuenta} />
      </Tab.Navigator>
    }
}
export default GestionAdmin;