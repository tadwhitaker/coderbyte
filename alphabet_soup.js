var str = "Argument goes here"

function AlphabetSoup(str) {
	var a = str.replace(/ /g, "")
			   .split("")
			   .sort()
			   .join(',')
			   .toLowerCase();
	console.log(a);
};

AlphabetSoup(str);