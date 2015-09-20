/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//a=prompt("Please enter a");
//b=prompt("Please enter b");
//c=prompt("Please enter c");
//a=parseFloat(a);
//
//if(isNaN(a)){
//    alert("a is not number");
//    throw new Error();
//}
//
//b=parseFloat(b);
//if(isNaN(b)){
//    alert("b is not number");
//    throw new Error();
//}
//
//
//c=parseFloat(c);
//if(isNaN(c)){
//    alert("c is not number");
//    throw new Error();
//}
//
//
//if(a===0){
//   document.writeln("It is not quadratic equation");
//throw new Error();
//}
//
//var eq=""+a+"*"+"x*x"+"+"+b+"*"+"x"+"+"+c;
//var d=b*b-4*a*c;
//
//
//if(d<0)
//document.writeln(eq+" does not have real solutions");
//else if(d===0){
//    document.write("The solution of "+eq+" is ");
//    document.write("<br>");
//    document.write('<div style="border: 1px red sold; color:red;">');
//    document.write(-b/2/a);
//    document.write("</div>");
//        }
//else{
//     document.write("The solutions of "+eq+" are ");
//    document.write("<br>");
//    document.write('<div style="border: 1px red sold; color:red;">');
//    document.write((-b-(Math.sqrt(d)))/2/a);
//    document.write("<br>");
//      document.write((-b+(Math.sqrt(d)))/2/a);
//    document.write("</div>");
//}


//var array1=[1,2,3];
//var array2=array1.slice();
//
//console.log(array1);
//console.log(array2);
//
//for(var i=0; i<array2.length; i++){ 
//	document.write(array2[i]+"<br>");
//}
//
//
//document.write("<br>");
//array1[0]=99999;
//
//
//for(var i=0; i<array2.length; i++){ 
//	document.write(array2[i]+"<br>");
//}


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

//var input=prompt("Please enter a number");
//input=parseInt(input);
//
//if(isNaN(input)){
  //  alert("You have entered not integer");
    //throw new Error();
//}

//var result=1;
//for(var i=1; i<=input; i++){ 
   
	
  // result*=i;
    
//}


//document.write("<br>"+result);


/////////////////////////////////////////////////////////////////


////////////////Guess the number//////////////////////////////////

//var initialnumber=3;
//var test=true;
//var input=prompt("Please guees the number frrom 1 to 5");
//input=parseInt(input);
//
//if(isNaN(input)){
//    alert("You have entered not integer");
//    throw new Error();
//}
//
//
//while(test)
//{
//if((input<1)||(input>5)){
//    alert("You are out of interval");
//    alert("Try again");
//    input=prompt("Please guees the number frrom 1 to 5");
//    input=parseInt(input);
//
//if(isNaN(input)){
//    alert("You have entered not integer");
//    throw new Error();
//}
//}
//
//else if(input!==initialnumber){
//     alert("You do not guess the number");
//    alert("Try again");
//    input=prompt("Please guees the number frrom 1 to 5");
//    input=parseInt(input);
//    if(isNaN(input)){
//    alert("You have entered not integer");
//    throw new Error();
//}}
//
//else{
//    alert("VICTORY");
//    test=false;
//    document.write('<h1 style="font-size: 72px; color: red; margin: auto;\n\
//\n\
//\n\
//display: table;">You are Nastradamus</h1>');
//    
//}
//
//}



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

//input=prompt("Please enter a number");
//
//input=parseInt(input);
//if(isNaN(input)){
//    alert("You have entered not integer");
//    throw new error();
//}
//
//var test;
//
//for(j=1; j<=input; j++){
//    test=true;
//for(var i=2;i<=Math.sqrt(j);i++){
//    if(j%i===0)
//        {
//            test=false;
//                                       break;
//        }
//         
//}
//
//if(test)document.write(j+"<br>");
//}



////////////////////////////////////////////////////////////////








/////////////////Fibbonachi series/////////////////////////////

//var first=0;
//var second=1;
//
//
//input=prompt("Please enter a number");
//
//input=parseInt(input);
//if(isNaN(input)){
//    alert("You have entered not integer");
//    throw new error();
//}
//
//
//if(input==1){document.write('0');}
//else if(input==2){
// document.write("0,");
//  document.write("1");}
//else{
//    
//     document.write("0,");
//  document.write("1,");
//for(var i=1;i<=(input-2);i++){
//    temp=(first+second);
//    first=second;
//    second=temp;
//   if(i!=input-2) document.write(temp+",");
//   else document.write(temp+",...");
//}
//
//
//
//
//}

////////////////////////////////////////////////////////////////




/////////////////Array defenitions and typing////////////////////

