var arrStrings = ["Hey", "what", "is", "up", "dude"];
var lengthOfArray = [];

function lengths(arrStrings){

for(i=0; i < arrStrings.length; i++){
 lengthOfArray.push(arrStrings[i].length);
}
	return lengthOfArray;
}

lengths(arrStrings)


//ROUND 2


function transmogrifier(x,y,z){
	var q = (x * y);
	return math.pow(q, z);
}

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);


//ROUND 3


function toonify(accent, sentence){

	if(accent == "elmer"){
		return sentence.replace("r", "w");
	}
	else if(accent == "daffy"){
		return sentence.replace("s", "th");
	}

}

//ROUND 4


function wordReverse(string){
	var strSplit = string.split(" ");
		var revStr = strSplit.reverse().join(' ');

			console.log(revStr); 
}

wordReverse("Now I know what a TV dinner feels like")


//ROUND 5


function letterReverse(string){
	var splitStr = string.split(" ");
		var newStr = splitStr.reverse().join(' ');
			console.log(newStr);
	}



//ROUND 6


	function longest(arrStrings){
		for( i = 0; i < arrStrings.length; i++){
			if(arrString[i].length > word){
				console.log(arrStrings[i].length);
			}
		}
	}

//FINAL ROUND


function repMaster(input, function){
	return function(string) + "proves I am the rep Master"

}


















