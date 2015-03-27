var str = "Argument goes here"

function VowelCount(str) {
	var total = 0
	str = str.toLowerCase().replace(/[^aeiou]/g, "");
	total = str.length;
	console.log(total);
};

VowelCount(str);


