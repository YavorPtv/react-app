import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Profile(){
    const {isLoggedIn, userData} = useContext(AuthContext);
    if (!isLoggedIn) return;
    return (
        <>
            <p id="name">Name: {userData.name}</p>
            <p id="email">Email: {userData.email}</p>
            <p id="password">Password: {userData.password}</p>
        </>
    )
}

export default Profile;