// Take the array, return the second lowest and second greatest, and separate them by a space.

var arr = [1, 1, 100, 3, 1, 1, 1, 666];

function SecondGreatLow(arr) {
	// Sorts the array from lowest to highest.
	var low_sort = arr.sort(function (a, b) {return a - b; });
	for (var i = 1; i <= low_sort.length; ) {
		if (low_sort[i] === low_sort[0]) {
			i++;
		}
		else if (low_sort[i] != low_sort[0]) {
			var second_lowest = low_sort[i];
			var high_sort = arr.sort(function (a, b){ return a + b; });
			for (var j = 1; j <= high_sort.length; ) {
				if (high_sort[j] === high_sort[0]) {
					j++;
				}
				else if (high_sort[j] != high_sort[0]) {
					var second_highest = high_sort[j];
					var answer = "The second-lowest number is " + second_lowest +
					" and the second-highest number is " + second_highest + "."
					console.log(answer);
					return
				}
			}
		}
	}
};

SecondGreatLow(arr);