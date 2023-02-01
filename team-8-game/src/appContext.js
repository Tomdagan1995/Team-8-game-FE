import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const appContext = createContext({});

export default function AppContextProvider({children}){
    const [user, setUser] = useState("");
    const [token, setToken] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userScore, setUserScore] = useState(0)


    
return (
    <appContext.Provider
        value={{user, setUser,token,setToken, userEmail, setUserEmail, userScore, setUserScore}}>
            {children}
    </appContext.Provider>
);
}