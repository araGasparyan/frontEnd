/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


           
            var form=document.forms["myform"];
            var massages=document.getElementById("massage");
                             
                             
                             form.onsubmit=function (){
                                 massages.innerHTML="";
                                 var ipnums=form["ip4"].value.split(".");
                                 var manparts=form["MM"].value.split("-");
                                 //console.log(ipnums.length);
                                 var nextstep=true;
                                 var error = false;
                                 
                                 
                        if(ipnums.length!=4)
                        {
                             massages.style.color="red";
                           massages.innerHTML+="IP should have 3 '.' s"+"<br>";
                           form["ip4"].style.borderColor="red";
                           error=true;
                                                     nextstep=false;
                        }
                        
                       
                                                if(nextstep){
                                                 for(var i=0; i<ipnums.length;i++){
                             
                                     var tmpmas=ipnums[i];
                                if((isNaN(ipnums[i]))||ipnums[i]==""||ipnums[i]<0||ipnums[i]>255){
                                    massages.style.color="red";
                                    massages.innerHTML+="The "+(i+1)+"-th item of IP should be an integer from [0,255] "+"<br>"
                                            +"You have: "+tmpmas+" in the "+(i+1)+"-th place <br> <br>";
                                    form["ip4"].style.borderColor="red";
                                   error=true;
                                }
                              }                             
                     }
                                   
                              
                              nextstep=true;
                              
                              if(manparts.length!=3)
                        {
                             massages.style.color="red";
                           massages.innerHTML+="Armenian manuscript code should have 2 '-' s"+"<br>";
                           form["MM"].style.borderColor="red";
                           error=true;
                                                     nextstep=false;
                        }
                        
                        
                      
                            
                            if(nextstep&&(manparts[0]!="MM"))
                               { 
                                   massages.style.color="red";
                           massages.innerHTML+="Armenian manuscript code should start by 'MM'"+"<br>"+
                                   "You have: "+manparts[0];
                           form["MM"].style.borderColor="red";
                           error=true;
                           nextstep=false;
                       }
                             
                                     if(nextstep)
                               { 
                                   var tmp=parseInt(manparts[1]);
                                   if((isNaN(manparts[1]))||manparts[1]==""||manparts[1]<1||manparts[1]>15000){
                                      massages.style.color="red";
                           massages.innerHTML+="Armenian manuscript code shold have number from interval 1-15000"+"<br>"+
                                   "You have: "+manparts[1];
                           form["MM"].style.borderColor="red";
                           error=true;  
                           nextstep=false;
                                   }
                                  
                       }
                            
                          if(nextstep)
                               { 
                                   var numb=manparts[2].substring(0,manparts[2].length-1);
                                   
                                   numb=parseInt(numb);
                                   
                                   console.log(manparts[2][manparts[2].length-1]=="a");
                                   if((isNaN(numb))||(numb>2000)||(numb<1)||!((manparts[2][manparts[2].length-1]=="a")||(manparts[2][manparts[2].length-1]=="b"))){
                                       massages.style.color="blue";
                           massages.innerHTML+="Armenian manuscript code in general ends by something like ????a or ????b"+"<br>"+
                                   "You have: "+manparts[2];
                           form["MM"].style.borderColor="red";
                           error=true;  
                           nextstep=false;
                                                                          }          
                                  
                       }   
                           
                                                          
               if(error){               
                    return false;          
               }
       else{
           massages.style.color="Green";             
        massages.innerHTML+="Good job"+"<br>";
                return false;
    }
                                  
                             };
                             
                             
                             
                             
                             
    