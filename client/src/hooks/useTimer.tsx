import { useEffect, useRef, useState } from "react";
import { Timer } from "../types";

export default function useTimer({ timestamp, onTick, onExpire }: Timer) {
    
    const [time, setTime] = useState(timestamp);
    const timer = useRef<NodeJS.Timer>();
    
    useEffect(() => {
        timer.current = setInterval(() => {
            setTime(time => time - 1);
            onTick?.();
        }, 1000);

        return () => clearInterval(timer.current);
    }, [timer, onTick]);

    useEffect(() => {
        if (!time) {
            clearInterval(timer.current);
            onExpire?.();
        }
    }, [time, onExpire]);

    return {
        days: Math.floor(time / (60 * 24)),
        hours: Math.floor(time / 3600),
        minutes: Math.floor(time / 60),
        seconds: time % 60
    }
}