let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let startBtn = document.getElementById("btn1");
let stopBtn = document.getElementById("btn2");
let resetBtn = document.getElementById("btn3");

let timer;


let startTimer=()=>{

    

    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    timer=setInterval(()=>{
      totalSeconds--;
      if(totalSeconds>0){

        hours = Math.floor(totalSeconds / 3600);
        minutes = Math.floor((totalSeconds % 3600) / 60);
        seconds = totalSeconds % 60;

        hoursInput.value = hours.toString().padStart(2, "0");
        minutesInput.value = minutes.toString().padStart(2, "0");
        secondsInput.value = seconds.toString().padStart(2, "0");
        
        // resetTimer()
      }else{
    
        clearInterval(timer)
        resetTimer()
      }



    },1000)
    console.log("start")
}

let stopTimer=()=>{
    clearInterval(timer)
    console.log("stop")
}

let resetTimer=()=>{
    if(timer){
        clearInterval(timer);
        hoursInput.value = "00";
        minutesInput.value = "00";
        secondsInput.value = "00";
    }
    console.log("reset")
}







startBtn.addEventListener("click",startTimer)
stopBtn.addEventListener("click",stopTimer)
resetBtn.addEventListener("click",resetTimer)