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

