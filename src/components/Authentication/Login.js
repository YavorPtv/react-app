import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Login(){
    const {isLoggedIn, logIn} = useContext(AuthContext);
    if (isLoggedIn) return;
    const handleLogin = (e) => {
        e.preventDefault();
        logIn({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        })
    }
    return (
        <form onSubmit={handleLogin}>
            <label>Name: </label>
            <input id="name"/> <br />
            <label>Email: </label>
            <input id="email"/><br />
            <label>Password: </label>
            <input id="password"/><br />
            <button type="submit">Log in</button><br />
        </form>
    )
}

export default Login;