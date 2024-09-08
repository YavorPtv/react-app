import { useEffect } from "react";
import { useState } from "react";

function SetTimer(){
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive){
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1)
            }, 1000)
        }
        else if (!isActive && seconds !== 0){
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds])

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSeconds(0);
        setIsActive(false);
    };

    return(
        <>
            <h1>Seconds: {seconds}</h1>
            <button onClick={toggleTimer}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={resetTimer}>
                Reset
            </button>
            
        </>
    )
}

export default SetTimer;