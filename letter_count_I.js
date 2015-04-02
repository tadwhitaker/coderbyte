// return the first word with the greatest number of repeated letters or -1 if no repeated letters.

var str = "Argument goes here"
var sample = "Today, is the greatest day ever!"

function LetterCountI(str) { 
  var words = str.split(" ");
  var count = 0;
  var word = "";
// Loops through each letter of each word
  for (var i = 0; i < words.length; i++) {
// puts the word on its own line
    var wordx = words[i];
    var sum = 0;
    for (var j = 0; j < words[i].length; j++) {  
// loops through each letter of wordx
      var letter = wordx[j];
      for (var k = 0; k < wordx.length; k++) {
// loops through each letter of wordx, comparing each one against j
        if ((j != k) && (letter === wordx[k])){
          sum += 1;
        }
      }
    }
    if (sum > count) {
        count = sum;
        word = wordx;
    }
  }
  if (count > 0) {
    return word;
  } else {
    return "-1";
  }
}

LetterCountI(str);


