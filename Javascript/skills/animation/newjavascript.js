
          


var ob1=document.getElementById("runhorse");
            var ob2=document.getElementById("runostrich");
            var ob3=document.getElementById("runtortoise");
            

 var winner1=false;
 var winner2=false;
 var winner3=false;
 
  var randgen=10;
var step1=25;
var step2=25;
var step3=25;
var ministep1;
var ministep2;
var ministep3;

       var timestep=100;
      
       
          
          
          
          
          
          
          
           
            function myclick(){
              
                /*
                var winnercandidate;
                
                 if(document.getElementById('wchorse').checked){
           winnercandidate='horse';
        }  else if(document.getElementById('wcostrich').checked){
            winnercandidate='ostrich';
        } else{winnercandidate='tortoise';}
                */
               
               
               if((document.getElementById('wchorse').checked)|document.getElementById('wcostrich').checked|(document.getElementById('wctortoise').checked))
               {
                ministep1=Math.floor(3+randgen*Math.random());
                ministep2=Math.floor(3+randgen*Math.random());
                ministep3=Math.floor(3+randgen*Math.random());
           var tstep1=25;
var tstep2=25;
var tstep3=25;
var tministep1=ministep1;
var tministep2=ministep2;
var tministep3=ministep3;
                       
                while(true){
                 
                    setTimeout('go1(step1)', timestep);
                    setTimeout('go2(step2)', timestep);
                    setTimeout('go3(step3)', timestep);
                     timestep+=100;
                     tstep1+=tministep1;
                     tstep2+=tministep2;
                     tstep3+=tministep3;
                     
                         
                    winner1=(tstep1>1300);
                    if(winner1) break;
                                   
               winner2=(tstep2>1300);
                    if(winner2) break;
                    
                     winner3=(tstep3>1300);
                    if(winner3) break;
             
                }
                        setTimeout(function() {
                            
                            if((winner1)&&(document.getElementById('wchorse').checked))
                                alert("Horse and you win");
                            else if((winner1)&&!(document.getElementById('wchorse').checked))
                            alert("Horse win the race and you loose the game");
                            else if((winner2)&&(document.getElementById('wcostrich').checked))
                            alert("Ostrich and you win");
                            else if((winner2)&&!(document.getElementById('wcostrich').checked))
                            alert("Ostrich win the race and you loose the game");
                            else if((winner3)&&(document.getElementById('wctortoise').checked))
                            alert("Tortoise and you win");
                            else 
                            alert("Tortoise win the race and you loose the game"); }, timestep+1000);  
                            
                    }
                    else
                    {
                    alert("Choose your winner candidate");    
                    }
                         
            }
           
           
              function go1(a){
                         
             ob1.style.marginLeft=a+"px";
             step1+=ministep1;
                                            
            }
            
             function go2(a){
                         
             ob2.style.marginLeft=a+"px";
             step2+=ministep2;
                                            
            }
            
             function go3(a){
                         
             ob3.style.marginLeft=a+"px";
             step3+=ministep3;
                                            
            }
           
           
           
          
            
//           var timestep=1000;
//           var h=0;
//            
//            
//            
//            while(h<10){
//                    h++;
//                    setTimeout(function(){ alert("Hello");  }, timestep);
//                    timestep+=1000;
//                   console.log(timestep);
//               }
            
             