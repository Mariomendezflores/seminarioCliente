import React,{createContext} from 'react'
import { useReducer } from 'react';
import casaRealApi from '../api/casaReal';
import userInterface, { LoginData } from '../interfaces/userInterface'
import authReducer,{AuthState} from './AuthReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


type AuthContextProps = {
    authState:string;
    errorMessage:string;
    token:string|null|any;
    user:userInterface|null|any;
    singIn:(loginData:LoginData)=>void;
    logout:()=>void;
    removeError:()=>void;
    verificarLogeo:()=>void;
}

const initialState:AuthState={
    authState:'no-autenticado',
    user:null,
    token:null,
    errorMessage:""
}
export  const AuthContext = createContext({}as AuthContextProps);


export const AuthProvider = ({children}:any)=>{
    const [state,dispatch]= useReducer(authReducer,initialState);
    useEffect(()=>{
        verificarLogeo();
    },[]);
    const verificarLogeo=async()=>{
        const token=await AsyncStorage.getItem('token');
        const user=await AsyncStorage.getItem('usuario');
        console.log("este es el token despues de volvel a entrar: "+token);
        if(!token)
        {
            return dispatch({type:'cesionTerminada'});
        }
        else
        {
            const usuario =JSON.parse(user||'{"data":"test"}');
            return dispatch(
                {
                    type:'cesionIniciada',
                    payload:usuario
                }
            );
        }
        //hay token 
        //comprobar si el token es valido implementar en el servidor     
    }
    const singIn=async({email,password}:LoginData)=>{
        try {
            const result = await casaRealApi.post('/login',{email,password});
            //console.log(result.data.serverResponse);
            if(result.data.serverResponse==="Credenciales incorrectas")
            {
                dispatch({
                    type:'addError',
                    payload:result.data.serverResponse
                });

            }
            else
            {
                dispatch({
                    type:'singIn',
                    payload:{
                        token:result.data.serverResponse.token,
                        user:result.data.serverResponse
                    }
                });
                await AsyncStorage.setItem('token',result.data.serverResponse.token);
                await AsyncStorage.setItem('usuario',JSON.stringify(result.data.serverResponse));
                //console.log(result.data.serverResponse.token);


            }
            
        } catch (error) {
            console.log(error.response.data);
        }
    };
    const removeError=()=>{
        dispatch({
            type:'RemoveError'

        });
    }
    const logout=async()=>{
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('usuario');
            dispatch({type:'logout'});
    };
    return(
        <AuthContext.Provider value={{
            ...state,
            singIn,
            logout,
            removeError,
            verificarLogeo
        }}>
            {children}
        </AuthContext.Provider>
    )
}