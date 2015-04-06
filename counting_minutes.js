// Take the string and return the difference in minutes
// I used this exercise to experiment with regex.
// Others did it more concisely, but I wanted to work with regex.
var str = "12:30pm-12:00am"

function CountingMinutesI(str) {
	// create two values: beginning time and end time
	str = str.replace(/-/, " ");
	var time_array = str.split(" ");
	var am = /am/;
	var pm = /pm/;
	// BEGINNING
	var beginning = time_array[0].toString();
	if (am.test(beginning) == true) {
		var beginning = beginning.replace(/am/, "");
		var beginning_array = beginning.split(":");
		var beginning_hours = beginning_array[0];
		var beginning_minutes = beginning_array[1];
		if (beginning_hours === "12") {
			var beginning_hours = 0;
			var beginning_total = parseInt(beginning_hours) + parseInt(beginning_minutes);
			console.log(beginning_total);
		}
		else if (beginning_array[0] != "12") {
			var beginning_hours = (beginning_array[0] * 60);
			var beginning_total = parseInt(beginning_hours) + parseInt(beginning_minutes);
			console.log(beginning_total);
		}
	}
	else if (pm.test(beginning) == true) {
		var beginning = beginning.replace(/pm/, "");
		var beginning_array = beginning.split(":");
		var beginning_hours = beginning_array[0];
		var beginning_minutes = beginning_array[1];
		if (beginning_hours === "12") {
			var beginning_hours = 720;
			var beginning_total = parseInt(beginning_hours) + parseInt(beginning_minutes);
			console.log(beginning_total);
		}
		else if (beginning_array != "12") {
			var beginning_hours = (beginning_hours * 60) + 720;
			var beginning_total = parseInt(beginning_hours) + parseInt(beginning_minutes);
			console.log(beginning_total);
		}
	}
	// ENDING
		var ending = time_array[1].toString();
		if (am.test(ending) == true) {
		var ending = ending.replace(/am/, "");
		var ending_array = ending.split(":");
		var ending_hours = ending_array[0];
		var ending_minutes = ending_array[1];
		if (ending_hours === "12") {
			var ending_hours = 0;
			var ending_total = parseInt(ending_hours) + parseInt(ending_minutes);
			console.log(ending_total);
		}
		else if (ending_array[0] != "12") {
			var ending_hours = (ending_array[0] * 60);
			var ending_total = parseInt(ending_hours) + parseInt(ending_minutes);
			console.log(ending_total);
		}
	}

	else if (pm.test(ending) == true) {
		var ending = ending.replace(/pm/, "");
		var ending_array = ending.split(":");
		var ending_hours = ending_array[0];
		var ending_minutes = ending_array[1];
		if (ending_hours === "12") {
			var ending_hours = 720;
			var ending_total = parseInt(ending_hours) + parseInt(ending_minutes);
			console.log(ending_total);
		}
		else if (ending_array != "12") {
			var ending_hours = (ending_hours * 60) + 720;
			var ending_total = parseInt(ending_hours) + parseInt(ending_minutes);
			console.log(ending_total);
		}
	}
	var total = beginning_total - ending_total;
	console.log(total);
};

CountingMinutesI(str);
