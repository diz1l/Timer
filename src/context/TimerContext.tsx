import React from "react";
import { createContext, useEffect, type ReactNode } from "react";

type TimerProviderProps = {
    children: ReactNode;
};

interface TimerContextType {
    time: number;
    isRunning: boolean;
    start: () => void;
    pause: () => void;
    reset: () => void;
    variants1: () => void;
    variants2: () => void;
    variants3: () => void;
}

const TimerContext = createContext<TimerContextType | null>(null);

export function TimerProvider({ children }: TimerProviderProps) {
    const counterInitial = 1800; // 30 minutes in seconds

    const [timeTic, setTimeTic] = React.useState(counterInitial);
    const [isRunningNow, setIsRunningNow] = React.useState(false);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isRunningNow === true){
            interval = setInterval(() => {
                setTimeTic((prev) => prev - 1);
            }, 1000);
        } 
        
        return () => clearInterval(interval);
        
    }, [isRunningNow]);

    // console.log("TimeTic:", timeTic);
    // console.log("isRunningNow:", isRunningNow);

    return (
        <TimerContext.Provider
            value={{
                time: timeTic,
                isRunning: isRunningNow,
                start: () => setIsRunningNow(true),
                pause: () => setIsRunningNow(false),
                reset: () => {
                    setIsRunningNow(false);
                    setTimeTic(counterInitial);
                },
                variants1: () => setTimeTic(300),
                variants2: () => setTimeTic(600),
                variants3: () => setTimeTic(900), 
            }}
        >
            {children}
        </TimerContext.Provider>
    );
}

export default TimerContext;
