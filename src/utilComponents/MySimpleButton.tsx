import React,{Component} from "react";
import {View,Text,TouchableHighlight,StyleSheet} from "react-native"
import MyColors from "../color/MyColors";
import Icon from "react-native-vector-icons/FontAwesome"
 
interface MyProps{
    title:string,
    onPress:Function,
    icoName:string
}
class MySimpleButton extends Component<MyProps, any>
{
    constructor(props:any)
    {
        super(props);
    }
    clickOnButton()
    {
        this.props.onPress();
    }
    render(){
        return <TouchableHighlight style={styles.textContainer}> 
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
        marginBottom:10
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