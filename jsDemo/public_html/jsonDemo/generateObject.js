var fs=require("fs");

var output='{';

for(i=0;i<300000;i++){
    output+='"prop'+i+'":'+i+',';
}
output+='"prop10001":10001}';


//console.log(1);
//
//
//fs.writeFile('json', output, function (err) {
//  if (err) throw err;
//  console.log('It\'s saved1!');
//});
//
//
//
//
//
//console.log(2);
//
//fs.writeFile('json1', 'aassdd', function (err) {
//  if (err) throw err;
//  console.log('It\'s saved2!');
//});


//console.log(3);


function syncTest(callback){
  fs.writeFile('json1', output, function (err) {
  if (err) throw err;
  console.log('It\'s saved2!');
});
callback('end');
}

var x = function (data){
    console.log(data);
};

syncTest(x);
