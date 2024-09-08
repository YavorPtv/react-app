import { useState } from "react";
import { useEffect } from "react";

function ChangeColor(){

    const [backgroundColor, changeBackgroundColor] = useState('white');
    const [fontColor, changeFontColor] = useState('black');

    useEffect(() =>{
        document.body.style.backgroundColor = backgroundColor;
        switch(backgroundColor){
            case 'red': 
                changeFontColor('black');
                break;
            case 'green': 
                changeFontColor('yellow');
                break;
            case 'blue': 
                changeFontColor('white');
                break;
            default: break;
        }
    }, [backgroundColor]);
    return (
    <>
        <select onChange={(event) => changeBackgroundColor(event.target.value)} style={{color:backgroundColor }}>
            <option style={{color:backgroundColor}}>red</option>
            <option style={{color:backgroundColor}}>green</option>
            <option style={{color:backgroundColor}}>blue</option>
        </select>
        
        <p style={{color:fontColor}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a eleifend nisl. Integer aliquam nisi et elit facilisis, eu semper magna lacinia. Nunc sollicitudin tincidunt enim, eget accumsan est feugiat eu. Phasellus porta, elit vitae porttitor sodales, ex eros venenatis metus, non mattis risus arcu ut odio. Phasellus sed elit sodales elit maximus ullamcorper. Duis orci mauris, consectetur id pellentesque a, auctor vel elit. Donec ante dui, dignissim eget cursus quis, imperdiet at diam.</p>
    </>
    );
}

// function clickEvent(color) {
//     changeBackgroundColor('red');
// }

export default ChangeColor;
