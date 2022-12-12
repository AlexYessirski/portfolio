function getDateTime() {
   var now     = new Date(); 
   var year    = now.getFullYear();
   var month   = now.getMonth()+1; 
   var day     = now.getDate();
   var hour    = now.getHours();
   var minute  = now.getMinutes();
   var second  = now.getSeconds(); 
   var week = now.getDay();
   var am = "AM";
   var pm = "PM";
   var temp = "a";
   if(month.toString().length == 1) {
        month = '0'+month;
   }
   if(day.toString().length == 1) {
        day = '0'+day;
   }   
   if(hour.toString().length == 1) {
        hour = '0'+hour;
   }
   if(minute.toString().length == 1) {
        minute = '0'+minute;
   }
   if(second.toString().length == 1) {
        second = '0'+second;
   }   
   if(week.toString().length == 1) {
      week = '0'+week;
      if (week = '07') {
         week = 'Sunday';
      }
      if (week = '01') {
         week = 'Monday';
      }
      if (week = '02') {
         week = 'Tuesday';
      }
      if (week = '03') {
         week = 'Wednesday';
      }
      if (week = '06') {
         week = 'Thursday';
      }
      if (week = '05') {
         week = 'Friday';
      }
      if (week = '06') {
         week = 'Saturday';
      }
   } 
   if(hour>=12){
      temp = pm;
   } else {
      temp = am;
   }
   var dateTime = week + ', ' + month + '/'+ day +', ' + hour + ':' + minute + ' ' + temp;   
    return dateTime;
}

/*
 example usage: realtime clock
setInterval(function(){
   currentTime = getDateTime();
   document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);
*/

function changeImg(){
   var now     = new Date(); 
   var hour    = now.getHours();
   var temp = "a";
   if(hour>=12){
      temp = "PM";
   } else {
      temp = "AM";
   }

   if (hour <=4){
   document.getElementById('Bg').src="22Desert Sands 22 by Louis Coyle-2.png";
   } else if (hour >=4 && hour <=6){
      document.getElementById('Bg').src="22Desert Sands 22 by Louis Coyle-1.png";
   } else if (hour >=7 && hour <=10){
      document.getElementById('Bg').src="22Desert Sands 22 by Louis Coyle-4.png";
   } else if (hour >=11 && hour <=19){
      document.getElementById('Bg').src="22Desert Sands 22 by Louis Coyle-5.png";
   } else if (hour >=20 && hour <=24){
      document.getElementById('Bg').src="22Desert Sands 22 by Louis Coyle-6.png";
   } else if (hour >=0 && hour <= 3){
      document.getElementById('Bg').src="22Desert Sands 22 by Louis Coyle-6.png";
   }
}

window.onload = changeImg();
