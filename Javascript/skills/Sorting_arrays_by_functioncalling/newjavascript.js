




/////////////////////Sorting Arrays by functiion////////////////////////
var a=2;
var i=0;
var nums1=new Array(1,5,4,9,45,32,69,34,12,4,0,-1);
var nums2=new Array(4,78,-9,7,12,56,987);
var nums3=new Array(89,45,26,89,89,45,12,2,628,12,71,564);
var nums4=new Array(0,14,586,321,47,89,62,45,12,36,9);
var nums5=new Array(789,456,123,48967);
var main=[nums1,nums2,nums3,nums4,nums5];
while(i<main.length)
    {
        var input=prompt("Please enter a number");
input=parseInt(input);
factorial(input);
sort(main[i]);
i++;


    }




function factorial(input){
a++;
var result=1;
for(var i=1; i<=input; i++){ 
   
	
   result*=i;
    
}

document.write(result+"<br>");
document.write(a+"<br>");

}

function sort(arr){
    console.log(arr);
    
    for(var i=0;i<arr.length;i++){document.write(arr[i]+" ");}
    document.write("<br>");
    
    for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            tmp=arr[i];
            arr[i]=arr[j];
            arr[j]=tmp;
        }
            } 
}


for(var i=0;i<arr.length;i++){document.write(arr[i]+" ");}
document.write("<br>");
  console.log(arr);

}




////////////////////////////////////////////////////////////////



//var inputnat=prompt("Please enter a number");
//var sum=0;
//
//for(var i=1;i<=inputnat;i++){
//    sum+=i;
//}
//
//document.writeln(sum+"<br>");