const start = () => {
  let dayNotice =new Audio("audio/clock-bells-hour-signal.wav");
  let hourNotice  = new Audio ("audio/alarm-clock-beep.wav");
  let minuteNotic = new Audio("audio/clock-alarm-beep.wav");

    let myMileSeconds = milliSeconds.value;
    myMileSeconds++;
    milliSeconds.value = myMileSeconds;
   
   setTime = setTimeout(start, "9");

   if (milliSeconds.value==100) {
    milliSeconds.value = 0;
    seconds.value++;
   }else if (seconds.value ==59) { 
    seconds.value = 00;
    minutes.value++;
      minuteNotic.play();
    } else if (minutes.value == 60) {
      minutes.value = 0;
      hours.value++;
      hourNotice.play();
    }else if (hours.value == 24) {
      hours.value= 0;
      days.value++;
        dayNotice.play();
    };
  };
  const pauseTime = () => {
    clearTimeout(setTime);
  };

  const stopTime = () => {
    clearTimeout(setTime);
    milliSeconds.value="";
    seconds.value="";
    minutes.value="";
    hours.value="";
    days.value="";
  };