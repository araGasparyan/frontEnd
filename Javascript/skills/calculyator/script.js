/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cal=document.getElementById("test");


//'"<input style="cursor: pointer;" type="button" name="rbutton" value="Remove">"'
for(var i=0;i<16;i++){
    if(i<9){
    var node = document.createElement("INPUT");
   node.type="button";
   node.value=i+1;
    node.style.marginLeft="5px";
    node.style.marginBottom="5px";
    node.style.width="44px";
    cal.appendChild(node);
    }
    else if(i==9){
         var node = document.createElement("INPUT");
   node.type="button";
   node.value="0";
    node.style.marginLeft="5px";
    node.style.marginBottom="5px";
    node.style.width="44px";
    cal.appendChild(node);
    }
    else if(i==10){
                 var node = document.createElement("INPUT");
   node.type="button";
   node.value="+";
    node.style.marginLeft="5px";
    node.style.marginBottom="5px";
    node.style.width="44px";
     node.style.alt="op";
    cal.appendChild(node);
    }
    
    else if(i==11){
                 var node = document.createElement("INPUT");
   node.type="button";
   node.value="-";
    node.style.marginLeft="5px";
    node.style.marginBottom="5px";
    node.style.width="44px";
     node.style.alt="op";
    cal.appendChild(node);
    }
    
    else if(i==12){
                 var node = document.createElement("INPUT");
   node.type="button";
   node.value="*";
    node.style.marginLeft="5px";
    node.style.marginBottom="5px";
    node.style.width="44px";
     node.style.alt="op";
    cal.appendChild(node);
    }
    
    else if(i==13){
                 var node = document.createElement("INPUT");
   node.type="button";
   node.value="/";
    node.style.marginLeft="5px";
    node.style.marginBottom="5px";
    node.style.width="44px";
     node.style.alt="op";
    cal.appendChild(node);
    }
    
    else if(i==14){
                 var node = document.createElement("INPUT");
   node.type="button";
   node.value="=";
    node.style.marginLeft="5px";
    node.style.marginBottom="5px";
    node.style.width="44px";
    node.style.alt="op";
    cal.appendChild(node);
    }
    
    else if(i==15){
                 var node = document.createElement("INPUT");
   node.type="button";
   node.value="C";
    node.style.marginLeft="5px";
    node.style.marginBottom="5px";
    node.style.width="140px";
    node.style.alt="op";
    node.style.color="red";
    cal.appendChild(node);
    }
   
}

var calitems=document.forms["items"];
var number=true;
var opperate=false;
var tmp1="";
var tmp2="";
var tmp3="";
var op=""
var equal=false;



