/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var rib=document.getElementById("ribbon").childNodes;
var smallimages = [];
console.log(rib);
for(var i=0;i<rib.length;i++){
    if(rib[i].nodeName==="IMG"){
    smallimages.push(rib[i]);
    }
}





for(var i=0;i<smallimages.length;i++){
    
   
    smallimages[i].onclick=function() {
         var tmp=this.alt;
      console.log(tmp.length);
      console.log(tmp);
    tmp=tmp.substring(1,tmp.length);
        console.log(document.getElementById("preview").childNodes[1]);
       document.getElementById("preview").childNodes[1].src="images/large/l"+tmp+".jpg";
       document.getElementById("preview").childNodes[3].innerHTML=this.name;
}
    
}

//document.getElementsByClassName("ribbon").onclick=



