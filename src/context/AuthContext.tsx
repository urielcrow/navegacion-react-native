import React,{createContext,useReducer} from 'react';
import { authReducer } from '../reducers/authReducer';


export interface AuthState {
    isLoggedIn: boolean;
    userName : string;
    userImg : string;
    favoriteIcon?: string;
}

interface AuthContextProps{
    authState : AuthState,
    sigIn: () => void,
    sigOut: () => void;
}

const authInitialState : AuthState = {
    isLoggedIn: false,
    userName : 'Uriel A. Rosales',
    userImg : 'https://i.pinimg.com/originals/ec/61/d3/ec61d3114cc5269485d508244f531bdf.png'
}

export const AuthContext = createContext( {} as AuthContextProps );


export const AuthProvider = ( { children } : {children : JSX.Element | JSX.Element[]} )=>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const sigIn = () =>{
        dispatch({
            type: 'logIn'
        });
    }

    const sigOut = () =>{
        dispatch({
            type: 'logOut'
        });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            sigIn,
            sigOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}
