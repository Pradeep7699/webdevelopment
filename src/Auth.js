import { useReducer,createContext } from "react";
import LoginRouter from "./Loginrouter";
import React, {  useState ,useContext} from 'react';

 export const  AuthContext = createContext()

function Auth() {

  const initialstate={

    loginid:"",
    password:""
  }

  function reducer(state,action){

    console.log("reducer call",state,action)

    switch (action.type) {
      case "LOGIN":
        return {...state, loginid:action.loginid,password:action.password}
    
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <AuthContext.Provider value={{state,dispatch}}>
<LoginRouter/>
 </AuthContext.Provider>
  );
}

export default Auth


