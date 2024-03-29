import React,{Component} from "react";
import { View,Text,StyleSheet, FlatList} from "react-native";
import MyColors from "../../color/MyColors";
import axios from "axios";
import { Appbar,List,Avatar,FAB } from 'react-native-paper';
import MyUrls from "../../api/ApiUrls";
//import { ClienteApiResponse, SimpleCliente } from "../../interfaces/apiResponses";
import { IproductoApiResponse,ISimpleProducto } from "../../interfaces/apiResponses";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

interface Mystate{
    clienteData:Array<ISimpleProducto>
}
interface imagenData{
    item:ISimpleProducto
}
class ListaProductos extends Component<any,Mystate>
{
    constructor(props:any)
    {
        super(props);
        this.state={
            clienteData:[]
        }
    }
    async componentDidMount()
    {
        const result:Array<ISimpleProducto> = await axios.get<IproductoApiResponse>(MyUrls.apiUrl+'/api/productos').then((item)=>{
            return item.data.serverResponse
        });
        this.setState({
            clienteData:result
        })
    }
    listIcon(param:imagenData)
    {
        var item:ISimpleProducto=param.item;
        if(item.uriImagen!=null)
        {
            var url = MyUrls.apiUrl+item.uriImagen;
            let dataPrecio="costo por unidad  "+item.precio+" bs.";
            //console.log(url);
            return <List.Item
                    title={item.productoName}
                    description={dataPrecio}
                    left={props => <Avatar.Image size={48} source={{uri:url}} />}
                />
        }
        else
        {
            return <List.Item
            title={item.productoName}
            description={item.precio}
            left={props => <List.Icon {...props} icon="incognito" />}
          />
        }
    }
    render()
    {
        return <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={()=>{}} />
                <Appbar.Content title="Title" subtitle="Subtitle" />
                <Appbar.Action icon="magnify" onPress={()=>{}} />
                <Appbar.Action icon="dots-vertical" onPress={()=>{}} />
            </Appbar.Header>
        <View style={styles.itemContainer}>
            <FlatList
                style={styles.itemContainer}
                data={this.state.clienteData}
                renderItem={({item})=>(
                    <this.listIcon item={item}/>
                )}

                keyExtractor={(item)=>item._id}
                />
        </View >
        <FAB
            style={styles.fab}
            small={false}
            icon="plus"
            onPress={() => {
                this.props.navigation.push('Nuevo Producto');
            }}
  />
    </View>
    }
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor:MyColors.backgroundScreens,
        flex:1
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:MyColors.backgroundButtons
      },
    itemContainer:
    {
        backgroundColor:MyColors.iconos,
        borderColor:MyColors.backgroundButtons,
        borderRadius:10
    }
});
export default ListaProductos;