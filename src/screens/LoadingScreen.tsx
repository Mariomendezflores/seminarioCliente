import React from "react";
import { View,ActivityIndicator } from "react-native";
import MyColors from "../color/MyColors";
export const LoadingScreen=()=>{
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
            
        }>
            <ActivityIndicator 
                size={100}
                color={MyColors.backgroundButtons}
            >

            </ActivityIndicator>
        </View>
    );

}