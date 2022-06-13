import {createContext, useContext, useState} from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ( {children }) => {
    const [token , setToken] = useState(null)
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const [faves , setFaves] = useState([])
    return(
        <AuthContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn,faves,setFaves}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)