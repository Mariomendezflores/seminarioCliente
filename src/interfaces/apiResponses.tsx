export interface SimpleCliente{

    _id:string,
    nombre:string,
    apellidos:string,
            email:string,
            telefono:string,
            ci:string,
            zona:string,
            calleNumero:string,
            tipoCliente:string
            clienteRegular:boolean,
            clientePotencial:boolean,
            probabilidadCaptacion:number,
            ubicacionLong?:string,
            ubicacionLat?:string,
            estadoCliente?: boolean,
            pathavatar?:string,
            uriavatar?:string
}
export interface ClienteApiResponse{
    serverResponse:Array<SimpleCliente>
};
export interface ISimpleProducto {
    _id:string,
    productoName: string,
    registerdate?: Date,
    precio:string,
    stock:string,
    disponible?:boolean,
    uriImagen?: string,
    pathImagen?: string,
  }
  export interface IproductoApiResponse{
    serverResponse:Array<ISimpleProducto>
};