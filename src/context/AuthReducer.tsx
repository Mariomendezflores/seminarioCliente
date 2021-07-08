import userInterface from "../interfaces/userInterface";
 export interface AuthState{
     user:userInterface|null;
     token:string | null;
     errorMessage:string;
     authState:'autenticado'|'verificando'|'no-autenticado';
     
 }

 type authAction=
    | {type:'singIn',payload:{token:string|any,user:userInterface|any}}
    | {type:'addError',payload:string}
    | {type:'RemoveError'}
    | {type:'logout'}
    | {type:'cesionTerminada'}
    | {type:'cesionIniciada',payload:{user:userInterface}}
export  const authReducer = (state:AuthState,action:authAction):AuthState =>{
    switch (action.type) {
        case 'addError':
            return{
                ...state,
                authState:'no-autenticado',
                user:null,
                token:null,
                errorMessage:action.payload

            }
            break;
        case 'RemoveError':
            return{
                ...state,
                errorMessage:''
            }
        case 'singIn':
            return {
                ...state,
                authState:'autenticado',
                token:action.payload.token,
                errorMessage:"",
                user:action.payload.user
            }
        case 'logout':
            return{
                ...state,
                token:null,
                user:null,
                authState:'no-autenticado'
            }
        case 'cesionTerminada':
            return {
                ...state,
                token:null,
                user:null,
                authState:'no-autenticado'
            }
        case 'cesionIniciada':
            return{
                ...state,
                authState:'autenticado',
                user:action.payload.user
            }
        default:
            return state;
    }
}
export default authReducer;