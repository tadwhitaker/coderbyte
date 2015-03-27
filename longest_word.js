var sen = "here goes Argument"

function LongestWord(sen) {
	// split the string into an array of three words and sort them by length
	var sentence = sen.split(" ").sort();
	console.log(sentence[0]);
	if (sentence[1].length == sentence[2].length) {
		console.log(sentence[1]);
	}

}

LongestWord(sen);