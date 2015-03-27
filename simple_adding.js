var num = 8

function SimpleAdding(num) {
	var total = 0
	// add num to total
	for (num; num > 0; num--) {
		total = total + num;
	}
	console.log(total);
}

SimpleAdding(num);