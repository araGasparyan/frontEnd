getData('http://fakedomain1234.com/userlist', writeData);

//document.getElementById('output').innerHTML += "show this before data ...";

function getData(dataURI, callback) {
   x();
   writeData('myData');
    var dataArray = [123, 456, 789, 012, 345, 678];
    callback(dataArray);
}

function writeData(myData) {
   console.log(myData);
}

function x(){
     for (i=0;i<10000;i++){
        console.log(i);
    }
}