////տարբերակ 1
//var weekDays=new Array();
//weekDays[0]="Երկուշաբթի";
//weekDays[1]="Երեքշաբթի";
//weekDays[2]="Չորեքշաբթի";
//weekDays[3]="Հինգշաբթի";
//
////տարբերակ 2
//var weekDays = new Array('Երկուշաբթի','Երեքշաբթի','Չորեքշաբթի'); 
//
////տարբերակ 3
//var weekDays=['Երկուշաբթի','Երեքշաբթի','Չորեքշաբթի'];
//
//
//var nums=[1,8,8.7,7,6,36,98];
//
//
//for (var i=0; i<nums.length;i++ )
//{
//    document.write(nums[i]+"<br>");
//}

////////////////////////////////////////////////////////////////




/////////////////Adding elements to array////////////////////

//input1=prompt("Please enter a number");
//input2=prompt("Please enter a number");
//input3=prompt("Please enter a number");
//var flex=new Array("mek",123,"erku",4,7,"l");
//
//var newflex=new Array();
//newflex[0]=input1;
//for(var i=0;i<flex.length;i++){
//    newflex[i+1]=flex[i];
//        }
//newflex[flex.length+1]=input2;
//newflex[flex.length+2]=input3;
//
//for(var i=0;i<newflex.length;i++){
//    document.write(newflex[i]+"<br>");
//        }
//
//


////////////////////////////////////////////////////////////////



/////////////////Filling arrays by prompt, Sorting arrays////////////////////

//input1=prompt("Please enter length of an array");
//
//var nums=new Array();
//
//var i=0;
//while(i<input1){
//    nums[i]=prompt("FILL!");
//    nums[i]=parseInt(nums[i]);
//    i++;
//}
//
//
//for(var i=0;i<nums.length;i++){
//    document.write(nums[i]+"<br>");
//}
//
//
// document.write("<br>");
//  document.write("<br>");
//   document.write("<br>");
//    document.write("<br>");
//
////var nums=new Array(1,5,4,9,45,32,69,34,12,4,0,-1);
//
//for(var i=0;i<nums.length;i++){
//    for(var j=i+1;j<nums.length;j++){
//        if(nums[j]<nums[i]){
//            tmp=nums[i];
//            nums[i]=nums[j];
//            nums[j]=tmp;
//        }
//            }   
//}
//
//for(var i=0;i<nums.length;i++){
//    document.write(nums[i]+"<br>");
//}


////////////////////////////////////////////////////////////////






/////////////////difference of two arrays////////////////////

//var nums1=new Array(1,5,4,9,45,32,69,34,12,4,0,-1);
//var nums2=new Array(4,69,21,-9,-7,0,54,0,44,6,9,-78);
//
//
//for(var i=0;i<nums1.length;i++){
//    nums1[i]=parseInt(nums1[i]);
//    nums2[i]=parseInt(nums2[i]);
//}
//
//var diff=new Array();
//
//for(var i=0;i<nums1.length;i++){
//    diff[i]=nums1[i]-nums2[i];
//document.write("<br> the difference of "+i+"th elements is "+diff[i]);
//}

////////////////////////////////////////////////////////////////



/////////////////union arrays and delete dublicate values////////////////////

//var nums1=new Array(1,5,4,10,45);
//var nums2=new Array(4,69,10,-9,-7,10,54);
//
//
//
//for(var i=0;i<nums1.length;i++){
//    nums1[i]=parseInt(nums1[i]);
//    nums2[i]=parseInt(nums2[i]);
//}
//
//var unionnums=new Array();
//
//for(var i=0;i<nums1.length;i++){
//    unionnums[i]=nums1[i];
//
//}
//
//for(var i=(unionnums.length);i<(nums1.length+nums2.length);i++){
//    unionnums[i]=nums2[i-nums1.length];
//   
//}
//
// document.write("<br> ");
//
//console.log(unionnums);
//
//
//var  uniquearray=new Array();
//var tmp = true;
//for(var i=0;i<unionnums.length;i++){
//    if(tmp){uniquearray[uniquearray.length]=unionnums[i]};
//    tmp=true;
//    for(var j=0;j<unionnums.length;j++){
//        
//           if(uniquearray[j]==unionnums[i+1]){
//        tmp=false;
//        break;
//    }
//        
//    }
//    
// 
//            }
//
//
//console.log(uniquearray);



////////////////////////////////////////////////////////////////










