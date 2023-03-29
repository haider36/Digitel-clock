// var hours = document.getElementById("hours");
// var minutes = document.getElementById("minutes");
// var seconds = document.getElementById("seconds");
// var amPm = document.getElementById("am-pm");

// // time function to creat digital clock
// setInterval( function() {
    

// var date = new Date();
// var currentHours = date.getHours();
// var amPmValue = 'AM';

// if(currentHours > 11){
//  if(currentHours !== 12){
//     currentHours -=12;
//  }
//  var amPmValue = 'PM';
// }

// hours.innerText = currentHours;
// minutes.innerText = date.getMinutes();
// seconds.innerText = date.getSeconds();
// amPm .innerText= amPmValue;
// }, 1000);

 
 
//   var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
//    var now = new Date(); 
//     var theDay = now.getDay(); 
//    var nameOfToday = dayNames[theDay];


   //  var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase(); 
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= 4; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//        alert("It's one of the cleanest cities"); 
//        } 
//        }

// var text = ("This Is a Aplle");
//  var num = 5.87;

//  var num = Math.floor(Math.random () *10);
//   var Guess = +prompt("Guess the number");

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
   button.addEventListener('click', (e) => {
      if (e.target.innerHTML == '='){
         string = eval(string);
         input.value = string;
      }

      else if(e.target.innerHTML == 'AC'){
         string = "";
         input.value = string;
      }
      else if(e.target.innerHTML == 'DEL'){
         string = string.substring(0, String.length-1);
         input.value = string;
      }
     else{
      string += e.target.innerHTML;
     input.value = string;
}
     
   })
})
