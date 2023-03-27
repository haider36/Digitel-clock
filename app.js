var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var amPm = document.getElementById("am-pm");
setInterval( function() {
    

var date = new Date();
var currentHours = date.getHours();
var amPmValue = 'AM';

if(currentHours > 11){
 if(currentHours !== 12){
    currentHours -=12;
 }
 var amPmValue = 'PM';
}

hours.innerText = currentHours;
minutes.innerText = date.getMinutes();
seconds.innerText = date.getSeconds();
amPm .innerText= amPmValue;
}, 1000);
