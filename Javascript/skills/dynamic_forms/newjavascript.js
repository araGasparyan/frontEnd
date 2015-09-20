/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var form=document.forms["text"];


form["rbutton"].onclick=function(){
    if(form["rbutton"].value=="Remove"){
        document.getElementById("txtarea").style.width="300px";
        document.getElementById("txtarea").style.fontSize="20pt";
        form["rbutton"].value="Tell about yourself!!!";
        document.getElementById("txtarea").innerHTML="Tell about you if you have something interesing.";
    } else {
        console.log("sdada");
        document.getElementById("txtarea").style.width="";
        document.getElementById("txtarea").style.fontSize="";
        form["rbutton"].value="Remove";
        document.getElementById("txtarea").innerHTML='<textarea style="resize: both;" rows="4" cols="50"></textarea>';
  
    }
}


form["job"].onchange=function(){
    if(form["job"].value=="yes")
    {
        document.getElementById("opt").style.display="block";
        
    } else {
        document.getElementById("opt").style.display="none";
    }

}
