import axios from "axios";
import React,{Component} from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import MyUrls from "../../api/ApiUrls";
import { dataVendedor1 } from "../../api/dataAux";
import MyColors from "../../color/MyColors";
interface MyState{
    productoName?: string,
  registerdate?: Date,
  precio?:string,
  stock?:string,
  disponible?:boolean,
  uriImagen?: string,
  pathImagen?: string,
}
class ProductoNuevo extends Component<any,MyState>
{
    constructor(props:any)
    {
        super(props);
        this.state={
            
                productoName:'',
                precio:'',
                stock:'',
                disponible:true,
                uriImagen:'',
                pathImagen:''
        }
    }
    async sendData()
    {
        
        var url=MyUrls.apiUrl+'/api/productos'
        //console.log(url);
        const newProducto=await axios.post(url,this.state);
        //console.log("respuesta del servidor es: ",newCliente);
        this.props.navigation.push('Listar Productos');
    }
    render()
    {
        return  <ScrollView ref={this.props.scrollRef}>{
        <View style={styles.container}> 
            <TextInput
                style={styles.inputContainer}
                label="Nombre del producto"
                onChangeText={text => {
                    this.setState({
                        
                       
                            
                            productoName:text
                        
                    })
                }
                    }
            />
            <TextInput
            style={styles.inputContainer}
                label="Precio por unidad"
                onChangeText={text => {
                    this.setState({
                        
                        
                            
                            precio:text
                        
                    })
                }
                    }
            />
            <TextInput
            style={styles.inputContainer}
                label="Stock"
                onChangeText={text => {
                    this.setState({
                        
                       
                            
                            stock:text
                        
                    })
                }
                    }
            />
            
            <Button icon="camera" mode="contained"
            color={MyColors.backgroundButtons}
            onPress={() => {
                this.sendData();
            }}>
                Guardar Producto
            </Button>

        </View>
        }</ScrollView>;
    }
}
const styles = StyleSheet.create({
    container:
    {
        backgroundColor:MyColors.labeles,
        flex:1,
        padding:7
    },
    inputContainer:
    {
        backgroundColor:MyColors.backgroundScreens,
        marginTop:5
    },
    buttonAdd:
    {
        backgroundColor:MyColors.backgroundButtons
    }
});
export default ProductoNuevo;