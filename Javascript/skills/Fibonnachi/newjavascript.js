


/////////////////Fibbonachi series/////////////////////////////
var first=0;
var second=1;


input=prompt("Please enter a number");

input=parseInt(input);
if(isNaN(input)){
    alert("You have entered not integer");
    throw new error();
}


if(input==1){document.write('0');}
else if(input==2){
 document.write("0,");
  document.write("1");}
else{
    
     document.write("0,");
  document.write("1,");
for(var i=1;i<=(input-2);i++){
    temp=(first+second);
    first=second;
    second=temp;
   if(i!=input-2) document.write(temp+",");
   else document.write(temp+",...");
}




}

////////////////////////////////////////////////////////////////





































