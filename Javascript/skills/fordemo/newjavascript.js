/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */





////////////////type and sum 1-50 naturel numbers///////////////

//
//document.write("<br>");
//for(var i=1; i<=50; i++){ 
//	document.write(i+"<br>");
//}
//
//
//var sum=0;
//for(var i=1; i<=50; i++){ 
//	sum+=i;
//}
//
//document.write("<br>"+sum+"<br>");
//

/////////////////////////////////////////////////////////////////


////////////////type and sum 3-50 even numbers///////////////


//var sum=0;
//for(var i=3; i<=50; i++){ 
//    if(i%2===0){
//	document.write(i+"<br>");
//    sum+=i;
//    }
//}
//
//
//document.write("<br>"+sum+"<br>");


/////////////////////////////////////////////////////////////////




////////////////type and sum 1-100 numbers divided by three///////////////


//var sum=0;
//for(var i=3; i<=100; i+=3){ 
//   
//	document.write(i+"<br>");
//    sum+=i;
//    
//}
//
//
//document.write("<br>"+sum+"<br>");


/////////////////////////////////////////////////////////////////


////////////////Factorial//////////////////////////////////

var input=prompt("Please enter a number");
input=parseInt(input);

if(isNaN(input)){
    alert("You have entered not integer");
    throw new Error();
}

var result=1;
for(var i=1; i<=input; i++){ 
   
	
   result*=i;
    
}


document.write("<br>"+result);


/////////////////////////////////////////////////////////////////


