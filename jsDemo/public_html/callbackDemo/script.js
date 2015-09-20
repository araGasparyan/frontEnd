//document.getElementById('output').innerHTML += ('starting ...');
//document.getElementById('output').innerHTML += ('continuing ...');
//document.getElementById('output').innerHTML += ('ending!');


//document.getElementById('output').innerHTML += ('starting ...');
//document.getElementById('output').innerHTML += ('ending!');
//document.getElementById('output').innerHTML += ('continuing ...');


//document.getElementById('output').innerHTML += ('starting ...');
//var myTimer = window.setTimeout(function() {
//    document.getElementById('output').innerHTML += ('ending!');
//}, 500);
//document.getElementById('output').innerHTML += ('continuing ...');



//document.getElementById('output').innerHTML += ('starting ...');
//
//// Wait half a second before firing the writeEnding() function
//var myTimer = window.setTimeout(writeEnding, 500);
//document.getElementById('output').innerHTML += ('continuing ...');
//console.log(myTimer);
//
//// Define the Write Ending Function
//function writeEnding() {
//    // Write "ending!"
//    document.getElementById('output').innerHTML += ('ending!');
//}


//// Call our main function. Pass it a URI and a callback function
//getData('http://fakedomain1234.com/userlist', writeData);
//
//// Write some stuff to the p tag
//document.getElementById('output').innerHTML += 'show this before data ...';
//
//// Define our main function
//function getData(dataURI, callback) {
//
//    // Normally you would actually connect to a server here.
//    // We're just going to simulate a 3-second delay.
//    var timer = setTimeout(function () {
//
//    	// Here's some data which we're pretending came from dataURI
//        var dataArray = [123, 456, 789, 012, 345, 678];
//
//    	// run our callback function
//        callback(dataArray);
//
//    }, 3000);
//}
//
//function writeData(myData) {
//    document.getElementById('output').innerHTML += myData;
//}



//getData('http://fakedomain1234.com/userlist', writeData);
//
//document.getElementById('output').innerHTML += "show this before data ...";
//
//function getData(dataURI, callback) {
//    var myData = getSomeData(); // fake function
//    setTimeout( function (){console.log(1);}, 3000);
//    callback(myData);
//}
//
//function writeData(myData) {
//    document.getElementById('output').innerHTML += myData;
//}
//
//function getSomeData() {
//  // this would make an XHR connection to the server and get, say, some JSON back
//  var data = 'this is data from the server';
// 
//  return data;
//}

//getData('http://fakedomain1234.com/userlist', writeData);
//
//document.getElementById('output').innerHTML += "show this before data ...";
//
//function getData(dataURI, callback) {
//   x();
//   writeData('myData');
//    var dataArray = [123, 456, 789, 012, 345, 678];
//    callback(dataArray);
//}
//
//function writeData(myData) {
//   console.log(myData);
//}
//
//function x(){
//     for (i=0;i<10000;i++){
//        console.log(i);
//    }
//}


var arr = [1,2,3];
for(key in arr){
    console.log(arr[key]);
}
arr = {
    p1:"aaa",
    pw:"bbb",
    pe:"ccc"
    
}
for(key in arr){
    console.log(arr[key]);
}

console.log(Object.keys(arr).length);