

////////////////Guess the number//////////////////////////////////

var initialnumber=3;
var test=true;
var input=prompt("Please guees the number frrom 1 to 5");
input=parseInt(input);




while(test)
{
    
    if(isNaN(input)){
    alert("You have entered not integer");
    alert("Try again");
    input=prompt("Please guees the number frrom 1 to 5");
    input=parseInt(input);
}
    
else if((input<1)||(input>5)){
    alert("You are out of interval");
    alert("Try again");
    input=prompt("Please guees the number frrom 1 to 5");
    input=parseInt(input);

if(isNaN(input)){
    alert("You have entered not integer");
    throw new Error();
}
}

else if(input!==initialnumber){
     alert("You do not guess the number");
    alert("Try again");
    input=prompt("Please guees the number frrom 1 to 5");
    input=parseInt(input);
    if(isNaN(input)){
    alert("You have entered not integer");
    throw new Error();
}}

else{
    alert("VICTORY");
    test=false;
    document.write('<h1 style="font-size: 72px; color: red; margin: auto;\n\
\n\
\n\
display: table;">You are Nastradamus</h1>');
    
}

}



///////////////////////////////////////////////////////////


////////////////Order numbers from 10-30 by decreasing//////////////////////////////////


//var test1=true;
//var test2=true;
//input1=prompt("Please enter 1st number from interval 10-30");
//do{
//
//input1=parseInt(input1);
//if(isNaN(input1)){
//    alert("You have entered not integer");
//    input1=prompt("Please enter 1st number from interval 10-30");
//}
//else if((input1<10)||(input1>30)){
//     alert("You are out of interval");
//    input1=prompt("Please enter 1st number from interval 10-30");
//}
//
//else{
//    test1=false;
//}
//
//}
//while(test1)
//
//input2=prompt("Please enter 2nd number from interval 10-30");
//
//do{
//
//input2=parseInt(input2);
//if(isNaN(input2)){
//    alert("You have entered not integer");
//    input2=prompt("Please enter 2nd number from interval 10-30");
//}
//else if((input2<10)||(input2>30)){
//     alert("You are out of interval");
//    input2=prompt("Please enter 2nd number from interval 10-30");
//}
//
//else{
//    test2=false;
//}
//
//}
//while(test2)
//
//for(var i=Math.max(input1,input2);i>=Math.min(input1,input2);i--){
//    document.write(i+"<br>");
//}


///////////////////////////////////////////////////////////





