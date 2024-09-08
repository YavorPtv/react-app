import { useState } from "react";

function DataForm(){
    const [name, changeName] = useState("");
    const [age, changeAge] = useState(0);
    const [gender, changeGender] = useState("");
    const [moreInfo, changeInfo] = useState("");
    const [boardData, changeBoardData] = useState("");
    function saveData(){
        return (
            <>
                <h2>Data:</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Message:</strong> {moreInfo}</p>
            </>
        )
        
    }
    return(
        <>
        <input type="text"value={name} onChange={(event) => changeName(event.target.value)}/>
        <br />
        <input value={age} type="number" onChange={(event) => changeAge(event.target.value)}/>
        <br />
        <select value={gender} onChange={(event) => changeGender(event.target.value)}>
            Gender
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <br />
        <textarea value={moreInfo} onChange={(event) => changeInfo(event.target.value)}></textarea>
        <br />

        <button onClick={() => changeBoardData(saveData())}>Save</button>

        <p>{boardData}</p>
        </>
    )
    
}

export default DataForm;