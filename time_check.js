var num = 270

function TimeConvert(num) {
	var total = [ , ":", ]
	if (num < 60) {
		total[0] = 0;
		total[2] = num;
		total = total.join('');
		console.log(total);
	}
	else if (num > 60) {
		var minutes = num % 60;
		total[2] = minutes;
		var hours = num / 60;
		hours = Math.floor(hours);
		total[0] = hours;
		total = total.join('');
		console.log(total);
	}
};

TimeConvert(num);