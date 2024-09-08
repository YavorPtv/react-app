import { createContext, useState } from "react";

const AuthContext = createContext();

function Authentication({children}){
    const [isLoggedIn, setLogInState] = useState(false);
    const [userData, setUserData] = useState({});

    const logIn = (newUserData) => {
        setLogInState(true);
        setUserData(newUserData);
    }

    const logOut = () => {
        setLogInState(false);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, logIn, logOut, userData}}>
        {children}
        </AuthContext.Provider>
    );
    
}

export {AuthContext, Authentication};