var cityoptns = document.forms["selects"]["city"].childNodes;
var optValues =[];
var optTexts =[];

for (var i = 0 ; i < cityoptns.length; i++){
	if(cityoptns[i].nodeName=="OPTION")
	{
		optValues.push(cityoptns[i].value);
		optTexts.push(cityoptns[i].innerHTML);
	}
}

function selectCity()
{
	var selReg = document.forms["selects"]["region"].value;
	var selCity =document.forms["selects"]["city"];
	selCity.innerHTML="";
	
	for (var i = 0; i < optValues.length; i++) 
	{
		if(optValues[i].indexOf(selReg)==0)
		{
			selCity.innerHTML+="<option value='"+optValues[i]+"'>"+optTexts[i]+"</option>";		
		}
	}
	
	//window.location.assign("http://hy-it.org")	
}