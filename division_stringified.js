// Divide num1 by num2 and return the value as a string with commas if they're needed.
// They key is to use the splice method and Math.round to avoid a float.
// This answer courtesy of myclamm (Github). Mine did the same thing only used an if/else so his is shorter.

var num1 = 1000000000
var num2 = 3

function DivisionStringified(first, second) {
	var answer = Math.round(first / second);
	var answer = answer.toString().split("").reverse()
	    for(i=3;i<=answer.length-1;i+=4){
	      answer.splice(i,0,",")
	    };
	//reverse the array back to normal and join it back into a number string
	  return answer.reverse().join("");
};

DivisionStringified(num1, num2);