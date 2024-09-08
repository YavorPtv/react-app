import { useContext } from "react";
import { UserContext } from "./UserContext";

function ProfileInfo(){
    const {name, email} = useContext(UserContext);

    return (
        <section className="profile-info">
            <h2>Profile Information</h2>
            <p><strong>Name:</strong> <span id="profile-name">{name}</span></p>
            <p><strong>Email:</strong> <span id="profile-email">{email}</span></p>
        </section>
    );
}

export default ProfileInfo;