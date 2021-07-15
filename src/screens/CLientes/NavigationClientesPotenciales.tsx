import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import MyColors from "../../color/MyColors";
import { createStackNavigator } from '@react-navigation/stack';
import ClienteNuevo from "./NuevoCLiente";
import DetalleCliente from "./DetalleCliente";
import ClientesRegulares from "./ClientesRegulares";
import { NavigationContainer } from '@react-navigation/native';
import ClienteNuevoPotencial from "./NuevoClientePotencial";
import ClientesPotenciales from "./ClientesPotenciales";
const Stack = createStackNavigator();

class NavigationClientePotencial extends Component
{
    render()
    {
        return <NavigationContainer independent={true}>
                    <Stack.Navigator 
                    screenOptions={{
                    
                    }}
                >
                    <Stack.Screen  name="Clientes Potenciales" component={ClientesPotenciales} options={{headerShown: false}}/>
                    <Stack.Screen  name="Nuevo Cliente Potencial" component={ClienteNuevoPotencial}/>
                    
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
export default NavigationClientePotencial;