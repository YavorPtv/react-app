import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Logout(){
    const {isLoggedIn, logOut} = useContext(AuthContext);
    if (!isLoggedIn) return;
    const handleLogout = () => {
        logOut();
    }
    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout;