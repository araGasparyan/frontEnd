


////////////////////////////Search in sentence////////////////




var text="Probability theory is the branch of mathematics concerned with probability, the analysis of random phenomena.[1] The central objects of probability theory are random variables, stochastic processes, and events: mathematical abstractions of non-deterministic events or measured quantities that may either be single occurrences or evolve over time in an apparently random fashion. If an individual coin toss or the roll of dice is considered to be a random event, then if repeated many times the sequence of random events will exhibit certain patterns, which can be studied and predicted. Two representative mathematical results describing such patterns are the law of large numbers and the central limit theorem.";

document.write("<p style='width: 400px;'>"+text+"</p>");

input=prompt("Please enter the word");

var testtext=text;

var temp=0;

do{

console.log("temp= "+temp);
console.log("testtext.length= "+testtext.length);
console.log("testtext.indexOf(input)= "+testtext.indexOf(input));
console.log(testtext);


document.write((testtext.indexOf(input)+temp)+"<br>");

temp+=(testtext.indexOf(input)+input.length);


testtext=testtext.substring(testtext.indexOf(input)+input.length,testtext.length);



}while(testtext.indexOf(input)>=0);





//////////////////////////////////////////////////////////////


