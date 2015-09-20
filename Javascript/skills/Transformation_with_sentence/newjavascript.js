



////////////////////////String Object////////////////////////////////////


var str="Probability theory is the branch of mathematics concerned with...";

document.write(str.length+"<br>");

str=str.trim();
var wordarray=str.split(" ");
document.write(wordarray.length+"<br>");

document.write(str.toUpperCase()+"<br>");

for(var i=0; i<str.length;i++){
    document.write(str[i]+" ");
}

document.write("<br>");

for(var i=0; i<wordarray.length;i++){
   if(i%2==0) document.write(wordarray[i]+" ");
}

document.write("<br>");

for(var i=0; i<str.length;i++){
   if(str[i]!="a") document.write(str[i]+" ");
}

document.write("<br>");

document.write(str.indexOf("b")+"<br>");


document.write(str.lastIndexOf("l")+"<br>");

document.write(wordarray.join(","));

document.write("<br>");

for(var i=wordarray.length-1; i>=0;i--){
   if(i>0) document.write(wordarray[i]+" ");
   else document.write(wordarray[i]);
}

//////////////////////////////////////////////////////////////








