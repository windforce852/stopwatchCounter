import React from "react";
import { useState, useEffect, useRef } from 'react';

const useTimer = () => {
    // let interval =  null //store setInterval
    // let duringInterval =  false

    const [startTime, setStartTime] = useState(null);
    const [time, setTime] = useState("00:00.00");
    const [recordTimes, setRecordTimes] = useState([]);
    const [intervalId, setIntervalId] = useState(null);
    const [duringInterval, setDuringInterval] = useState(false);
    
    const reset = () => {
        stop();
        setRecordTimes([]);
        setStartTime(new Date());
        setTime("00:00.00");
    }

    const startTimerInterval = () => {
        console.log("startTimerInterval");
        // interval = setInterval(() => {  //gpt added update callback
        //   let tempTime = getElapsedTime();
        //   setTime(formatTime(tempTime))
        // }, 10);  

        const newIntervalId = setInterval(() => {
            const tempTime = getElapsedTime();
            setTime(formatTime(tempTime))
        },10)
        setIntervalId(newIntervalId);
        setDuringInterval(true);
    }

    const startAndUpdate = () => {
        reset();
        startTimerInterval();
    }

    const stop = () => {
        console.log("stop");
        if (duringInterval) {
        //   clearInterval(interval);
        //   duringInterval = false;

          clearInterval(intervalId);
          setIntervalId(null);
          setDuringInterval(true);

          console.log("stopTimerInterval");
          console.log(`${time}`)
        }
    }

    const getElapsedTime = () => {
        const currentTimeStamp = new Date();
        let elapsedTime = currentTimeStamp - startTime;
        return elapsedTime;
    }

    const recordTime = () => {
        let tempTime = getElapsedTime();
        let formatedTempTime = `${formatTime(tempTime)}`;    
        
        //https://devpress.csdn.net/react/62eb7bd920df032da732b4d8.html
        setRecordTimes((oldArray) => [...oldArray, formatedTempTime]);
    }

    const formatTime = (elapsedTime) => {
        const unitMs = elapsedTime % 100;
        const unitSecond = Math.floor((elapsedTime / 1000) % 60);
        const unitMins = Math.floor(elapsedTime / 1000 / 60);
    
        return `${addNumZeroPadding(unitMins)}:${addNumZeroPadding(unitSecond)}.${addNumZeroPadding(unitMs)}`;
      }

      const addNumZeroPadding = (formatedTime) => {
        return (formatedTime >= 10 ? "" : "0") + formatedTime;
      }

    return { time, startAndUpdate, stop, reset }
}

export default useTimer;