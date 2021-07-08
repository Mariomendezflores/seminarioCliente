//import { Component } from "react";
import React,{Component, useContext} from "react";
import {View,Text,StyleSheet,TouchableHighlight} from "react-native"
import MyColors from "./src/color/MyColors";
import MySimpleButton from "./src/utilComponents/MySimpleButton";
import vectorIcons from "react-native-vector-icons/FontAwesome"
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";
import { LoadingScreen } from "./src/screens/LoadingScreen";
const Stack = createStackNavigator();

const AppState=({children}:any)=>{
  return(
    <AuthProvider>
      {console.log("este es el posible error :")}
        {children}
    </AuthProvider>
  );
};

/* class App extends Component<any,any>
{
  constructor(props:any)
  {
    super(props);
    
  }
  render(){
    const {authState}=useContext(AuthContext);
    if(authState==='verificando')
  {
    console.log(authState);
    return <LoadingScreen></LoadingScreen>
  }
    return  <NavigationContainer >
                <AppState>
                <Stack.Navigator 
                 screenOptions={{
                   
                 }}
                >
                  
                  <Stack.Screen  name="LOGIN" component={Login}/>
                  <Stack.Screen name='HOME' component={Home}></Stack.Screen>
                  
                </Stack.Navigator>
                </AppState>
              </NavigationContainer>
  }
} */
export const App=()=>{
          const {authState}=useContext(AuthContext);
          if(authState==='autenticado')
          {
              console.log("este es el authstate: "+authState);
              return <LoadingScreen></LoadingScreen>
          }

    return  <NavigationContainer >
                <AppState>
                <Stack.Navigator 
                 screenOptions={{
                   
                 }}
                >
                  
                  <Stack.Screen  name="LOGIN" component={Login}/>
                  <Stack.Screen name='HOME' component={Home}></Stack.Screen>
                  
                </Stack.Navigator>
                </AppState>
              </NavigationContainer>

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
export default App;