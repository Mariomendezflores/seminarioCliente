import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import MyColors from "../../color/MyColors";
import { createStackNavigator } from '@react-navigation/stack';
import ClienteNuevo from "./NuevoCLiente";
import DetalleCliente from "./DetalleCliente";
import ClientesRegulares from "./ClientesRegulares";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

class NavigationCliente extends Component
{
    render()
    {
        return <NavigationContainer independent={true}>
                    <Stack.Navigator 
                    screenOptions={{
                    
                    }}
                >
                    <Stack.Screen  name="Clientes Regulares" component={ClientesRegulares} options={{headerShown: false}}/>
                    <Stack.Screen  name="Nuevo Cliente" component={ClienteNuevo}/>
                    <Stack.Screen name='Detalle Cliente' component={DetalleCliente}></Stack.Screen>
                    
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
export default NavigationCliente;