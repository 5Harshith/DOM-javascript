const startStopBtn =document.querySelector('.startStopBtn')
const resetBtn = document.querySelector('.resetBtn')
// variable for time values
let second =0
let minutes =0
let hours =0

// variable for leading zero
let leadingSecond =0;
let leadingMinutes =0;
let leadingHours =0;

// variable for setInterval and Timerstatus
let timerInterval =null;
let timerstatus = "stopped";

// stor watch function
function stopwatch(){
  second++
  if(second/60 === 1)
  {
        second =0;
        minutes++;
      
      if(minutes/60 === 1)
      {
        minutes=0;
        hours++
      }
  }

  if(second <10){
    leadingSecond ="0" + second.toString();
  }else{
    leadingSecond=second;
  }
  if(minutes <10){
    leadingMinutes ="0" + minutes.toString();
  }else{
    leadingMinutes = minutes;
  }
  if(hours <10){
    leadingHours ="0" + hours.toString();
  }else{
    leadingHours = hours;
  }

  let displayTimer =document.getElementById('timer').innerText=
  leadingHours+':'+leadingMinutes+':'+leadingSecond;
}

// window.setInterval(stopwatch,1000)

startStopBtn.addEventListener('click',function(){
  if(timerstatus==='stopped')
  {
    timerInterval =window.setInterval(stopwatch,1000);
    document.querySelector('.startStopBtn').innerHTML =
    `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerstatus="started";
  }
  else{
    window.clearInterval(timerInterval);
    document.querySelector('.startStopBtn').innerHTML =
    `<i class="fa-solid fa-play" id="play"></i>`;
    timerstatus="stopped";
  }
})

resetBtn.addEventListener('click',function(){
  window.clearInterval(timerInterval);
  second=0;
  minutes=0;
  hours=0;
  document.querySelector('#timer').innerHTML="00:00:00"
  document.querySelector('.startStopBtn').innerHTML =
  `<i class="fa-solid fa-play" id="play"></i>`;
})

