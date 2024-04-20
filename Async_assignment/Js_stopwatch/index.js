let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds")
let startBtn = document.getElementById("btn1")
let stopBtn = document.getElementById("btn2")
let resetBtn = document.getElementById("btn3")

let timer;

let startTimer = ()=>{
    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;

    timer = setInterval(()=>{
        seconds++;

        if(seconds===60){
            seconds=0;
            minutes++
        }

        if(minutes === 60){
            minutes = 0;
            hours++
        }

        hoursInput.value = hours.toString().padStart(2, "0");
        minutesInput.value = minutes.toString().padStart(2, "0");
        secondsInput.value = seconds.toString().padStart(2, "0");
    },1000)
}

let stopTimer = ()=>{
    clearInterval(timer)
    console.log("stop")
}

let resetTimer = ()=>{
    if(timer){
        clearInterval(timer)
        hoursInput.value = "00";
        minutesInput.value = "00";
        secondsInput.value = "00"
    }
    console.log("reset")
}





startBtn.addEventListener("click",startTimer)
stopBtn.addEventListener("click",stopTimer)
resetBtn.addEventListener("click",resetTimer)


