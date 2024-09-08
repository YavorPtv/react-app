import { useContext } from "react";
import { UserContext } from "./UserContext";

function ProfileEdit(){
    const {name, email, setName, setEmail} = useContext(UserContext);

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return (
        <section className="profile-edit">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type='text'
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Name"
                    required
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type='email'
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
                    required
                />
                <button type="submit">Update Profile</button>
            </form>
        </section>
    );
}

export default ProfileEdit;