/////////////////////Factoral by function////////////////////////
//
//var a=2;
//var i=0;
//var nums1=new Array(1,5,4,9,45,32,69,34,12,4,0,-1);
//var nums2=new Array(4,78,-9,7,12,56,987);
//var nums3=new Array(89,45,26,89,89,45,12,2,628,12,71,564);
//var nums4=new Array(0,14,586,321,47,89,62,45,12,36,9);
//var nums5=new Array(789,456,123,48967);
//var main=[nums1,nums2,nums3,nums4,nums5];
//while(i<main.length)
//    {
//        var input=prompt("Please enter a number");
//input=parseInt(input);
//factorial(input);
//sort(main[i]);
//i++;
//
//
//    }
//
//
//
//
//function factorial(input){
//a++;
//var result=1;
//for(var i=1; i<=input; i++){ 
//   
//	
//   result*=i;
//    
//}
//
//document.write(result+"<br>");
//document.write(a+"<br>");
//
//}
//
//function sort(arr){
//    console.log(arr);
//    
//    for(var i=0;i<arr.length;i++){document.write(arr[i]+" ");}
//    document.write("<br>");
//    
//    for(var i=0;i<arr.length;i++){
//    for(var j=i+1;j<arr.length;j++){
//        if(arr[j]<arr[i]){
//            tmp=arr[i];
//            arr[i]=arr[j];
//            arr[j]=tmp;
//        }
//            } 
//}
//
//
//for(var i=0;i<arr.length;i++){document.write(arr[i]+" ");}
//document.write("<br>");
//  console.log(arr);
//
//}


////////////////////////////////////////////////////////////////


////////////////////Sum of natural numbers////////////////////////////////


//var inputnat=prompt("Please enter a number");
//var sum=0;
//
//for(var i=1;i<=inputnat;i++){
//    sum+=i;
//}
//
//document.writeln(sum+"<br>");


////////////////////////////////////////////////////////////////




////////////////////////String Object////////////////////////////////////


//var str="Probability theory is the branch of mathematics concerned with...";
//
//document.write(str.length+"<br>");
//
//str=str.trim();
//var wordarray=str.split(" ");
//document.write(wordarray.length+"<br>");
//
//document.write(str.toUpperCase()+"<br>");
//
//for(var i=0; i<str.length;i++){
//    document.write(str[i]+" ");
//}
//
//document.write("<br>");
//
//for(var i=0; i<wordarray.length;i++){
//   if(i%2==0) document.write(wordarray[i]+" ");
//}
//
//document.write("<br>");
//
//for(var i=0; i<str.length;i++){
//   if(str[i]!="a") document.write(str[i]+" ");
//}
//
//document.write("<br>");
//
//document.write(str.indexOf("b")+"<br>");
//
//
//document.write(str.lastIndexOf("l")+"<br>");
//
//document.write(wordarray.join(","));
//
//document.write("<br>");
//
//for(var i=wordarray.length-1; i>=0;i--){
//   if(i>0) document.write(wordarray[i]+" ");
//   else document.write(wordarray[i]);
//}

//////////////////////////////////////////////////////////////








////////////////////////////Search in sentence////////////////




//var text="Probability theory is the branch of mathematics concerned with probability, the analysis of random phenomena.[1] The central objects of probability theory are random variables, stochastic processes, and events: mathematical abstractions of non-deterministic events or measured quantities that may either be single occurrences or evolve over time in an apparently random fashion. If an individual coin toss or the roll of dice is considered to be a random event, then if repeated many times the sequence of random events will exhibit certain patterns, which can be studied and predicted. Two representative mathematical results describing such patterns are the law of large numbers and the central limit theorem.";
//
//document.write("<p style='width: 400px;'>"+text+"</p>");
//
//input=prompt("Please enter the word");
//
//var testtext=text;
//
//var temp=0;
//
//do{
//
//console.log("temp= "+temp);
//console.log("testtext.length= "+testtext.length);
//console.log("testtext.indexOf(input)= "+testtext.indexOf(input));
//console.log(testtext);
//
//
//document.write((testtext.indexOf(input)+temp)+"<br>");
//
//temp+=(testtext.indexOf(input)+input.length);
//
//
//testtext=testtext.substring(testtext.indexOf(input)+input.length,testtext.length);
//
//
//
//}while(testtext.indexOf(input)>=0);

//////////////////////////////////////////////////////////////





///////////////////Object Math and Number///////////////////////////////////////


var x=-7;
var y=-8;

document.write(z=Math.abs(x+y)+"<br>");


x=1.1596;
y=4.7896541233;

z=x*y;

document.write(z+"<br>");
document.write(Math.ceil(z)+"<br>");
document.write(z.toPrecision(3)+"<br>");

for(var i=1; i<=20;i++){
    document.write((11+Math.floor(89*Math.random()))+", ");
}

document.write("<br>");

var str="Probability theory is the branch of mathematics concerned with...";
var words=str.split(" ");

document.write(words[Math.floor((words.length)*Math.random())]+"<br>");
document.write(words[Math.floor((words.length)*Math.random())]+"<br>");

document.write("<br>");
var a=1;
var b=1;
var c=1;
var d=1;
x=1;

document.write(a*Math.pow(x,15)+Math.sqrt(b)+c*d+"<br>");

document.write(Math.E.toFixed(3)+"<br>");
document.write(Math.PI.toFixed(3)+"<br>");

for(var i=5; i<=25;i++){
    document.write("The perimeter of the circle of radius "+i+" is "+2*Math.PI*i+"<br>");
    document.write("The area of the circle of radius "+i+" is "+Math.PI*i*i+"<br>");
}

//////////////////////////////////////////////////////////////