const start = () => {
  let dayNotice =new Audio("audio/clock-bells-hour-signal.wav");
  let hourNotice  = new Audio ("audio/alarm-clock-beep.wav");
  let minuteNotic = new Audio("audio/clock-alarm-beep.wav");

    let myseconds = ss.value;
    myseconds++;
    ss.value = myseconds;
   
   setTime = setTimeout(start, 1000);
    
    if (ss.value ==59) { 
      ss.value = 00;
      mm.value++;
      minuteNotic.play();
    } else if (mm.value == 60) {
      mm.value = 0;
      hh.value++;
      hourNotice.play();
    }else if (hh.value == 24) {
        hh.value= 0;
        dd.value++;
        dayNotice.play();
    };
  };
  const pauseTime = () => {
    clearTimeout(setTime);
  };

  const stopTime = () => {
    clearTimeout(setTime);
    ss.value="";
    mm.value="";
    hh.value="";
    dd.value="";
  };