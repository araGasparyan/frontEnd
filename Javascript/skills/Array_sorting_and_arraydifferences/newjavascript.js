



/////////////////Filling arrays by prompt, Sorting arrays////////////////////

input1=prompt("Please enter length of an array");

var nums=new Array();

var i=0;
while(i<input1){
    nums[i]=prompt("FILL!");
    nums[i]=parseInt(nums[i]);
    i++;
}


for(var i=0;i<nums.length;i++){
    document.write(nums[i]+"<br>");
}


 document.write("<br>");
  document.write("<br>");
   document.write("<br>");
    document.write("<br>");

//var nums=new Array(1,5,4,9,45,32,69,34,12,4,0,-1);

for(var i=0;i<nums.length;i++){
    for(var j=i+1;j<nums.length;j++){
        if(nums[j]<nums[i]){
            tmp=nums[i];
            nums[i]=nums[j];
            nums[j]=tmp;
        }
            }
}

for(var i=0;i<nums.length;i++){
    document.write(nums[i]+"<br>");
}



////////////////////////////////////////////////////////////////






/////////////////difference of two arrays////////////////////

//var nums1=new Array(1,5,4,9,45,32,69,34,12,4,0,-1);
//var nums2=new Array(4,69,21,-9,-7,0,54,0,44,6,9,-78);
//
//
//for(var i=0;i<nums1.length;i++){
//    nums1[i]=parseInt(nums1[i]);
//    nums2[i]=parseInt(nums2[i]);
//}
//
//var diff=new Array();
//
//for(var i=0;i<nums1.length;i++){
//    diff[i]=nums1[i]-nums2[i];
//document.write("<br> the difference of "+i+"th elements is "+diff[i]);
//}

////////////////////////////////////////////////////////////////




