import { useEffect, useState } from "react";
import "./Timer.module.css";

export default function Timer({time, onTimerEnd}) {
    const [timer, setTimer] = useState(time);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (timer === 0) {
            onTimerEnd();
        }
    }
    , [timer]);

    return (
        <div className="timer">{timer}</div>
    )
}