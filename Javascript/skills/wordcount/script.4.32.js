var txtar = document.forms["text"]["typing"];
var mess = document.getElementById("message");

txtar.onkeyup=function()
{
	tptext=txtar.value;
	chars = tptext.length;
	words = wordCount(tptext);
	
	mess.innerHTML="words count "+words + " chars count "+chars;		
}

function wordCount(text)
{
	var wordArray = text.split(" ");
	var wrdCnt=0;

	for (var i = 0; i < wordArray.length; i++) 
	{
		if(wordArray[i]!="")
		{
			wrdCnt++;	
		}
	}


	return wrdCnt;
}