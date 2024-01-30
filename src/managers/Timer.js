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
        //   timerInHtml.innerHTML = `<p>00:00:00.00</p>`;
        timer.timerString = "00:00.00" //switch to output to var for RN to get rather than set html
        // recordTimesInHtml2.innerHTML = `<p></p>`;
    },
  
    //start interval
    startTimerInterval: () => {
      console.log("startTimerInterval");
      interval = setInterval((updateCallBack) => {  //gpt added update callback
        let tempTime = timer.getElapsedTime();
        // timerInHtml.innerHTML = `<p>${timer.formatTime(tempTime)}</p>`;
        timer.timerString = `${timer.formatTime(tempTime)}`; //output to var for RN
      }, 10);

      //gpt code: Call the callback to update timerString
      updateCallBack(newTimerString);

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
    //   const newNode = document.createElement("li"); hide html related first
    //   newNode.innerHTML = `${formatedTempTime}`;
    //   recordTimesInHtml2.insertBefore(newNode, recordTimesInHtml2.firstChild);
    },
  
    //turn millseconds to display time
    formatTime: function (elapsedTime) {
      const unitMs = elapsedTime % 100;
      const unitSecond = Math.floor((elapsedTime / 1000) % 60);
      const unitMins = Math.floor(elapsedTime / 1000 / 60);
    //   const unitHours = Math.floor(elapsedTime / 1000 / 60 / 60);
  
      return `${timer.addNumZeroPadding(unitMins)}:${timer.addNumZeroPadding(unitSecond)}.${timer.addNumZeroPadding(unitMs)}`;
    },
    //add zero to the time if needed
    addNumZeroPadding: function (time) {
      return (time >= 10 ? "" : "0") + time;
    },
  };
  
//   const startButton = document
//     .getElementById("start")
//     .addEventListener("click", timer.startAndUpdate);
  
//   const recordButton = document
//     .getElementById("record")
//     .addEventListener("click", timer.recordTime);
  
//   const stopButton = document
//     .getElementById("stop")
//     .addEventListener("click", timer.stop);
  
//   const resetButton = document
//     .getElementById("reset")
//     .addEventListener("click", timer.reset);
  
//   const timerInHtml = document.getElementById("timer");
//   const recordTimesInHtml2 = document.getElementById("recordTimeList");