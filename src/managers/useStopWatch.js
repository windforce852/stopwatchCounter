import React, { useState, useEffect } from "react";

const useStopWatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    const start = () => {
        console.log("stopwatch.start()")
        setIsActive(true);
        // Set the start time to now, subtracting any previously elapsed time
        // in case the stopwatch was paused.
        setStartTime(Date.now() - elapsedTime);
    };

    const stop = () => {
        console.log("stopwatch.stop()")
        setIsActive(false);
    };

    const reset = () => {
        console.log("stopwatch.reset()")
        setIsActive(false);
        setElapsedTime(0);
    };

    useEffect(() => {
        let interval = null;

        if (isActive) {
        // Update the elapsed time every second based on the difference
        // between the current time and the start time.
        interval = setInterval(() => {
            setElapsedTime(Date.now() - startTime);
        }, 50);
        } else if (!isActive && elapsedTime !== 0) {
        clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, startTime, elapsedTime]);

    // Calculate minutes and seconds from elapsedTime
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const Ms = elapsedTime % 100;


    return { minutes, seconds, Ms, start, stop, reset }
}

export default useStopWatch;