import { useEffect, useRef, useState } from "react";
import { Timer } from "../../types";

export default function useTimer({ timestamp, onTick, onExpire }: Timer) {
    
    const [time, setTime] = useState(timestamp);
    const timer = useRef<NodeJS.Timer>();

    if (!time) {
        clearInterval(timer.current);
        onExpire?.();
    }
    
    useEffect(() => {
        timer.current = setInterval(() => {
            setTime(time => time - 1);
            onTick?.();
        }, 1000);

        // Unmount
        return () => clearInterval(timer.current);
    }, []);

    return {
        days: Math.floor(time / (60 * 24)),
        hours: Math.floor(time / 3600),
        minutes: Math.floor(time / 60),
        seconds: time % 60
    }
}