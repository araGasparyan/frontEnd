var ob1=document.getElementById("report");
var ob2=document.getElementById("place");

setInterval('lettterCounter()',500);


function lettterCounter(){
    ob2=document.getElementById("place");
    //ob2.getContext();
    //console.log(ob2);
    
    ob1.innerHTML="You have entered "+(ob2.value.length)+" letters and "+wordcounter(ob2.value)+" words";
    console.log(ob2.value);
}


function wordcounter(a){
    var words=0;
    var temparray="";
   //console.log(temparray.length);
    for(var i=0; i<a.length;i++)
    {
        
        if((a[i]===a[i+1])&&(a[i+1]===" ")){}
           else {temparray+=a[i];}
    }
    
   if((temparray[0]===" ")){
       temparray=temparray.substring(1,temparray.length);
   }
    
   if((temparray[temparray.length-1]===" ")||(temparray.length===0))
   {  
    //console.log(temparray.length);
    return (temparray.split(" ").length-1);
   }
   
   
    
    return temparray.split(" ").length;
    
}

