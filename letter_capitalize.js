var str = "Argument goes here"

function LetterCapitalize(str) {
// split str into an array of each word
	var words = str.split(" ");
	// loop through the entire length of this array
	for (var i = 0; i < words.length; i++) {
		// split each index value into a new array of its letters
		var word = words[i].split("")
		// uppercare the first index of each of these new arrays
		word[0] = word[0].toUpperCase();
// join the array's letters back together
		words[i] = word.join("");
	}
	return words.join(" ");
}

LetterCapitalize(str);


