import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext({})


export const AuthProvider = (props) =>{
    const [user, setUser] = useState({
        cpf: ''
    })
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}