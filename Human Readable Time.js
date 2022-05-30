/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/



function humanReadable (seconds) {
  var hour,minutes=0;
  if(seconds<0 || seconds>359999) {return false;}
  else{
    minutes=Math.floor(seconds/60);
    seconds=seconds%60;
    hour = Math.floor(minutes/60);
    minutes=minutes%60;
    if(minutes<10){
      minutes="0"+minutes;
    }
   if(hour<10){
      hour="0"+hour;
    }
    if(seconds<10){
      seconds="0"+seconds;
    }
    return hour+":"+minutes+":"+seconds;
  }
  
}
