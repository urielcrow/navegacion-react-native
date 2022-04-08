import { AuthState } from "../context/AuthContext"


type action = {type:'logIn'} | {type:'logOut'} 


export const authReducer = (state : AuthState, action : action) :AuthState  => {
    switch (action.type) {
        case 'logIn':
            return {
                ...state,
                isLoggedIn :true
            };

        case 'logOut':
            return {
                ...state,
                isLoggedIn : false
            };
   
        default:
            return state;
    }
}