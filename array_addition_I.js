// **** Still working on an elegant solution.
// Return true if any combination of the numbers in arr can equal the largest number.
// Uses compareFunction to sort the array by ascending order. a+b will sort it by descending.

var arr = [1, 2, 3, 100]
var sol = [4, 6, 23, 10, 1, 3]

function ArrayAddition(arr) {
	var largest = arr.sort( function(a, b) { 
		return a - b
	});
	// Outer loop
	for (var i = 0; i < largest.length; i++) {	
		var sum += arr[i]; 
		// Inner loop number 1 runs first
		for (var j = 0; j < arr.length; j++) {
			if (i != j) {
				// Keeps adding indexes and checking against largest number
				sum += arr[j];
				if (sum == largest) {
					// Operation will return true if true and stop.
					return true;
				}
			}
		}
		// Inner loop number 2 runs last
		for (var k = 0; k < arr.length; k++) {
			if (i != k) {
				// Subtracting index k from sum and checks against largest number
				sum -= arr[k];
				// 
				if (sum == largest) {
					// Operation will return true if true and stop.
					return true
				}
			}
		}
		sum = 0;
		}
		// Returns false if neither loop returns true.
		return false;

};

ArrayAddition(arr);
