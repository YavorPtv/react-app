import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

function UserProvider({children}){
    const [name, setName] = useState('Yavor Petrakiev');
    const [email, setEmail] = useState('yavorpetrakiev@gmail.com');

    return (
        <UserContext.Provider value = {{name, email, setName, setEmail}}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };