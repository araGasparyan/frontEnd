


///////////////////Object Math///////////////////////////////////////


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
    document.write("The perimeter of the circle of radius "+i+" is"+2*Math.PI*i+"<br>");
    document.write("The area of the circle of radius "+i+" is"+Math.PI*i*i+"<br>");
}

//////////////////////////////////////////////////////////////