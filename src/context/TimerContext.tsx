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
    setCustomTimes: (focusMin: number, breakMin: number) => void;
}

const TimerContext = createContext<TimerContextType | null>(null);

export function TimerProvider({ children }: TimerProviderProps) {
    const counterInitial = 1800; // 30 minutes in seconds

    const [timeTic, setTimeTic] = React.useState(counterInitial);
    const [isRunningNow, setIsRunningNow] = React.useState(false);
    const [focusSeconds, setFocusSeconds] = React.useState(counterInitial);
    const [breakSeconds, setBreakSeconds] = React.useState(300);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isRunningNow === true) {
            interval = setInterval(() => {
                setTimeTic((prev) => {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        setIsRunningNow(false);
                        return 0;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [isRunningNow]);

    const setCustomTimes = (focusMin: number, breakMin: number) => {
        setIsRunningNow(false)
        const focus = Math.max(1, focusMin) * 60
        const breakF = Math.max(1, breakMin) * 60
        setFocusSeconds(focus)
        setBreakSeconds(breakF)
        setTimeTic(focus)
    };

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
                    setTimeTic(focusSeconds);
                },
                variants1: () => setTimeTic(1),
                variants2: () => setTimeTic(600),
                variants3: () => setTimeTic(900),
                setCustomTimes,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
}

export default TimerContext;
