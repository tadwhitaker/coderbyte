// Count the number of words in the string.

var str = "Argumemt goes here"

function WordCount(str) {
	str_array = str.split(" ");
	console.log(str_array.length);
};

WordCount(str);