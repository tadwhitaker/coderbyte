// Return true if there is an equal number of x's and o's. Otherwise, return false.
// Only these two letters will be entered in the string. 
var tester = "xoooxxxoooooxxxx"

function ExOh(str) {
	var x = tester.replace(/o/g, "")
	var y = tester.replace(/x/g, "")
	if (x.length == y.length) {
		console.log(true);
	}
	else {
		console.log(false);
	}
};

ExOh(str);