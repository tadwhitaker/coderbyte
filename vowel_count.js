var str = "Argument goes here"

function VowelCount(str) {
	var bozo = str.toLowerCase();
	console.log(bozo);
	var total = []; 
	for (var i = 0; i <= bozo.length; i++) {
		if (bozo[i] == "a") {
			total.push(bozo[i]);
		}
		else if (bozo[i] == "e") {
			total.push(bozo[i]);
		}
		else if (bozo[i] == "i") {
			total.push(bozo[i]);
		}
		else if (bozo[i] == "o") {
			total.push(bozo[i]);
		}
		else if (bozo[i] == "u") {
			total.push(bozo[i]);
		}
		else {
			return false;
		}
	console.log(total);
	// 	var bike = total.length;
	// 	console.log(bike);
	}
};

VowelCount(str);