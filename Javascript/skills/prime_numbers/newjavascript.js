


////////////////Prime numbers//////////////////////////////////


//input=prompt("Please enter a number");
//
//input=parseInt(input);
//if(isNaN(input)){
//    alert("You have entered not integer");
//    throw new error();
//}
//
//var result=true;
//for(var i=2;i<input;i++){
//    if(input%i===0)
//        {
//            alert(input+"is not prime");
//            result=false;
//                        break;
//        }
//}
//
//if(result)
//    alert(input+"is prime");






////////////////////////////////////////////////////////////////





/////////////////prime number 2/////////////////////////////

input=prompt("Please enter a number");

input=parseInt(input);
if(isNaN(input)){
    alert("You have entered not integer");
    throw new error();
}

var test;

for(j=1; j<=input; j++){
    test=true;
for(var i=2;i<=Math.sqrt(j);i++){
    if(j%i===0)
        {
            test=false;
                                       break;
        }
         
}

if(test)document.write(j+"<br>");
}



////////////////////////////////////////////////////////////////