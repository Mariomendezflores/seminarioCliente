import React,{Component} from "react";
import { View,Text,StyleSheet } from "react-native";
import MyColors from "../../color/MyColors";
class AgendaNegociacion extends Component
{
    render()
    {
        return<View style={styles.container}>
                <Text>
            Agenda de negociacion
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
export default AgendaNegociacion;