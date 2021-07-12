import React,{Component} from "react";
import { View,Text } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ClientesRegulares from "./CLientes/ClientesRegulares";
import ClientesPotenciales from "./CLientes/ClientesPotenciales";
import AgendaNegociacion from "./CLientes/AgendaNegociacion";
import NavigationCliente from "./CLientes/NavigationCliente";
const Tab = createMaterialTopTabNavigator();
class Clients extends Component
{
    render()
    {
        return <Tab.Navigator 
        
        >
        <Tab.Screen name="Clientes Regulares" component={NavigationCliente} />
        <Tab.Screen name="Clientes Potenciales" component={ClientesPotenciales} />
        <Tab.Screen name="Agenda De Negociacion" component={AgendaNegociacion} />
      </Tab.Navigator>
    }
}
export default Clients;