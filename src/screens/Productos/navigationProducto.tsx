import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import MyColors from "../../color/MyColors";
import { createStackNavigator } from '@react-navigation/stack';
/* import ClienteNuevo from "./NuevoCLiente";
import DetalleCliente from "./DetalleCliente";
import ClientesRegulares from "./ClientesRegulares";

import ClienteNuevoPotencial from "./NuevoClientePotencial"; */
import ProductoNuevo from "./nuevoProducto";
import ListaProductos from "./listaProductos";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

class NavigationProducto extends Component
{
    render()
    {
        return <NavigationContainer independent={true}>
                    <Stack.Navigator 
                    screenOptions={{
                    
                    }}
                >
                    <Stack.Screen  name="Listar Productos" component={ListaProductos} options={{headerShown: false}}/>
                    <Stack.Screen  name="Nuevo Producto" component={ProductoNuevo}/>
                    
                </Stack.Navigator>
       </NavigationContainer>
    }
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor:MyColors.backgroundScreens,
        flex:1
    }
});
export default NavigationProducto;