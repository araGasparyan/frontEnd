/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


a=prompt("Please enter a");
b=prompt("Please enter b");
c=prompt("Please enter c");
a=parseFloat(a);

if(isNaN(a)){
    alert("a is not number");
    throw new Error();
}

b=parseFloat(b);
if(isNaN(b)){
    alert("b is not number");
    throw new Error();
}


c=parseFloat(c);
if(isNaN(c)){
    alert("c is not number");
    throw new Error();
}


if(a===0){
   document.writeln("It is not quadratic equation");
throw new Error();
}

var eq=""+a+"*"+"x*x"+"+"+b+"*"+"x"+"+"+c;
var d=b*b-4*a*c;


if(d<0)
document.writeln(eq+" does not have real solutions");
else if(d===0){
    document.write("The solution of "+eq+" is ");
    document.write("<br>");
    document.write('<div style="border: 1px red sold; color:red;">');
    document.write(-b/2/a);
    document.write("</div>");
        }
else{
     document.write("The solutions of "+eq+" are ");
    document.write("<br>");
    document.write('<div style="border: 1px red sold; color:red;">');
    document.write((-b-(Math.sqrt(d)))/2/a);
    document.write("<br>");
      document.write((-b+(Math.sqrt(d)))/2/a);
    document.write("</div>");
}



