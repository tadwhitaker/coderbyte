var num = 8

function FirstFactorial(num) {
	if(num === 1) {
		return 1;
	}
	return num * FirstFactorial(num-1);
}

FirstFactorial(num);