function step(){
    if(op=="+"){tmp3=(tmp1+tmp2);}
    else if(op=="-"){tmp3=(tmp1-tmp2);}
    else if(op=="*"){tmp3=(tmp1*tmp2);}
    else if(op=="/"&&tmp2!=0){tmp3=Math.floor((tmp1/tmp2));}
    else if(op=="/"&&tmp2==0){tmp3="Err";}
}

 
 for(var i=0; i<calitems.length;i++)
     {
         var temp=calitems[i].value;
         temp=parseInt(temp);
         if(!isNaN(temp)){
            calitems[i].onclick=function(){
                if(calitems[0].innerHTML=="Err"){return;}
               if(number){
                   
                if((calitems[0].innerHTML=="0")) {calitems[0].innerHTML=this.value;}  
                else {
                             calitems[0].innerHTML+=this.value;
                    }
               
                
                } else{
                    calitems[0].innerHTML="";
                    calitems[0].innerHTML+=this.value;
                    number=true;
                    opperate=true;
                }
            }
                
         }
         
         else if(calitems[i].value=="C"){
              calitems[i].onclick=function(){
             calitems[0].innerHTML=0;
              op="";
              tmp1="";
              tmp2="";
              tmp3="";
             number=true;
            opperate=false;
            equal=false;
         } 
         }
         
         else if(calitems[i].value=="+"){
              calitems[i].onclick=function(){
                  if(calitems[0].innerHTML=="Err"){return;}
                  if(equal){
                      number=false;
                 
                   op="+";
                   tmp1=parseInt(calitems[0].innerHTML);
                   console.log("equal block "+tmp1);
                   tmp2="";
                   equal=false;
                   return;
                  }
                  
                  
                 if(!opperate){
                  tmp1=parseInt(calitems[0].innerHTML);
                
                  number=false;
                  console.log("first block "+tmp1);
                   op="+";
              }
              else
              {
                  
                 
                    tmp2=parseInt(calitems[0].innerHTML);
                    opperate=false;
             
                 console.log("second block "+tmp1);
                
                 number=false;
                step();  
                 
                calitems[0].innerHTML=tmp3;
             tmp1=tmp3;
              op="+";
          }
             
          }
         }
         
         else if(calitems[i].value=="-"){
              calitems[i].onclick=function(){
                  if(calitems[0].innerHTML=="Err"){return;}
              if(equal){
                      number=false;
                 
                   op="-";
                   tmp1=parseInt(calitems[0].innerHTML);
                   console.log("equal block "+tmp1);
                   tmp2="";
                   equal=false;
                   return;
                  }
                  
                  
                 if(!opperate){
                  tmp1=parseInt(calitems[0].innerHTML);
                
                  number=false;
                  console.log("first block "+tmp1);
                   op="-";
              }
              else
              {
                  
                 
                    tmp2=parseInt(calitems[0].innerHTML);
                    opperate=false;
             
                 console.log("second block "+tmp1);
                
                 number=false;
                step();  
                 
                calitems[0].innerHTML=tmp3;
             tmp1=tmp3;
              op="-";
          }
             
          }
     }
     
     else if(calitems[i].value=="/"){
              calitems[i].onclick=function(){
                  if(calitems[0].innerHTML=="Err"){return;}
         if(equal){
                      number=false;
                 
                   op="/";
                   tmp1=parseInt(calitems[0].innerHTML);
                   console.log("equal block "+tmp1);
                   tmp2="";
                   equal=false;
                   return;
                  }
                  
                  
                 if(!opperate){
                  tmp1=parseInt(calitems[0].innerHTML);
                
                  number=false;
                  console.log("first block "+tmp1);
                   op="/";
              }
              else
              {
                  
                 
                    tmp2=parseInt(calitems[0].innerHTML);
                    opperate=false;
             
                 console.log("second block "+tmp1);
                
                 number=false;
                step();  
                 
                calitems[0].innerHTML=tmp3;
             tmp1=tmp3;
              op="/";
          }
             
              }
     }
     
     else if(calitems[i].value=="*"){
              calitems[i].onclick=function(){
                  if(calitems[0].innerHTML=="Err"){return;}
               if(equal){
                      number=false;
                 
                   op="*";
                   tmp1=parseInt(calitems[0].innerHTML);
                   console.log("equal block "+tmp1);
                   tmp2="";
                   equal=false;
                   return;
                  }
                  
                  
                 if(!opperate){
                  tmp1=parseInt(calitems[0].innerHTML);
                
                  number=false;
                  console.log("first block "+tmp1);
                   op="*";
              }
              else
              {
                  
                 
                    tmp2=parseInt(calitems[0].innerHTML);
                    opperate=false;
             
                 console.log("second block "+tmp1);
                
                 number=false;
                step();  
                 
                calitems[0].innerHTML=tmp3;
             tmp1=tmp3;
              op="*";
          }
             
              }
     }
     
     else if(calitems[i].value=="="){
              calitems[i].onclick=function(){
                  if(calitems[0].innerHTML=="Err"){return;}
                var hhh=0;
                  
                  if(op=="+"||op=="-"||op=="/"||op=="*"){
                      
                  
                      if(tmp2==""){
                    tmp2=parseInt(calitems[0].innerHTML);
                }else if(tmp1==""){
                   tmp1=parseInt(calitems[0].innerHTML);
                };
               
                      
              if(!opperate&&!equal){tmp2=parseInt(calitems[0].innerHTML);}
                      if(number){tmp2=parseInt(calitems[0].innerHTML);}
              
                    step();
                       console.log("tmp1= "+tmp1);
                   console.log("tmp2= "+tmp2);
                    console.log("tmp3= "+tmp3);
               equal=true;
                  number=false;
                   calitems[0].innerHTML=tmp3;
                tmp1=parseInt(calitems[0].innerHTML);
               
                } else {
                    
                    number=false;
                   
                }
                
                    
              }
     } 
     
     
     
     }
 
 
    
    
    
    
    
    