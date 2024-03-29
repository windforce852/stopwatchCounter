export const timer = {
    startTime: null,
    recordTimes: [], //store multi elapsedTime
    interval: null, //store setInterval
    duringInterval: false,

    timerString: "00:00.00",
  
    //stop reset the timer
    reset: function () {
        timer.stop();
        recordTimes = [];
        timer.startTime = new Date();
        timer.timerString = "00:00.00" 
    },
  
    //start interval
    startTimerInterval: () => {
      console.log("startTimerInterval");
      interval = setInterval(() => { 
        let tempTime = timer.getElapsedTime();
        timer.timerString = `${timer.formatTime(tempTime)}`;
      }, 10);
      timer.duringInterval = true;
    },
  
    //start, trigger when button Start clicked
    startAndUpdate: function () {
      timer.reset();
      timer.startTimerInterval();
    },
  
    //stop the interval
    stop: function () {
      console.log("stop");
      if (timer.duringInterval) {
        clearInterval(interval);
        timer.duringInterval = false;
        console.log("stopTimerInterval");
        console.log(`${timer.timerString}`)
      }
    },
  
    //getElapsedTime
    getElapsedTime: function () {
      const currentTimeStamp = new Date();
      let elapsedTime = currentTimeStamp - timer.startTime;
      return elapsedTime;
    },
  
    //append current time count to array
    recordTime: function () {
      let tempTime = timer.getElapsedTime();
      let formatedTempTime = `${timer.formatTime(tempTime)}`;
      recordTimes.push(formatedTempTime);  
    },
  
    //turn millseconds to display time
    formatTime: function (elapsedTime) {
      const unitMs = elapsedTime % 100;
      const unitSecond = Math.floor((elapsedTime / 1000) % 60);
      const unitMins = Math.floor(elapsedTime / 1000 / 60);
  
      return `${timer.addNumZeroPadding(unitMins)}:${timer.addNumZeroPadding(unitSecond)}.${timer.addNumZeroPadding(unitMs)}`;
    },
    //add zero to the time if needed
    addNumZeroPadding: function (time) {
      return (time >= 10 ? "" : "0") + time;
    },
  };
  