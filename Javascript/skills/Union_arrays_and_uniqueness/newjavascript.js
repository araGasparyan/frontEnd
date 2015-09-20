



/////////////////union arrays and delete dublicate values////////////////////

var nums1=new Array(1,5,4,10,45);
var nums2=new Array(4,69,10,-9,-7,10,54);



for(var i=0;i<nums1.length;i++){
    nums1[i]=parseInt(nums1[i]);
    nums2[i]=parseInt(nums2[i]);
}

var unionnums=new Array();

for(var i=0;i<nums1.length;i++){
    unionnums[i]=nums1[i];

}

for(var i=(unionnums.length);i<(nums1.length+nums2.length);i++){
    unionnums[i]=nums2[i-nums1.length];
   
}

 document.write("<br> ");

console.log(unionnums);


var  uniquearray=new Array();
var tmp = true;
for(var i=0;i<unionnums.length;i++){
    if(tmp){uniquearray[uniquearray.length]=unionnums[i]};
    tmp=true;
    for(var j=0;j<unionnums.length;j++){
        
           if(uniquearray[j]==unionnums[i+1]){
        tmp=false;
        break;
    }
        
    }
    
 
            }


console.log(uniquearray);



////////////////////////////////////////////////////////////////










