import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext({})


export const AuthProvider = (props) =>{
    const [user, setUser] = useState({
        cpf: ''
    })
    const [contentLoaded, setContentLoaded] = useState(false)
    return (
        <AuthContext.Provider value={{user, setUser, contentLoaded, setContentLoaded}}>
            {props.children}
        </AuthContext.Provider>
    )
}