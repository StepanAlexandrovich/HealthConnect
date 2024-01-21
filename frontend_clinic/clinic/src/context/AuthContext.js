import React from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = React.createContext("");
// export const AuthData = jwtDecode(localStorage.getItem("token"))

export function AuthData(){
    let o = null
    try {
        o = jwtDecode(localStorage.getItem("token"))
    } catch (error) {
        localStorage.setItem("token","")
    }

    return o
}

export function Roles(){
    let roles = [];
    if(AuthData()!=null){
        roles = AuthData().roles
    }
    return roles
}