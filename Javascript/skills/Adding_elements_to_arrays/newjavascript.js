



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

input1=prompt("Please enter a number");
input2=prompt("Please enter a number");
input3=prompt("Please enter a number");
var flex=new Array("mek",123,"erku",4,7,"l");

var newflex=new Array();
newflex[0]=input1;
for(var i=0;i<flex.length;i++){
    newflex[i+1]=flex[i];
        }
newflex[flex.length+1]=input2;
newflex[flex.length+2]=input3;

for(var i=0;i<newflex.length;i++){
    document.write(newflex[i]+"<br>");
        }




////////////////////////////////////////////////////////////////



