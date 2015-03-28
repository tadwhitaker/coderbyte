// Return true if the argument is a palindrome or false otherwise.

var str = "racecar"

function Palindrome(str) {
	var reversed = str.split("").reverse().join("");
	console.log(str);
	console.log(reversed);
	if (reversed == str) {
		console.log(true);
	}
	else {
		console.log(false);
	}
};

Palindrome(str);