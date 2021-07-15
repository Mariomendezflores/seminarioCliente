import axios from "axios";
import React,{Component} from "react";
import { View,Text,StyleSheet,ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import MyUrls from "../../api/ApiUrls";
import { dataVendedor1 } from "../../api/dataAux";
import MyColors from "../../color/MyColors";
interface MyState{
    nombre?:string,
    apellidos?:string,
            email?:string,
            telefono?:string,
            ci?:string,
            zona?:string,
            calleNumero?:string,
            tipoCliente?:string
            clienteRegular?:boolean,
            clientePotencial?:boolean,
            probabilidadCaptacion?:number,
            ubicacionLong?:string,
            ubicacionLat?:string,
            estadoCliente?: boolean,
            pathavatar?:string,
            uriavatar?:string
}
class ClienteNuevoPotencial extends Component<any,MyState>
{
    constructor(props:any)
    {
        super(props);
        this.state={
            
                nombre:'',
                apellidos:'',
                email:'',
                telefono:'',
                ci:'',
                zona:'',
                calleNumero:'',
                clientePotencial:true
        }
    }
    async sendData()
    {
        
        var url=MyUrls.apiUrl+'/api/clientes/'+dataVendedor1._id;
        console.log(url);
        const newCliente=await axios.post(url,this.state);
        this.props.navigation.push('Clientes Potenciales');
    }
    render()
    {
        return  <ScrollView ref={this.props.scrollRef}>{
        <View style={styles.container}> 
            <TextInput
                style={styles.inputContainer}
                label="Nombre"
                onChangeText={text => {
                    this.setState({
                        
                       
                            
                            nombre:text
                        
                    })
                }
                    }
            />
            <TextInput
            style={styles.inputContainer}
                label="Apellidos"
                onChangeText={text => {
                    this.setState({
                        
                        
                            
                            apellidos:text
                        
                    })
                }
                    }
            />
            <TextInput
            style={styles.inputContainer}
                label="Email"
                onChangeText={text => {
                    this.setState({
                        
                       
                            
                            email:text
                        
                    })
                }
                    }
            />
            <TextInput
            style={styles.inputContainer}
                label="Telefono"
                onChangeText={text => {
                    this.setState({
                        
                       
                            
                            telefono:text
                        
                    })
                }
                    }
            />
            <TextInput
            style={styles.inputContainer}
                label="CI"
                onChangeText={text => {
                    this.setState({
                        
                      
                            
                            ci:text
                        
                    })
                }
                    }
            />
            <TextInput
            style={styles.inputContainer}
                label="Zona"
                onChangeText={text => {
                    this.setState({
                        
                   
                            
                            zona:text
                        
                    })
                }
                    }
            />
            <TextInput
            style={styles.inputContainer}
                label="Calle Y Numero"
                onChangeText={text => {
                    this.setState({                   
                       
                            
                            calleNumero:text
                        
                    })
                }
                    }
            />

            <Button icon="camera" mode="contained" onPress={() => {
                this.sendData();
            }}>
                Press me
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
export default ClienteNuevoPotencial;
