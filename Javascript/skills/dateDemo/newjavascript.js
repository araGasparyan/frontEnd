function dayConvert(x){
switch(x){
        case 0: 
            return "Sunday";
            case 1: 
            return "Monday";
            case 2:
            return "Tuesday";
            case 3:
            return "Wednesday";
            case 4:
            return "Thursday";
            case 5:
            return "Friday";
            case 2:
            return "Saturday";
            
}
    
    
}

var ob=document.getElementById("date");
var d1 = new Date();
ob.innerHTML="The current date is: "+d1.getFullYear()+" "+(d1.getMonth()+1)+" "+d1.getDate()+"<br>";
var d2 = new Date(2013,6,15);
ob.innerHTML+=dayConvert(d2.getDay())+"<br>";
d1.setDate(d1.getDate()+100);
ob.innerHTML+="After 100 day the month will be "+(d1.getMonth()+1)+"<br>";


   var ob5=document.getElementById("showdays");
   var test=function startcounttemp(){
       var currentdate=new Date();
       //console.log(currentdate);
       var nextmonth=new Date(currentdate);
             nextmonth.setMonth(currentdate.getMonth()+1);
              nextmonth.setDate(1);
              nextmonth.setDate(nextmonth.getDate()-1);
              ob5.innerHTML="The current month will over after "+"<b>"+(nextmonth.getDate()-currentdate.getDate())+" days, "
                     +(23-currentdate.getHours())+" hours, "+(59-currentdate.getMinutes())+" minuts, "
             +(59-currentdate.getSeconds())+" seconds."+"</b>";
//       console.log(currentdate);
//       console.log(nextmonth);
   }
   
   function startcount(){
   setInterval(test,100);
   }
   