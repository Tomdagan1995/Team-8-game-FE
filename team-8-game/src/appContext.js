import { createContext, useState, useEffect } from "react";
export const appContext = createContext({});

export default function AppContextProvider({children}){
    const [user, setUser] = useState("");
    const [token, setToken] = useState("")
return (
    <appContext.Provider
        value={{user, setUser,token,setToken}}>
            {children}
    </appContext.Provider>
);
}