import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import MyColors from "../color/MyColors";
class Order extends Component
{
    render()
    {
        return <View style={styles.container}> 
            <Text>
                pantalla de ordenes
            </Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor:MyColors.backgroundScreens,
        flex:1
    }
});
export default Order;