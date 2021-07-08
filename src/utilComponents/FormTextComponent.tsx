import React,{Component} from "react";
import {View,StyleSheet,TextInput} from "react-native"
import MyColors from "../color/MyColors";
import Icon from "react-native-vector-icons/FontAwesome"

interface MyProps{
    placeholder:string
}
class FormTextComponent extends Component<MyProps, any>
{
    constructor(props:MyProps)
    {
        super(props);
    }
    
    render(){
        return <View>
                    <TextInput style={styles.inputStyle} placeholder={this.props.placeholder} secureTextEntry>

                    </TextInput>
        </View>
    }
}
const styles = StyleSheet.create({
    inputStyle:{
        borderWidth:4,
        borderColor:MyColors.backgroundButtons,
        height:50,
        paddingHorizontal:10,
        borderRadius:10,
        width:200,
        marginBottom:10
    },
    viewStyle:{
        backgroundColor:MyColors.iconos
    }
});
export default FormTextComponent;