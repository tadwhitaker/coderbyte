// Return "Arithmetic" if the array of numbers follows an arithmetic pattern.
// Return "Geometric" if it follows a geometric pattern.
// Return -1 if the array doesn't follow either pattern.

var arr = [1,2,3,100]
var geo = [2, 6, 18, 54]
var duece = [2, 4, 6, 8]

function ArithGeo(bike) {
	for (var i = 0; i <= arr.length; i++) {
		if (bike[i + 1] - bike[i] === bike[i + 2] - bike[i + 1]) {
			console.log("arithmetic");
		}
		else if (bike[i + 1] / bike[i] === bike[i + 2] / bike[i + 1]) {
			console.log("geometric");
		}
		else {
			console.log(-1);
		};		
	}

};

		

ArithGeo(duece);


