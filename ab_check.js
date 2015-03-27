var str = "an absolute martini"

function ABCheck(str) {
	for(var i = 0; i <= str.length; i++)
		if (str[i] == "a") {
			if (str[i+4] == "b") {
				return true;
			}
		}
	return false
};

ABCheck(str);