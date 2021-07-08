import React,{Component} from "react";
import {View,Text,TouchableHighlight,StyleSheet} from "react-native"
import MyColors from "../color/MyColors";
import Icon from "react-native-vector-icons/Entypo"
//import Icon from "react-native-vector-icons/AntDesign"
import vectorIcons from "react-native-vector-icons/Entypo"
 
interface MyProps{
    title:string,
    inClick:Function,
    icoName:string
}
class MySimpleButton extends Component<MyProps, any>
{
    constructor(props:MyProps)
    {
        super(props);
    }
    clickOnButton()
    {
        this.props.inClick();
    }
    render(){
        return <TouchableHighlight style={styles.textContainer} onPress={()=>{this.clickOnButton()}}> 
                    <View style={styles.buttonWithIcon}>
                        <View style={styles.iconContainer}>
                            <Icon name={this.props.icoName} size={30} color={MyColors.iconos}/>
                        </View>
                        <Text style={styles.textStyle}>
                            {this.props.title}
                        </Text> 
                    </View>
                </TouchableHighlight>
    }
}
const styles = StyleSheet.create({
    textContainer:{
        alignContent:"center",
        backgroundColor:MyColors.backgroundButtons,
        padding:10,
        borderRadius:10,
        elevation:10,
        marginBottom:10,
        marginTop:10
      },
      textStyle:{
        fontSize:20,
        textAlign:"center",
        alignContent:"center",
        color:MyColors.texts
      },
      buttonWithIcon:{
          flexDirection:"row"
      },
      iconContainer:
      {
          margin:4
      }
});
export default MySimpleButton;